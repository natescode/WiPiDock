/**
 * Created by natescode on 2/4/17.
 */
var io = require('socket.io-client');
var socket = io.connect('http//' + serverIP + ':3000',{reconnect:true});

socket.on('connect',function(socket){
    console.log('Connected!');
});
var mouseData = {
    x:132,
    y:73
};
socket.emit('mouse_move','client1',mouseData);

// OSX only compatible mouse reader
// TODO: Change to Debian compatible mouse reader
var mouse = require('osx-mouse');

mouse.on('move', function(x,y){
    console.log(x,y);
    var mouseData = {
        x: 0,
        y: 0
    };
    mouseData.x = x;
    mouseData.y = y;
    socket.emit('mouse_move','client1',mouseData);
    // TODO: Implement Singleton Pattern to set Global delay of processing perhipheral input to reduce overall lag
});