const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://10.10.47.203');
//var SerialPort = require ('serialport');
//import express
var express = require('express');
//create express object named app
var app = express();

//instantiate a server on port 3030
var server = app.listen(process.env.PORT || 3030);

var io = require('socket.io')(server);

/*var serialPort = new SerialPort("/dev/cu.usbmodemFA131", {
    baudrate: 9600,
    parser: SerialPort.parsers.readline('\r\n')
});*/

//expose the local public folder for inluding files js, css etc..
app.use(express.static('public'));

//on a request to / serve index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

client.on('connect', function () {
  client.subscribe('/mytopic');
  client.subscribe('/tft');
  client.subscribe('/clock');
  client.subscribe('/fan');
  client.publish('/mytopic', 'Hello mqtt');
});

client.on('message', function(topic, message){
    console.log(message.toString());
    io.sockets.emit('mqtt',{'topic':String(topic),
    'message':String(message)});
});

/*serialPort.on('open', function(){
    console.log('port open');
});

serialPort.on('data', function(data){
    io.sockets.emit('mysocket', data);
    console.log(data);
});*/