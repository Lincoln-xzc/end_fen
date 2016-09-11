/**
 * Created by lincoln on 16/9/11.
 */
var express = require('express');
var router = express.Router();
var DB = require('../models/db.js');

router.get('/main', function(req, res, next){
    "use strict";
   res.send('main');
});

router.post('/main/add', function(req, res, next){
    "use strict";
    var addSql = "insert into f_main ('image_id', 'content_id', 'type', 'create_time') values (?, ?, ?, ?)";
    var values = [];
    var data = req.body;
    var create_time = new Date();
    values.add(data.image_id);
    values.add(data.content_id);
    values.add(data.type);
    values.add(create_time);
    db.insert(addSql, values, function(result){
        res.json(result);
    })
});

router.post('/main/delete/:id', function(req, res, next){
    "use strict";
    var deleteSql = 'delete * from f_main where id = ?';
    var id = req.href.search.id;
    db.delete(deleteSql, id, function(result){
        res.json(result);
    })
});

router.post('/main/update', function(req, res, next){
    "use strict";
    var updateSql = "update f_main set image_id = ?, content_id = ?, type=?, update_time where id = ?";
    var values = [];
    var update_time = new Date();
    var data = req.body;
    values.add(data.image_id);
    values.add(data.content_id);
    values.add(data.type);
    values.add(update_time);
    values.add(data.id);
    db.update(updateSql, values, function(result){
        res.json(result);
    })
});
router.post('/main/list', function(req, res, next){
    "use strict";
    var listSql = 'select * from f_main';
    db.find(listSql, function(result){
        res.json(result);
    })
});
router.post('/main/detail/:id', function(req, res, next){
    "use strict";
    var detailSql = 'select * from f_main where id = ?';
    var id = req.href.search.id;
    var values =[];
    values.add(id);
    db.findByCondition(detailSql, values, function(result){
        res.json(result);
    })
});

module.exports = router;