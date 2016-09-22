/**
 * Created by Htmler on 2016/9/9.
 */
var express = require('express');
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');
var url = require('url');
var router = express.Router();
var DB = require('../models/db.js');
var db = new DB();
var AVATAR_UPLOAD_FOLDER = '/upload/';

router.get('/images', function(req, res, next){
    "use strict";
    var address = req.query.path;
    fs.createReadStream(address).pipe(res);
});
/*
* select images list
*
* **/
router.post('/images/list', function(req, res, next){
    "use strict";
    var listSql = 'select * from f_images';
    db.find(listSql, function(result){
        res.json(result)
    })
});


/**
 * upload the images
 * @param id
*/
router.post('/images/upload', function(req,res, next){
    "use strict";
    var uploadSql = "insert into f_images (id, name, url, size, type, upload_time, upload_name) values (?,?,?,?,?,?,?)";
    var values = [];
    var form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, '..', 'public/upload/');
    form.maxFieldsSize = 2 * 1024 * 1024;
    form.keepExtensions = true;

    form.parse(req, function(err, fields, file){
        var filePath = '';
        var fileSize ='';
        var fileType = '';
        if(file.tmpFile){
            filePath = file.tmpFile.path;
            fileSize = file.tmpFile.size;
            fileType = file.tmpFile.type;
        } else {
            for(var key in file){
                if(file[key].path && filePath === ''){
                    filePath = file[key].path;
                    fileSize = file[key].size;
                    fileType = file[key].type;
                    break;
                }
            }
        }

        var fileExt = filePath.substring(filePath.lastIndexOf('.'));
        //文件移动的目录文件夹，不存在时创建目标文件夹
        var targetDir = path.join(__dirname, '..', 'public/upload/');
        if(!fs.existsSync(targetDir)){
            fs.mkdir(targetDir);
        }

        //判断文件类型是否允许上传
        if (('.jpg.jpeg.png.gif').indexOf(fileExt.toLowerCase()) === -1) {
            var err = new Error('此文件类型不允许上传');
            res.json({code:-1, message:'此文件类型不允许上传'});
        } else {
            var fileName = new Date().getTime() + fileExt;
            var targetFile = form.uploadDir + fileName;

            //移动文件
            fs.rename(filePath, targetFile, function (err) {
                if (err) {
                    console.info(err);
                    res.json({code:-1, message:'操作失败'});
                } else {
                    //上传成功，返回文件的相对路径
                    //var fileUrl = '/end_fen/public/upload/'+ fileName;
                    var cur_date = new Date();
                    var upload_name = 'author';
                    values.push(fileName);
                    values.push(targetFile);
                    values.push(fileSize);
                    values.push(fileType);
                    values.push(cur_date);
                    values.push(upload_name);
                    db.insert(uploadSql, values, function(result){
                    res.json(result);
                    })
                }
            });
        }
    });


});

/**
 * delete images
 * @param id
 *
 * **/
router.post('/images/delete/:id', function(req,res, next){
    "use strict";
    var id = req.search.href.id;
    var deleteSql = 'delete * from f_images where id = ?';
    db.delete(deleteSql,id, function(result){
        res.json(result);
    });
});
/**
 * selected images
 *
 * */
router.post('/images/selected', function(req, res, next){
    "use strict";
    var data = req.body;
    var selectSql = 'select * f_images where name = ?';
    var values = [];
    values.add(data.name);
    db.findByCondition(selectSql, values, function(result){
        res.json(result);
    });
});
router.post('/images/detail/:id', function(req, res, next){
    "use strict";
    var id = req.search.href.id;
    var values = [];
    values.add(id);
    var detailSql = 'select * from f_images where id = ?';
    db.findByCondition(detailSql, values, function(result){
        res.json(result);
    })
});
router.post('/images/update',function(req, res, next){
    "use strict";
    var data = req.body;
    var values = [];
    var update_name = 'author';
    var update_time = new Date();
    var updateSql = "update f_images set name=?, update_name, update_time where id= ?";
    values.add(data.name);
    values.add(update_name);
    values.add(update_time);
    values.add(data.id);
    db.update(updateSql, values, function(result){
        res.json(result);
    })
});

module.exports = router;
