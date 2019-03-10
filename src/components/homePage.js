import React, {Component } from 'react';
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

class HomePage extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
        const mainBackground = {
            backgroundcolor: 'red'
          };
    
          const mainBody = {
            border: '1px solid gray', 
            backgroundcolor: 'red',
            height: '500px'
          };
    
          const navbar = {
            backgroundcolor: '#22DFD4'
          };
    
          const navbarText = {
            color: '#B9F7F3'
          };
          
          const backContainer = {
            height: '700px',
            width: '90%',
            backgroundcolor: 'white'
          };
          
          const constheader = {
            width: '75%',
            height: '20%'
          };
          
          const spacingContainer = {
            height: '40px'
          };
          
          const promptText = {
            color: '#2D9E8F'
          };
          
          const centerContainer = {
            height: '40%'
          };
          
          const getStartedContainer = {
            width: '50%',
            height: '50%'
          };
        return (
            <div style={mainBackground}>
            <div class="container mx-auto" style={backContainer}>
              <div id="header" class="containter text-center pt-3 mx-auto">
                  <h1 class="pb-2 mb-2 border-bottom">Welcome to our project!</h1>
              </div>
              <div class="container" style={spacingContainer}></div>

              <div class="container shadow-lg p-3 mb-5 bg-white rounded" style={mainBody}>
                  <div class="container" style={spacingContainer}>
                  <h1></h1>
                  </div>
                  <div class="containter text-center pt-5" style={centerContainer}>
                      <h1 class="display-3 title" style={promptText}>Click Below To Begin</h1>
                  </div>

                  <div class="containter text-center pt-3 mx-auto" style={getStartedContainer}>
                      <Link to="/testPage"><button type="button" class="btn btn-outline-dark text-center btn-lg">Get Started</button></Link>
                  </div>
                  <div class="mask"></div>
              </div>
            </div>
        </div>
        )
    }
}

export default HomePage;