var net = require('net');
var interval = 70;

//Robot variables
 
var robot = require ("robot-js");

var mouse;
var s;
var sendMouse;




var server = net.createServer(function(connection) { 
   console.log('client connected');
   
   connection.on('end', function() {
      console.log('client disconnected');
   });
   


		var reading = setInterval(readMouse, interval);

		function readMouse() {
			// Get current mouse position
			mouse = robot.Mouse.getPos();
	
			sendMouse = { X:mouse.x, Y:mouse.y, B:robot.Mouse.getState() };
			
			//create a string from json
		
			var strjson = JSON.stringify(sendMouse);
				
			connection.write(strjson);
				
			connection.pipe(connection);
			robot.Timer.sleep (interval); 
		}

});



server.listen(8080, function() { 
   console.log('server is listening');
});

