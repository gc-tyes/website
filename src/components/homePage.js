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
            background: '#E8F4E7',
            height: '900px'
          };
    
          const mainBody = {
            //border: '1px solid gray', 
            background: 'white',
            height: '900px'
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
            backgroundcolor: 'red'
          };

          const test = {
            backgroundcolor: 'green'
          };
          
          const constheader = {
            width: '75%',
            height: '20%'
          };
          
          const spacingContainer = {
            height: '20px'
          };
          
          const promptText = {
            color: '#01A800'
          };

          const button = {
            width: '300px',
            height: '100px',
            background: '#42a314',
            border: 'none',
            color: 'white',
            fontsize: '16px',
            cursor: 'pointer'
          };
          
          const centerContainer = {
            height: '40%'
          };
          
          const getStartedContainer = {
            width: '50%',
            height: '20%'
          };

          const buttonSpacer = {
            height: '150px'
          }
        return (
            <div style={mainBackground}>
            <div class="container mx-auto" style={mainBody}>
              <div id="header" class="text-center border-bottom containter pt-3 mx-auto">
                <div style={spacingContainer}></div>
                <h1 class="display-4">About Us</h1>
              </div>
              <div class="container" style={spacingContainer}></div>

              <div class="container text-center">
                  <h1 class="lead font-italic">Here at Tyes we are focused on creating a device that provides more data to aid muscular spasticity recovery. We are currently working on improving the 9 Hole Peg Test (9-HPT) so that is provides more accurate data to the physical therapist. This helps the therapist personalize therapy for each patient. </h1>
                  </div>
                  <div class="container" style={spacingContainer}></div>
              <div class="container-fluid mx-auto row">
              <img class="pl-5 " src="https://docs.google.com/drawings/d/e/2PACX-1vRboACGeCMPyMjo5ZFvULel-25nhQOVRTzqjAdd2DXLx0SlNhDGeSLj8sC7bNihznDdwO6jOWuD2Ngf/pub?w=1440&amp;h=1080" width = "600" height= "450"></img>
                <div class="containter mx-auto">
                <div style={buttonSpacer}></div>
                        <Link to="/testPage"><button type="button" class="btn btn-outline-dark text-center btn-lg" style={button}>Get Started</button></Link>
                    </div>
                    <div class="mask"></div>
              </div>
              <div id="header" class="text-center border-bottom containter mx-auto">
                <h1 class="display-4">How Our System Works</h1>
              </div>
              <div class="container text-center">
              <div style={spacingContainer}></div>
              <h1 class="lead font-italic">Giving a description of our whole process and stuff</h1>
              </div>
              </div>
        </div>
        )
    }
}

export default HomePage;