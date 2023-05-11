import React, { Component } from 'react';
import Tag from '../Tag/Tag.js'
import Project from '../Project/Project.js'
import './Projects.css'

class Projects extends Component {
    render() {
        return (
            <div>
                <div id="projects">
                    <div id="projects-title-description">
                        <h1 className='title'>PROJECTS</h1>
                    </div>
                    <div id="projects-container">
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;