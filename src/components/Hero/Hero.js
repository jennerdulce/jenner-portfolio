import React, { Component } from 'react';
import './Hero.css'

class Hero extends Component {
    render() {
        return (
            <div id="hero">
                <p id="hero-welcome">Welcome To My Portfolio.</p>
                <p id="hero-slogan"><i>"Don't be a baby about it, be about it baby"</i></p>
                <button id="hero-button">Tell Me More</button>
            </div>
        );
    }
}

export default Hero;