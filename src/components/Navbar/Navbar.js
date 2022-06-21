import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
                <p>Jenner Dulce</p>
                <div id="navbar-hyperlinks">
                    <a>About</a>
                    <a>Skills</a>
                    <a>Portfolio</a>
                    <a>Experience</a>
                    <a>Contact</a>
                </div>
            </div>
        );
    }
}

export default Navbar;