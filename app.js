var express = require('express');
const routes = require('./routes/routes')
const bodyParser = require("body-parser") 

var app = express();


app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({ 
  extended:true
})); 
app.use(express.json()); 
app.use('/',routes)

app.listen(3333);

