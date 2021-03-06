var firebase = require('firebase');
var serialport = require('serialport');
// var WebSocketServer = require('ws').Server;
const datarate = 9600;

// var config = {
//     apiKey: "AIzaSyCHhX5PmpsmLQhY95HmLnm2VYc0m81mos0",
//     authDomain: "tyes-web-478b4.firebaseapp.com",
//     databaseURL: "https://tyes-web-478b4.firebaseio.com",
//     projectId: "tyes-web-478b4",
//     storageBucket: "tyes-web-478b4.appspot.com",
//     messagingSenderId: "496916704132"
// };
// firebase.initializeApp(config);
// var db = firebase.database();

db.ref('').once("value").then(res => {
    console.log(res)
})

async function getPort() {
    let portName = '';
    await serialport.list(function (err, ports) {
        ports.forEach(function(port) {
            if (port.comName.includes("usbmodem")) {
                portName = port.comName;
            }
        });
    });
    return portName;
}

function showPortOpen() {
    console.log('port open. Data rate: ' + myPort.baudRate);
}

function readSerialData(data) {
    console.log(data);
}

function showPortClose() {
    console.log('port closed.');
}

function showError(error) {
    console.log('Serial port error: ' + error);
}

async function serialIn() {
    var portName = await getPort();

    if (portName == "") {
        console.log("No usb serial port found");
        return;
    } else {
        console.log("Using port: " + portName + " with data rate " + datarate);
    }
    var myPort = new serialport(portName, datarate);
    var Readline = serialport.parsers.Readline; // make instance of Readline parser
    var parser = new Readline(); // make a new parser to read ASCII lines
    myPort.pipe(parser); // pipe the serial stream to the parser
    // myPort.on('open', showPortOpen);
    parser.on('data', readSerialData);
    myPort.on('close', showPortClose);
    myPort.on('error', showError);
}

serialIn();
