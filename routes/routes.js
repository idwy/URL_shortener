var io = require('socket.io');
const Request = require('request');
var addURL=require('../data/data.js')
var fetchURL=require('../data/url_fetch.js')
var en62=require('./encoding_module.js')
const bodyParser = require("body-parser") 


const express = require('express');
let app = express.Router()

app.get('/', function(req, res, next){
    res.render('./public/index.html');
    next();
  });
  
app.post('/', function(req, res, next){
    var url = req.body.url; 
    var result = en62(url); 
    addURL(url,result);
    res.send(result.toString()); 
  });

app.get('/:url', function(req, res, next){
  console.log(req.params.url)
  var short_url = req.params.url;
  var result=fetchURL(short_url)
  result.then(function(res1,err){
    try{
      res.redirect(301,res1[0][0].URL)
    }
    catch{
      res.send("Not fount")
    }
  })
});

module.exports=app