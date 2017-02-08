var net = require('net');
var HOST = '192.168.x.xxx';  //the IP of the server local IP
var PORT = 8080; // Port the server is open on

// Connect to the server.
var client = net.connect(PORT, HOST, function(){
	console.log('connected to server!');
});

// Mouse vars
var robot = require('robot-js');
var mouse = robot.Mouse();


// While client is connected, receive the data...
client.on('data', function(data){

		if(data){
			var strData = data.toString();
			var strData = strData.substr(0, strData.length - 1);
			//var strData = strData.replace(/\\n/g, '');
			//var strData = strData.trim();
			
			
			console.log('"' + strData + '"');
	
			//convert to JSON
			
				try{
					var jsoData = JSON.parse(strData);
					//console.log(jsoData);

			
					//Mouse stuff
						robot.Mouse.setPos(jsoData.X, jsoData.Y);
						// if a click happens
						//Left click
						if(jsoData.B[0] == true){
							mouse.press(robot.BUTTON_LEFT);
						}
						if(jsoData.B[0] == false){
							mouse.release(robot.BUTTON_LEFT);
						}

						//Middle click
						if(jsoData.B[1] == true){
							mouse.press(robot.BUTTON_MIDDLE);
						}
						if(jsoData.B[1] == false){
							mouse.release(robot.BUTTON_MIDDLE);
						}
		
						// Right click
						if(jsoData.B[2] == true){
							mouse.press(robot.BUTTON_RIGHT);
						}
						if(jsoData.B[2] == false){
							mouse.release(robot.BUTTON_RIGHT);
						}


			
				}catch(e){
					console.log('\n' + 'PARSE ERROR : ' + e + '\n');
				}

		}else{
			console.log('Undefined data!');
		}

		robot.Timer.sleep(15);	
	



});
