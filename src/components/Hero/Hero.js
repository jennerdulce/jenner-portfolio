import React, { Component } from 'react';
import './Hero.css'

class Hero extends Component {
    render() {
        return (
            <div id="hero">
                <div id="fullstack-text" class="hero-text">FULL-STACK</div>
                <div className="hero-text">SOFTWARE</div>
                <div className="hero-text">DEVELOPER</div>
                {/* <div id="hero-cutoff">
                    <div id="transparent-box-1"></div>
                    <div id="transparent-box-2"></div>
                </div> */}
                {/* <img className="image" src=" https://img.freepik.com/premium-vector/businessman-working-laptop-smiling-while-enjoying-coffee-cafe-outline-drawing-style-art_7647-609.jpg" alt="reviewer"/> */}

            </div>
        );
    }
}

export default Hero;