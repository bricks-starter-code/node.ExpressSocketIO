var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 3000;

app.use(express.static(path.join(__dirname, 'static')));


io.on('connection', function(socket){
  console.log('a user connected');
});

// Listen for requests
var server = app.listen(port, function() {
  console.log('Loaded on port: ' + port);
});
