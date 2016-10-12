/**
 * Created by lincoln on 16/9/11.
 */
var express = require('express');
var router = express.Router();
var DB = require('../models/db.js');
var db = new DB();
router.get('/main/addMain', function(req, res, next){
    "use strict";
   res.render('addMain', {'title':'内容列表'});
});

router.post('/main/add', function(req, res, next){
    "use strict";
    var addSql = "insert into f_main (id, image_url, title, content, recommand, create_time) values (?, ?, ?, ?, ?)";
    var values = [];
    var data = req.body;
    var create_time = new Date();
    values.push(data.image_url);
    values.push(data.title);
    values.push(data.content);
    values.push(data.recommand);
    values.push(create_time);
    db.insert(addSql, values, function(result){
        res.json(result);
    })
});

router.post('/main/delete/:id', function(req, res, next){
    "use strict";
    var deleteSql = 'delete from f_main where id = ?';
    var id = req.params.id;
    db.delete(deleteSql, id, function(result){
        res.json(result);
    })
});

router.post('/main/update', function(req, res, next){
    "use strict";
    var updateSql = "update f_main set image_url = ?, title = ?, content=?, recommand = ?, update_time where id = ?";
    var values = [];
    var update_time = new Date();
    var data = req.body;
    values.push(data.image_url);
    values.push(data.title);
    values.push(data.content);
    values.push(data.recommand);
    values.push(update_time);
    values.push(data.id);
    db.update(updateSql, values, function(result){
        res.json(result);
    })
});
router.get('/main/listMain', function(req, res, next){
    "use strict";
    var listSql = 'select * from f_main';
    db.find(listSql, function(result){
       // res.json(result);
        res.render('listMain',{'title':'图文设置','result': result})
    })
});
router.post('/main/detail/:id', function(req, res, next){
    "use strict";
    var detailSql = 'select * from f_main where id = ?';
    var id = req.params.id;
    var values =[];
    values.push(id);
    db.findByCondition(detailSql, values, function(result){
        res.json(result);
    })
});

module.exports = router;