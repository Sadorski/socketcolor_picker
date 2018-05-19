const express = require('express');
const app = express();
app.use(express.static(__dirname + "/static"));
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;
var color = "blue"
    
io.on('connection', function (socket) { //2
    socket.emit('color', {clr: color});
  socket.on('red', function () { //7
    console.log("received"); //8 (note: this log will be on your server's terminal)
    color = 'red'
    io.emit('color', {clr: color});
  });
  socket.on('yellow', function () { //7
    console.log("received"); //8 (note: this log will be on your server's terminal)
    color = 'yellow'
    io.emit('color', {clr: color});
  });
  socket.on('purple', function () { //7
    console.log("received"); //8 (note: this log will be on your server's terminal)
    color = 'purple'
    io.emit('color', {clr: color});
  });


    
});