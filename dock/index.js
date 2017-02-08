// app/index.js
// const calc = require('./calc');
//
// const numbersToAdd = [
//     3,
//     4,
//     10,
//     2
// ];
//
// const result = calc.sum(numbersToAdd);
// console.log(`The result is: ${result}`);
// console.log('hello, world!');
//
// // Move the mouse across the screen as a sine wave.
// var robot = require("robotjs");
//
// // Speed up the mouse.
// robot.setMouseDelay(2);
//
// var twoPI = Math.PI * 2.0;
// var screenSize = robot.getScreenSize();
// var height = (screenSize.height / 2) - 10;
// var width = screenSize.width;
//
// for (var x = 0; x < width; x++)
// {
//     y = height * Math.sin((twoPI * x) / width) + height;
//     robot.moveMouse(x, y);
// }

// var hostapd = require('wireless-tools/hostapd');
//
// var options = {
//     channel: 6,
//     driver: 'rt2800usb',
//     hw_mode: 'g',
//     interface: 'wlx14358b0f2232',
//     ssid: 'RaspberryPi',
//     wpa: 2,
//     wpa_passphrase: 'raspberry'
// };
//
// hostapd.enable(options, function(err) {
//     // the access point was created
//     console.log('Wireless Access Point Created Successfully');
// });

var express = require('express');
var app = express();

app.get('/getCoords', function (req, res) {
    var data = {
        x: 131,
        y: 72,
        left_button: true,
        right_button: false
    };
    res.json(data);
});

var server = app.listen(8081, function () {

    // var host = server.address().address;
    var host = "localhost";
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});