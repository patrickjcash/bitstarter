var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
  var content = new Buffer(fs.readFileSync('index.html'),'utf-8');
//  console.log(content.toString());
  response.send(content.toString());
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Listening on " + port);
});
