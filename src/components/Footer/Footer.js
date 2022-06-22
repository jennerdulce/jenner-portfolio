import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer>
                <p>© My Portfolio - Jenner Dulce 2022</p>
                <div id="footer-icons">
                    <a href="https://www.github.com/jennerdulce" target="_blank"><img className="footer-icon" src="./icons/footer/github.png"/></a>
                    <a href="https://www.twitter.com/jennerdulce" target="_blank"><img className="footer-icon" src="./icons/footer/twitter.png"/></a>
                    <a href="https://www.linkedin.com/jennerdulce" target="_blank"><img className="footer-icon" src="./icons/footer/linkedin.png"/></a>
                </div>
            </footer>
        );
    }
}

export default Footer;