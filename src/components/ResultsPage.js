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
      }
    render() {
        return (
            <div class="container">
                <h1 class="display-1">Hello</h1>
                <button>Sup</button>
            </div>
        )
    }
}

export default ResultsPage;