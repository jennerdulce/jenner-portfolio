import React, { Component } from 'react';
import './AboutMe.css'

class AboutMe extends Component {
    render() {
        return (
            <div id="about-me">
                <div>
                    <h1 className='title about-me-text'>ABOUT ME</h1>
                    <p id="about-me-description">I am currently a Web Dev student at LEARN academy where I am having an amazing time building strong coding foundations and developing React on Rails applications. I am looking forward to meeting more amazing people and collaborating within the industry and honing in on my skills as I continue to grow.</p>
                </div>
                <div>
                    <img id="profile-picture" src="./icons/profile.jpg" alt="profile"/>
                </div>
            </div>
        );
    }
}

export default AboutMe;