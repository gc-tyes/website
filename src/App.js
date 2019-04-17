import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Background from './images/background.svg';
import Logo from './images/logo2.png';
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
        backgroundcolor: '#A6FB9B'
      };
      const navText = {
        color: '#01A800'
      }
      return (
        <div>
          <nav class="navbar sticky-top navbar-expand-lg navbar-light" style={navbar}>
              <Link class="nav-link" to="/"><h1 class="pl-3 pr-1 float-right display-3 font-weight-bold" style={navText}>Tyes</h1></Link>
                      <a class="navbar-brand" href="#">
                        <img src={Logo} width="70px" height="70px" class="d-inline-block align-top" alt="f" />
                      </a>
                      <ul class="navbar-nav mr-auto">
                              <form class="form-inline my-2 my-lg-0 p-2">
                                      <Link class="nav-link" to="/"><h1 class="pl-5 text-white-50">Home</h1></Link>
                                      <Link class="nav-link" to="/testPage"><h1 class="pl-5 text-white-50">Our Product</h1></Link>
                                      <a class="nav-link" href="#"><h1 class="pl-5 text-white-50">Patient Interface</h1></a>
                                      <a class="nav-link" href="#"><h1 class="pl-5 text-white-50">Therapist Interface</h1></a>
                              </form>
                      </ul>
              </nav>
              <Main/>
          </div>
      );
  }
}