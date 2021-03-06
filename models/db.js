/**
 * Created by lincoln on 16/8/28.
 */
var mysql = require('mysql');
var conf = require('../config');
var util = require('util');
var uuid = require('node-uuid');

var conn = mysql.createConnection(conf);
conn.connect();

function Table(sql, util, fields, values){
    "use strict";
    this.sql = sql;
    this.util = util;
    this.field = fields;
    this.values = values;
}

Table.prototype.insert = function(sql, values, callback){
    "use strict";
    if(!callback){
        callback = function(){};
    }
    if(typeof  values['id'] == 'undefined' || values['id'] == undefined || values['id'] == null || values['id'] == ""){
        values.unshift(uuid.v1());
    }
    conn.query(sql, values, function(err, result){
        var res = {};
        if(err){
            console.log(err);
            res = {
                'msg': err,
                'success': false
            }
        } else {
            res = {
                'msg':'添加成功',
                'data': result,
                'success': true
            }
        }
        callback(res);
    })
};

//delete
Table.prototype.delete = function(sql, values, callback){
    "use strict";
    if(!callback)
        callback = function(){};
    conn.query(sql, values,function(err, result){
        var res = {};
        if(err){
            res = {
                'msg': err,
                'success': false
            }
        } else {
            res = {
                'msg': '删除成功',
                'data' : result,
                'success': true
            }
        }
        callback(res);
    })
};

//update
Table.prototype.update = function(sql, values, callback){
    "use strict";
    if(!callback)
        callback = function(){};
    conn.query(sql, values, function(err, result){
        var res = {};
        if(err){
            res = {
                'msg': err,
                'success': false
            }
        } else {
            res = {
                'msg': '更新成功',
                'data': result,
                'success': true
            }
        }
        callback(res);
    })
};

//
//findByCondition
Table.prototype.findByCondition = function(sql, value, callback){
    "use strict";
    if(!callback)
        callback = function(){};
    conn.query(sql, value, function(err, result){
        var res = {};
        if(err){
            res = {
                'msg': err,
                'success': false
            }
        } else {
            console.log(result);
            res = {
                'msg': '查询成功',
                'data': result,
                'success': true
            }
        }
        callback(res);
    })
};
//find
Table.prototype.find = function(sql, callback){
    "use strict";
  if(!callback)
    callback = function(){};
  conn.query(sql, function(err, result){
      var res = {};
      if(err){
          res = {
              'msg': err,
              'success': false
          }
      } else {
          res = {
              'msg': '查询成功',
              'data': result,
              'success': true
          }
      }
      callback(res);
  })

};

module.exports = Table;