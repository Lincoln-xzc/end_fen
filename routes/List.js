/**
 * Created by Htmler on 2016/10/18.
 */
var express = require('express');
var router = express.Router();
var DB = require('../models/db.js');
var db = new DB();

router.get('/list/:remark', function(req, res, next){
    "use strict";

    var listSql = "select f_contents.id,imageId,name,url,title,content,remark,tip from f_contents LEFT JOIN f_images ON f_contents.imageId = f_images.id where f_contents.remark = ?";
    var values = [];
    values.push(req.params.remark);
    db.findByCondition(listSql, values,function(response){
        if(response.success){
            res.render('List', {'title':'List','Lists': response.data});
        } else {
            res.render('List', {'title': 'List', 'Lists': response});
        }
    });
});

router.post('/list/findById/:id', function(req, res, next){
    "use strict";
    var selectSql = "select f_contents.id,name, url, title, content, remark, tip from f_contents LEFT JOIN f_images ON f_contents.imageId = f_images.id where f_contents.id = ?";
    var values = [];
    values.push(req.params.id);
    db.findByCondition(selectSql, values, function(response){
        res.json(response);
    })
});

router.post('/list/update', function(req, res, next){
    "use strict";
    var data = req.body;
    console.log(data);
    var values = [];
    var updateSql = 'update f_contents set tip=?, update_time=?, update_name=? where id=?';
    var update_time = new Date();
    var update_name = 'author';
    values.push(data.tip);
    values.push(update_time);
    values.push(update_name);
    values.push(data.id);
    db.update(updateSql, values, function(response){
        if(response.success){
            res.redirect('/api/list/'+data.remark);
        } else {
            res.json(response);
        }
    })
});

module.exports = router;

