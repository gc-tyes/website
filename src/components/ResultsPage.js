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

class ResultsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            times: {
                first: "0",
                second: "1",
                third: "2",
                fourth: "3",
                fifth: "4",
                sixth: "5",
                seventh: "6",
                eighth: "7",
                ninth: "8"
            }
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
                        <DataPoint title="Time to place first peg: " value={this.state.times.first}/>
                        <DataPoint title="Time to place second peg: " value={this.state.times.second}/>
                        <DataPoint title="Time to place third peg: " value={this.state.times.third}/>
                        <DataPoint title="Time to place fourth peg: " value={this.state.times.fourth}/>
                        <DataPoint title="Time to place fifth peg: " value={this.state.times.fifth}/>
                        <DataPoint title="Time to place sixth peg: " value={this.state.times.sixth}/>
                        <DataPoint title="Time to place seventh peg: " value={this.state.times.seventh}/>
                        <DataPoint title="Time to place eighth peg: " value={this.state.times.eighth}/>
                        <DataPoint title="Time to place ninth peg: " value={this.state.times.ninth}/>
                        <DataPoint title="Average Peg placement time: " value={this.state.times.ninth}/>
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
            <div class="container">
                <h3>{this.props.title + " " + this.props.value}</h3>
                <div style={spacing}></div>
            </div>
        )
    }
}

export default ResultsPage;