import React, {Component } from 'react';
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

        this.imageRef = React.createRef();
        this.state = {
          timer: null,
          count: 0,
          num: 0,
          imgSource: this.Static
        };
      }

    startCountdown() {
        let timer = setInterval(this.tick(), 100);
        this.setState({timer});
      }
    componentWillUnmount() {
        this.clearInterval(this.state.timer);
      }

      tick() {
        this.setState({
            count: this.state.count + 1
        })
      }

    render() {
        const spacingContainer = {
            height: '40px'
          };
          const buttonStyle = {
            height: '55px',
            width: '225px'
          }
          const {count} = this.state
        return (
            <div>
                <div class="container" style={spacingContainer}></div>
                <div class="container mx-auto text-center img-thumbnail shadow-lg p-3 mb-3 bg-white rounded">
                    <img refs="imageRef" src={Animation} width="640px" height="700px" alt="loading..." />
                </div>
                <div class="container mx-auto text-center">
                    <button type="button" class="btn btn-outline-dark text-center btn-lg" style={buttonStyle}>Begin Test</button>
                </div>

                <script src="animation.js"></script>
            </div>
        )
    }
}

export default TestPage;