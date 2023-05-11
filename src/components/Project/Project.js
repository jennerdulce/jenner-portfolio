import React, { Component } from 'react';
import Tag from '../Tag/Tag.js'
import './Project.css'

class Project extends Component {
    render() {
        return (
            <div className="project-wrapper">
                <img className="project-image" src="http://mtccommunity.church/wp-content/uploads/2020/02/Life-Full-Circle.001-865x649.jpeg" alt="circles"/>
                <div className="project-info-wrapper">
                    <h4 className="app-title">App Title</h4>
                    <h5 className="app-subtitle">App Subtitle</h5>
                    <p className="build-date">Built: July 2022</p>
                    <p className="app-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor molestie erat, nec elementum urna tempor interdum. Pellentesque sit amet eros vitae sapien finibus tempor. Nunc sollicitudin rutrum leo, sit ame.</p>
                </div>
                <div id="tags-container">
                    <Tag tagname="JAVASCRIPT"/>
                    <Tag tagname="REACT"/>
                </div>
            </div>
        );
    }
}

export default Project;