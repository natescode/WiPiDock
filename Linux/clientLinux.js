// Client side testing with sockets

// setup socket
var io = require('socket.io-client');
var socket = io.connect('http://xxx.xxx.x.xx:8000', {reconnect:true // Make sure to manually replace xxx.xxx.x.xx with the SERVER IP

socket.on('connect', function(socket){
	console.log('Connection established. Port:8000');
	
});

// Mouse vars
var robot = require('robot-js');
var mouse = robot.Mouse();

// Temp variable for mouse. Holds a previous value so that the mouse doesn't
// try to do a billion clicks per second and 'move' zero paces every 15 ms.
var temp = {X:0, Y:0, B:{'1':false, '2':false, '3':false}};

// Listen for this post-connection
socket.on('mouse', mouseMsg);

function mouseMsg(data){
	// logs the incoming stream of mouse data
	console.log(data);
	
	
	// checks previous values of position in case it doesn't need to move.
	if(temp.X != data.X && temp.Y != data.Y){
		temp.X = data.X;
		temp.Y = data.Y;
		//Mouse stuff
		robot.Mouse.setPos(data.X, data.Y);
	}	
	
	// Checks for left click data.
	if(data.B[0] != temp.B[0]){
		
		if(data.B[0] == true){
			mouse.press(robot.BUTTON_LEFT);
		}
		else{
			mouse.release(robot.BUTTON_LEFT);			
		}
		temp.B = data.B;
	}
	
	// Checks for middle click data.
	if( data.B[1] != temp.B[1]){
		if(data.B[1] == true){
			mouse.press(robot.BUTTON_MIDDLE);
		}
		else{
			mouse.release(robot.BUTTON_MIDDLE);
		}
		temp.B = data.B;
	}
	
	// Checks for right click data.
	if(data.B[2] != temp.B[2]){
		if(data.B[2] == true){
			mouse.press(robot.BUTTON_RIGHT);
		}
		else{
			mouse.release(robot.BUTTON_RIGHT);
		}
		temp.B = data.B;
	}
	
}
