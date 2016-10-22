/**
 * Created by lincoln on 16/10/21.
 */
var express = require('express');
var router = express.Router();
var DB = require('../models/db');
var db = new DB();

router.get('/message', function(req, res, next){
    res.render('message', {'title': 'message'});
});

router.get('/message/listMessage', function(req, res, next){
   var listSql = 'select * from f_message';
   db.find(listSql, function(result){
        if(result.success){
            res.render('listMessage', {'title': 'list', 'messages': result.data})
        }

    })
});
router.post('/message/save', function(req, res, next){
    var data = req.body;
    var addSql = "insert into f_message (id, mobile, content, create_time) values (?,?,?,?)";
    var values = [];
    var create_time = new Date();
    values.push(data.mobile);
    values.push(data.content);
    values.push(create_time);
    db.insert(addSql, values, function(result){
        res.json(result);
    })
});
router.post('/message/delete/:id', function(req, res, next){
    var id = req.params.id;
    var values = [];
    values.push(id);
    var delSql = 'delete from f_message where id = ?';
    db.delete(delSql, values, function(result){
        res.json(result);
    })
});

router.post('/message/detail/:id', function(req, res, next){
   var id = req.params.id;
    var values = [];
    var findSql = 'select * from f_message where id = ?';
    values.push(id);
    db.findByCondition(findSql, values, function(result){
        res.json(result);
    })
});

module.exports = router;