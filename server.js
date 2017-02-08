/**
 * Created by natescode on 2/4/17.
 */
var app = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var robot = require('robotjs');

io.on('connection',function(socket){
   console.log('connection');

   socket.on('CH01',function(from,msg){
        robot.moveMouse(msg.x,msg.y);
        console.log("Mouse Position Set to: " + msg.x + " Y: " + msg.y);
   });
});

http.listen(3000,function(){
    console.log('listening on *:3000');
});