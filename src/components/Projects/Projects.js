import React, { Component } from 'react';
import Tag from '../Tag/Tag.js'
import './Projects.css'

class Projects extends Component {
    render() {
        return (
            <div>
                <div id="projects">
                    <div id="projects-title-description">
                        <h1 className='title'>PROJECTS</h1>
                        <h5 id="projects-description">An adventure in coding...</h5>
                    </div>
                    <div id="projects-container">
                        <div className="project-wrapper">
                            <img className="project-image" src="" alt=""/>
                            <div className="project-info-wrapper">
                                <h4 className="app-title">App Title</h4>
                                <h5 className="app-subtitle">App Subtitle</h5>
                                <p className="build-date">Built: July 2022</p>
                                <p className="app-description">App Description</p>
                            </div>
                        </div>
                        <div id="tags-container">
                            <Tag tagname="JavaScript"/>
                            <Tag tagname="React"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;