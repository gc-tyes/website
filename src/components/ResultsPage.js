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
import { Line } from "react-chartjs-2";

let times = [];
let healthyAverage = 19.47;

class ResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            times: times,
            chartData: {
                labels: ["1st Peg", "2nd Peg", "3rd Peg", "4th Peg", "5th Peg", "6th Peg", "7th Peg", "8th Peg", "9th Peg"],
                datasets: [
                    {
                        label: "Today",
                        backgroundColor: "rgba(117,222,112,0.2)",
                        borderColor: "rgba(117,222,112,1)",
                        pointBackgroundColor: "rgba(117,222,112,1)",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(117,222,112,1)"
                    },
                    {
                        label: "Last Week",
                        backgroundColor: "rgba(232, 244, 231,0.2)",
                        borderColor: "rgba(232, 244, 231,1)",
                        pointBackgroundColor: "rgba(232, 244, 231,1)",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(232, 244, 231,1)"
                    }
                ]
            },
            chartOptions: {
                scales: {
                    yAxes: [{
                        ticks: {
                            callback: function (value, index, values) {
                                return value + 's';
                            }
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Time to Place Peg'
                        }
                    }]
                }
            }
        }
      }

      randomData(n) {
        var result = []
        for (let i = 0; i < n; i++) {
            result.push(1.4 + Math.floor(Math.random() * 21) / 10)
        }
        return result
      }

      async componentWillMount() {
        await db.ref('/Times/value').on('value', function(snapshot) {
            times = snapshot.val();
        })
        const that = this
        db.ref('/Times/value').once('value', function(snapshot) {
            var oldCD = that.state.chartData
            oldCD.datasets[0].data = snapshot.val()
            oldCD.datasets[1].data = that.randomData(9)
            that.setState({
                times: snapshot.val(),
                chartData: oldCD
            })
        })
      }

      calculateSum() {
        console.log(this.state.times)
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
            background: 'linear-gradient(#E8F4E7, #ADD1AA)',
            height: '1000px'
          };

        const mainContainer = {
            background: 'white',
            height: '1000px'
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
                        <Line data={this.state.chartData} options={this.state.chartOptions} />
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