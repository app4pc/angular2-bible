var processUtil= require("./common/processUtil");

var express = require('express'),
  app = express();
var addApiList= require("././api_routes/apiEngine"),
  middleParse = require('./common/middleware.js');

middleParse.middleware(app,express);
processUtil(express,app);
addApiList(app);
var srvr=app.listen(8080, function() {
  console.log('listening on port : ' + 8080);
});
