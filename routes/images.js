/**
 * Created by Htmler on 2016/9/9.
 */
var express = require('express');
var router = express.router();
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
    var uploadSql = '';
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
    var value = [];
    var updateSql = 'update f_images set  where id= ?';
});
module.exports = router;