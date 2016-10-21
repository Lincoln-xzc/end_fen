/**
 * Created by lincoln on 16/10/21.
 */
var express = require('express');
var router = express.Route();
var DB = require('../models/db');
var db = new DB();

router.get('/message', function(req, res, next){
    req.render('message', {'title': 'message'});
});

router.post('/message/list', function(req, res, next){
   var listSql = 'select * from f_message';
   db.find(listSql, function(response){
        req.render('message', {'title': 'list', 'messages': response.result})
    })
});
router.post('/message/save', function(req, res, next){
    var data = req.body;
    var addSql = "insert into f_message (id, mobile, content, create_time) values (?,?,?,?)";
    var values = [];
    var create_time = new Date();
    values.push(data.mobile);
    values.push(data.content);
    values.push(data.create_time);
    db.insert(addSql, values, function(response){
        req.json(response);
    })
});
router.post('/message/delete/:id', function(req, res, next){
    var id = req.params.id;
    var values = [];
    values.push(id);
    var delSql = 'delete from f_message where id = ?';
    db.delete(delSql, values, function(response){
        req.json(response);
    })
});

router.post('/message/detail/:id', function(req, res, next){
   var id = req.params.id;
    var values = [];
    var findSql = 'select * from f_message where id = ?';
    values.push(id);
    db.findByCondition(findSql, values, function(response){
        res.json(response);
    })
});

module.exports = router;