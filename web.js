var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
/*
fs.readFileSync('/index.html', function (err, data) {
  if (err) throw err;
  var buffer = new Buffer(data);
});

var str = buffer.toString('utf-8');
*/
app.get('/', function(request, response) {
  response.send('Hello world 3!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
