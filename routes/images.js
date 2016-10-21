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
router.get('/images/listImage', function(req, res, next){
    "use strict";
    var listSql = 'select * from f_images';
    db.find(listSql, function(result){
        //res.json(result)
        res.render('listImage', {'title': '图片列表',Images: result.data});
    })
});

router.get('/images/upload', function(req, res, next){
    "use strict";
    res.render('upload', { title: '图片上传' });
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
            console.log(targetFile);

            //移动文件
            fs.rename(filePath, targetFile, function (err) {
                if (err) {
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
    var values = [];
    values.push(req.params.id);
    var deleteSql = "delete from f_images where id = ?";
    db.delete(deleteSql, values, function(result){
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
    var selectSql = 'select * from f_images where name = ?';
    var values = [];
    values.add(data.name);
    db.findByCondition(selectSql, values, function(result){
        res.json(result);
    });
});
router.post('/images/findById', function(req, res, next){
    "use strict";
    var data = req.body;
    var findSql = "select * from f_images where id = ?";
    var values = [];
    values.push(data.id);
    db.findByCondition(findSql, values, function(result){
        res.json(result);
    })
});

router.post('/images/detail/:id', function(req, res, next){
    "use strict";
    var id = req.params.id;
    console.log(req);
    var values = [];
    values.push(id);
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

    var updateSql = "update f_images set name=?, update_time=?, update_name=?where id= ?";
    values.push(data.name);
    values.push(update_time);
    values.push(update_name);
    values.push(data.id);

    db.update(updateSql, values, function(result){
        res.redirect('/api/images/listImage');
    })
});

module.exports = router;
