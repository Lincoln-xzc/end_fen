/**
 * Created by Htmler on 2016/9/9.
 */
var express = require('express');
var fs = require('fs');
var router = express.Router();
var DB = require('../models/db.js');
var db = new DB();

router.get('/images', function(req, res, next){
    "use strict";
   res.send('images');
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
    var uploadSql = "insert into f_images ('name', 'url', 'size', 'upload_time', 'upload_name') values (?,?,?,?,?)";
    var values = [];
    var tmp_name = req.files.thumbnail.name;
    var tmp_size = req.file.thumbnail.size;
    var cur_date = new Date();
    var upload_name = 'author';
    //获得文件的临时路径
    var tmp_path = req.files.thumbnail.path;
    //指定文件上传后的目录-示列为'image'目录
    var target_path = '../public/images/'+ req.files.thumbnail.name;
    //移动文件
    fs.rename(tmp_path, target_path, function(err){
        if(err) throw err;
        //删除临时文件夹文件
        fs.unlink(tmp_path, function(){
            if(err) throw err;
            res.send('file uploaded to: '+ target_path+'-'+req.files.thumbnail.type);
        })
    });
    values.add(tmp_name);
    values.add(target_path);
    values.add(tmp_size);
    values.add(cur_date);
    values.add(upload_name);
    db.insert(uploadSql, values, function(result){
        res.json(result);
    })
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
    var updateSql = "update f_images set name=?, url=?, size=?, update_time=?, update_name=?  where id= ?";
    values.add(data.id);
    values.add(data.name);
    values.add(data.url);
    values.add(data.size);
    values.add(update_time);
    values.add(update_name);
    db.update(updateSql, values, function(result){
        res.json(result);
    })
});

module.exports = router;
