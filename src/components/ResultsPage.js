import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button } from 'reactstrap';
import { db } from '../config.js';

let times = [];
db.ref('/Times/value').on('value', function(snapshot) {
    times = snapshot.val();
})
let healthyAverage = 19.47;

class ResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            times: times
        }
      }

      componentWillMount() {
        const that = this
        db.ref('/Times/value').once('value', function(snapshot) {
            that.setState({
                times: snapshot.val()
            })
        })
      }

      calculateSum() {
        var sum = 0;
        for (var i = 0; i < this.state.times.length; i++) {
            sum += this.state.times[i];
        }
        return sum;
      }

      calculateAverage() {
          var sum = this.calculateSum();
          var display = sum / this.state.times.length + ""
          if (display.length > 5) {
            display = display.substring(0, 5)
          }
          return display;
      }

      calculateDeviation() {
        var sum = this.calculateSum();
        var difference = sum - healthyAverage;
        var display;
        if (difference >= 0) {
            display = "+" + difference
        } else {
            display = "" + difference
        }
        if (display.length > 5) {
            display = display.substring(0, 5)
          }
          return display;
      }

      determineServerity() {
          var deviation = this.calculateDeviation();
          if (deviation <= 0) {
              return "None"
          } else if (deviation <= 5) {
              return "Slight";
          } else if (deviation <= 10) {
            return "Moderate";
        } else if (deviation <= 20) {
            return "Advanced";
        } else {
            return "Severe";
        }
      }

    render() {
        const mainBackground = {
            background: '#E8F4E7',
            height: '900px'
          };

        const mainContainer = {
            background: 'white',
            height: '900px'
        }

        const spacing = {
            height: '40px'
        }

        return (
            <div style={mainBackground}>
                <div style={mainContainer} class="container">
                    <div class="container-fluid text-center">
                            <h1 class="display-3 text-center border-bottom">Results</h1>
                    </div>
                    <div style={spacing}></div>
                    <div class="container-fluid">
                        <h1 class="font-weight-bold">Individual Peg Times</h1>
                        <DataPoint title="Time to place first peg: " value={this.state.times[0] + " second(s)"}/>
                        <DataPoint title="Time to place second peg: " value={this.state.times[1] + " second(s)"}/>
                        <DataPoint title="Time to place third peg: " value={this.state.times[2] + " second(s)"}/>
                        <DataPoint title="Time to place fourth peg: " value={this.state.times[3] + " second(s)"}/>
                        <DataPoint title="Time to place fifth peg: " value={this.state.times[4] + " second(s)"}/>
                        <DataPoint title="Time to place sixth peg: " value={this.state.times[5] + " second(s)"}/>
                        <DataPoint title="Time to place seventh peg: " value={this.state.times[6] + " second(s)"}/>
                        <DataPoint title="Time to place eighth peg: " value={this.state.times[7]+ " second(s)"}/>
                        <DataPoint title="Time to place ninth peg: " value={this.state.times[8] + " second(s)"}/>
                        <div style={spacing}></div>
                        <h1 class="font-weight-bold">Time Analysis</h1>
                        <DataPoint title="Total time: " value={this.calculateSum() + " second(s)"}/>
                        <DataPoint title="Average Peg placement time: " value={this.calculateAverage() + " second(s)"}/>
                        <DataPoint title="Deviation From Healthy Average: " value={this.calculateDeviation() + " second(s)"}/>
                        <DataPoint title="Degree of Impairment: " value={this.determineServerity()}/>
                    </div>
                </div>
            </div>
        )
    }
}

class DataPoint extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
      }
    render() {
        const spacing = {
            height: '20px'
        }

        return (
            <div class="row">
                <div class="col">
                    <h3>{this.props.title + " "}</h3>
                </div>
                <div class="col">
                    <h5>{this.props.value}</h5>
                </div>
                <div style={spacing}></div>
            </div>
        )
    }
}

export default ResultsPage;