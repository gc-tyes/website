import React, {Component } from 'react';
import { SerialPort } from 'serialport';

class Device extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          datarate: 9600,
          text: "Button not pressed"
        };

        this.showPortOpen = this.showPortOpen.bind(this);
        this.getPort = this.getPort.bind(this);
        this.readSerialData = this.readSerialData.bind(this);
        this.showPortClose = this.showPortClose.bind(this);
        this.showError = this.showError.bind(this);
        this.serialIn = this.serialIn.bind(this);

      }
      
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    async getPort() {
        var serialport = require('serialport');
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
    
    showPortOpen(myPort) {
        console.log('port open. Data rate: ' + myPort.baudRate);
    }
    
    readSerialData(data) {
        console.log(data);
    }
    
    showPortClose() {
        console.log('port closed.');
    }
    
    showError(error) {
        console.log('Serial port error: ' + error);
    }

    async serialIn() {
        this.setState(() => ({
            text: "pressed"
        }))
        var portName = ""//await this.getPort();
        // UPDATE LOCATION OF SERIAL PORT HERE AND THE ONE OTHER SPOT IT'S USED
        var serialport = require("serialport");
    
        if (portName == "") {
            console.log("No usb serial port found");
            return;
        } else {
            console.log("Using port: " + portName + " with data rate " + this.state.datarate);
        }
        var myPort = new serialport(portName, this.state.datarate);
        var Readline = serialport.parsers.Readline; // make instance of Readline parser
        var parser = new Readline(); // make a new parser to read ASCII lines
        myPort.pipe(parser); // pipe the serial stream to the parser
        // myPort.on('open', showPortOpen);
        parser.on('data', this.readSerialData);
        myPort.on('close', this.showPortClose);
        myPort.on('error', this.showError);
    }
    render() {
        
        return (
            <div class="container text-center">
                <h1 class="display-1">{this.state.text}</h1>
                <button onClick={() => this.serialIn()}>Press me to start</button>
            </div>
        )
    }
}

export default Device;