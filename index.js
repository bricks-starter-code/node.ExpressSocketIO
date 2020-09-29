var express = require('express');
var path = require('path');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var port = 3000;


app.use(express.static(path.join(__dirname, 'static')));


io.on('connection', function(socket){
  console.log('a user connected');
  
  socket.on('join', function(msg){
    
    console.log("join request");
    socket.emit('joinaccept', 'Server Accepted Join');
    
  });
  
  socket.on('disconnect', function(){
    console.log("disconnected");
  })
});


// Listen for requests
var server = http.listen(port, function() {
  console.log('listening on http://localhost:' + port);
});
