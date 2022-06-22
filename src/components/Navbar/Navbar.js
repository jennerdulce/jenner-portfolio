import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
                <p>Jenner Dulce</p>
                <div id="navbar-hyperlinks">
                    <a href="#about-me">About</a>
                    <a href="#skill-stack">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#recommendations-container">Recommendations</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        );
    }
}

export default Navbar;