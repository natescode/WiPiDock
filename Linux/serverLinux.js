// Server sample with sockets.

var express = require('express');
var app = express();

// Opens the server on port 3k
var server = app.listen(8000);
console.log('Server is running, port: 8000');

// seting up Socket...
var socket = require('socket.io');
// in / out manager on the server...
var io = socket(server);


//Robot setup
var robot = require('robot-js');

// When a connection is made
io.sockets.on('connection', newConnection);

function newConnection(socket){
	console.log('new connection as: ' + socket.id);
	console.log('Connection made');
	
	// Robot mouse tracking
	var reading = setInterval(readMouse, 10);
	function readMouse() {
		// Get current mouse position
		mouse = robot.Mouse.getPos();
	
		// Create the mouse object.
		sendMouse = { X:mouse.x, Y:mouse.y, B:robot.Mouse.getState() };
		
		// Emit the data to 'mouse'. Client will be listening.
		socket.emit('mouse', sendMouse);
		robot.Timer.sleep(10); 
	}
}



