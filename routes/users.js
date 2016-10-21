var express = require('express');
var router = express.Router();
var DB = require('../models/db.js');
var db = new DB();

/* GET users listing. */
router.get('/users/addUser', function(req, res, next) {
  res.render('addUser', { title: 'Register' });
});

/**
 * user login.ejs
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
router.get('/users', function(req, res, next){
  "use strict";
  var listSql = 'select * from f_user';
  db.find(listSql, function(result){
    //res.json(result);
    res.render('users',{'title':'个人中心',Users: result.data})
  })
});

/**
 * @api /user/delete/:id
 * @method post
 * @param id
 * */
router.post('/users/delete/:id', function(req, res, next){
  "use strict";
  var id = req.params.id;
  var delSql = 'delete from f_user where id = ?';
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
router.post('/users/update', function(req, res, next){
  "use strict";
  var user = req.body;
  var upSql = 'update f_user set username=?, password=? where id=?';
  var values =[];
  values.push(user.username);
  values.push(user.password);
  values.push(user.id);
  db.update(upSql, values, function(result){
    if(result.success){
      res.redirect('/api/users')
    } else {
      layer.msg('更新失败');
    }

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
router.post('/users/register', function(req, res, next){
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
    if(result.success){
      res.redirect('/api/users');
    }
    else {
      res.redirect('/api/addUser')
    }
  })
});

module.exports = router;
