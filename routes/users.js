var express = require('express');
var router = express.Router();
var DB = require('../models/db.js');
var db = new DB();

/* GET users listing. */
router.get('/user', function(req, res, next) {
  console.log('user');
});

router.post('/user/login', function(req, res, next){
  "use strict";
  var user =  req.body;
  var selectSql = 'select * from f_user where username = ? AND password = ?';
  var value = [];
  value.push(user.username);
  value.push(user.password);

  db.findByCondition(selectSql, value, function(result){
    console.log(result);
    res.json(result);
  })
});

router.post('/user/add', function(req, res, next){
  "use strict";
  var user = req.body;
  console.log('user');
  var insertSql = "insert into f_username ('id','token', 'username', 'password', 'create_time') values(?,?,?,?,?)";
  var values = [];
  var token = Math.random(100);
  var create_time = new Date();
  values.push(token);
  values.push(user.username);
  values.push(user.password);
  values.push(create_time);
  db.insert(insertSql, values, function(result){
    res.json(result);
  })
});

module.exports = router;