/**
 * Created by lincoln on 16/9/11.
 */
var express = require('express');
var router = express.Router();
var DB = require('../models/db.js');
var db = new DB();

/**
 * @method : get
 * @article
 *
 * */
router.get('/article', function(req,res, next) {
    "use strict";
   res.json('fuck');
});
router.get('/article/addArticle', function(req, res, next){
    "use strict";
    res.render('addArticle', { title: '新增文字' });
})
/**
 * @api /aritcle/add
 * @method post
 * @param title
 * @param content
 * @param create_time
 * @param create_name
 *
 * */
router.post('/article/add', function(req, res, next){
    "use strict";
    var addSql = "insert into f_contents (id, title, content, create_time, create_name) values (?,?,?,?,?)";
    var data = req.body;
    var values = [];
    var create_time = new Date();
    var create_name = 'author';
    values.push(data.title);
    values.push(data.content);
    values.push(create_time);
    values.push(create_name);
    db.insert(addSql, values, function(result){
        res.json(result);
    })

});

/**
 * @api /article/delete/:id
 * @method post
 * @param id
 * */
router.post('/article/delete/:id', function(req, res, next){
    "use strict";
    var deleteSql = 'delete from f_contents where id = ?';
    var value = [req.params.id];
    db.delete(deleteSql, value, function(result){
        res.json(result);
    })
});

/**
 * @api : /article/list
 * @method: post
 * */
router.get('/article/listArticle', function(req,res, next){
    "use strict";
    var selectSql = 'select * from f_contents';
    db.find(selectSql, function(result){
        //res.json(result);
        res.render('listArticle', {'title':'文字列表','result': result});
    })
});

/**
 * @api /article/findByName
 * @methods post
 * @param name
 *
 * */
router.post('/article/findById', function(req, res, next){
    "use strict";
    var selectSql = 'select * from f_contents where id = ?';
    var data = req.body;
    var values = [];
    values.push(data.id);
    db.findByCondition(selectSql, values, function(result){
        res.json(result);
    })
});

/**
 *
 * */


module.exports = router;
