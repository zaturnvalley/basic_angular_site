//require
var express = require('express');
//set
var app = express();
app.use(express.static(__dirname + '/public'));
//route
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
//listen
var server = app.listen(3000);

module.export = server;