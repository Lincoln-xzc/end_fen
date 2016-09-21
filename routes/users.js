var express = require('express');
var router = express.Router();
var DB = require('../models/db.js');
var db = new DB();

/* GET users listing. */
router.get('/user', function(req, res, next) {
  console.log('user');
});
/**
 * user login
 * @param username
 * @param password
 * */
router.post('/user/login', function(req, res, next){
  "use strict";
  var user =  req.body;
  console.log(user);
  var selectSql = 'select * from f_user where username = ? AND password = ?';
  var value = [];
  value.push(user.username);
  value.push(user.password);

  db.findByCondition(selectSql, value, function(result){
    console.log(result);
    res.json(result);
  })
});

/**
 * @api /user/list
 * @method post
 * */
router.post('/user/list', function(req, res, next){
  "use strict";
  var listSql = 'select * from f_user';
  db.find(listSql, function(result){
    res.json(result);
  })
});

/**
 * @api /user/delete/:id
 * @method post
 * @param id
 * */
router.post('/user/delete/:id', function(req, res, next){
  "use strict";
  var id = req.href.search.id;
  var delSql = 'delete * from f_user where id = ?';
  db.delete(delSql, id, function (result) {
    res.json(result);
  })
});

/**
 *@api /user/update
 *@method post
 *@param username
 *@param password
 *@param update_time
 *@param update_name
 *
 * */
router.post('/user/update', function(req, res, next){
  "use strict";
  var user = req.body;
  var upSql = 'update f_user set username=?, password=?, update_time=?, update_name=? where id=?';
  var update_time = new Date();
  var update_name = 'author';
  var values =[];
  values.add(user.username);
  values.add(user.password);
  values.add(update_time);
  values.add(update_name);
  db.update(upSql, values, function(result){
    res.json(result);
  })
});

/**
 * user register
 * @param id
 * @param token
 * @param username
 * @param password
 * @param create_time
 * */
router.post('/user/register', function(req, res, next){
  "use strict";
  var user = req.body;
  var insertSql = "insert into f_user(id, token, username, password, create_time) values(?,?,?,?,?)";
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
