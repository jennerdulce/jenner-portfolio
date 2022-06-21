import React, { Component } from 'react';
import './AboutMe.css'

class AboutMe extends Component {
    render() {
        return (
            <div id="about-me">
                <h1>About Me</h1>
                <img id="profile-picture"></img>
                <div>
                    <img className="about-me-icon"></img>
                    <img className="about-me-icon"></img>
                    <img className="about-me-icon"></img>
                </div>
                <p>About me description</p>
            </div>
        );
    }
}

export default AboutMe;