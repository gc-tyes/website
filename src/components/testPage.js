import React, {Component } from 'react';
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
    render() {
        const spacingContainer = {
            height: '40px'
          };
          const buttonStyle = {
            height: '150px',
            width: '400px'
          }
        return (
            <div>
                <div class="container" style={spacingContainer}></div>
                <div class="container mx-auto text-center img-thumbnail shadow-lg p-3 mb-5 bg-white rounded">
                    <canvas id="myCanvas" width="510" height="510"></canvas>
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