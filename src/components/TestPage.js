import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
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

db.ref('/Test').update({
    value: "working"
})

class TestPage extends Component {
    // basically just bring the animation program here
    // get canvas through something like getById
    // gotta make a constructor in order to do state
    constructor(props) {
        super(props);
        this.ref = db.ref('/Test/value');
        this.state = {
          count: 3,
          displayCount: "Press \"Start\" to get started",
          countdown: false,
          running: false,
          buttonText: "Start",
          delay: 3,
          pressed: false
        };
        this.beginTimer = this.beginTimer.bind(this);
        this.goToResults = this.goToResults.bind(this);
      }

    render() {
        const spacingContainer = {
            height: '150px'
          };
          const buttonStyle = {
            height: '75px',
            width: '425px',
            background: 'linear-gradient(#FFFFFF, #E5E5E5)',
          }
          const center = {
            marginleft: 'auto',
            marginright: 'auto',
          }

          const mainContainer = {
              height: '500px',
          }

          const mainBackground = {
            background: 'linear-gradient(#E8F4E7, #ADD1AA)',
            height: '900px'
          }

          const {count} = this.state;
          const {displayCount} = this.state;
          const beginTimer = this.beginTimer;
          const {buttonText} = this.state;

        return (
            <div style={mainBackground}>
                <div class="container" style={spacingContainer}></div>
                <div class="container text-center mx-auto img-thumbnail shadow-lg p-3 mb-3 bg-white rounded" style={mainContainer}>
                <div style={spacingContainer}></div>
                    <div class="container" style={center}>
                        <h1 class="display-2" >{displayCount}</h1>
                    </div>
                </div>
                <div class="container mx-auto text-center">
                    <button type="button" class="btn btn-outline-dark text-center btn-lg" style={buttonStyle} onClick={beginTimer}>{buttonText}</button>
                </div>
            </div>
        )
    }

    beginTimer() {
        if (this.state.count == 3) {
            this.setState(() => ({
                countdown: true,
                pressed: true
            })) 
        }
        this.setState(() => ({
            running: !this.state.running
        }))
        if (this.state.buttonText == "Start") {
            this.setState(() => ({
                buttonText: "Stop Test"
            }))
            db.ref('/Running').update({
                value: "yes"
            });
        } else if (this.state.buttonText == "Stop Test") {
            this.setState(() => ({
                buttonText: "Restart",
                countdown: false
            }))
            db.ref('/Running').update({
                value: "no"
            });
            db.ref('/Test').update({
                value: "CHANGE"
            });
        } else {
            this.setState(() => ({
                buttonText: "Stop Test",
                count: 3,
                countdown: true
            }))
            db.ref('/Running').update({
                value: "yes"
            });
        }
    }

    // does something here then run render again
    componentDidMount() {
        const that = this;
        db.ref('/Test').update({
            value: "hmmm"
        });
        db.ref('/Running').update({
            value: "no"
        });
        this.ref.on('value', function(snapshot) {
            db.ref('/Test').update({
                value: "back to normal"
            });
            if (that.state.running && that.state.pressed) {
                that.setState(() => ({
                    running: false,
                    pressed: false,
                    displayCount: "Test complete! Your Time: " + (that.state.count / 100.0)
                }));
                db.ref('/Running').update({
                    value: "no"
                });
                that.goToResults();
            }
        });
        this.firstInterval = setInterval(()=>{
            if (this.state.countdown && this.state.count != 0) {
                this.setState(prevState => ({
                    count: prevState.count - 1,
                    displayCount: this.state.count
                }))
            } else if (this.state.count == 0) {
                this.setState({
                    countdown: false
                })
            }
        }, 1000)

        this.myInterval = setInterval(()=>{
            if (this.state.running && !this.state.countdown) {
                this.setState(prevState => ({
                    count: prevState.count + 1,
                    displayCount: this.state.count / 100.0
                }))
            }
        }, 10)
    }

    goToResults() {
        this.delayInterval = setInterval(()=>{
            if (this.state.delay != 0) {
                this.setState(() => ({
                    delay: this.state.delay - 1
                }))
            } else {
                this.setState(() => ({
                    delay: this.state.delay - 1
                }))
                this.props.history.push('/ResultsPage');
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
        clearInterval(this.delayInterval);
        clearInterval(this.firstInterval);
    }
}

export default TestPage;
