import React, { Component } from 'react';
import Animation from '../images/animation.gif';
import Static from '../images/static.png';
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

class TestPage extends Component {
    // basically just bring the animation program here
    // get canvas through something like getById
    // gotta make a constructor in order to do state
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          displayCount: "Press Begin to get started",
          running: false,
          buttonText: "Start"
        };
        this.beginTimer = this.beginTimer.bind(this);
      }

    render() {
        const spacingContainer = {
            height: '150px'
          };
          const buttonStyle = {
            height: '75px',
            width: '425px'
          }
          const center = {
            marginleft: 'auto',
            marginright: 'auto',
          }

          const mainContainer = {
              height: '500px'
          }

          const {count} = this.state;
          const {displayCount} = this.state;
          const beginTimer = this.beginTimer;
          const {buttonText} = this.state;
        return (
            <div>
                <div class="container" style={spacingContainer}></div>
                <div class="container text-center mx-auto img-thumbnail shadow-lg p-3 mb-3 bg-white rounded" style={mainContainer}>
                <div style={spacingContainer}></div>
                    <h1 class="display-1" style={center}>{displayCount}</h1>
                </div>
                <div class="container mx-auto text-center">
                    <button type="button" class="btn btn-outline-dark text-center btn-lg" style={buttonStyle} onClick={beginTimer}>{buttonText}</button>
                </div>

                <script src="animation.js"></script>
            </div>
        )
    }

    beginTimer() {
        this.setState(() => ({
            running: !this.state.running
        }))
        if (this.state.buttonText == "Start") {
            this.setState(() => ({
                buttonText: "Stop"
            }))
        } else {
            this.setState(() => ({
                buttonText: "Start"
            }))
        }
    }

    // does something here then run render again
    componentDidMount() {
        this.myInterval = setInterval(()=>{
            if (this.state.running) {
                this.setState(prevState => ({
                    count: prevState.count + 1,
                    displayCount: this.state.count / 100.0
                }))
            }
        }, 10)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }
}

export default TestPage;