import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
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

  export default class App extends React.Component {
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
      const navbar = {
        backgroundcolor: '#22DFD4'
      };
      return (
        <div>
        <nav class="navbar sticky-top navbar-expand-lg navbar-light" style={navbar}>
                    <h1 class="float-right display-5 text-black-50 font-weight-bold">Tyes</h1>
                    <ul class="navbar-nav mr-auto">
                            <form class="form-inline my-2 my-lg-0 p-2">
                                    <Link class="nav-link" to="/"><h4 class="pl-5 text-white-50">Home</h4></Link>
                                    <Link class="nav-link" to="/testPage"><h4 class="pl-5 text-white-50">Tests</h4></Link>
                                    <a class="nav-link" href="#"><h4 id="navbarText" class="pl-5 text-white-50">About Us</h4></a>
                            </form>
                    </ul>
                    {/* <img src="images/logo.png" alt="GC" width="70" height="70"></img> */}
            </nav>
            <Main/>
          </div>
      );
  }
}