import React, { Component } from 'react'
import './SkillStack.css'

class SkillStack extends Component {
    render() {
        return (
            <div id="skill-stack">
                <div id="skill-stack-title-description">
                    <h1 className="title">SKILL STACK</h1>
                    <h6 id="skill-stack-description">Languages, Frameworks, and Tools</h6>
                </div>
                <div id="skills-container">
                    <div className="skills-section">
                        <h1 className="title">LANGUAGES</h1>
                        <div className="icons">
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/js.png" alt="JavaScript icon" />
                                <p className="skill-title">JavaScript</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/python.svg" alt="Python icon" />
                                <p className="skill-title">Python</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/javalogo.png" alt="Java icon" />
                                <p className="skill-title">Java</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/ruby.png" alt="Ruby icon" />
                                <p className="skill-title">Ruby</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/html.png" alt="HTML icon" />
                                <p className="skill-title">HTML</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/css.svg" alt="CSS icon" />
                                <p className="skill-title">CSS</p>
                            </div>
                        </div>
                    </div>

                    <div className="skills-section">
                        <h1 className="title">FRONTEND</h1>
                        <div className="icons">
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/react.png" alt="React icon" />
                                <p className="skill-title">React</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/redux.svg" alt="Redux icon" />
                                <p className="skill-title">Redux</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/materialui.svg " alt="Material UI icon" />
                                <p className="skill-title">Material UI</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/bootstrap.svg " alt="Bootstrap icon" />
                                <p className="skill-title">Bootstrap</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/css.svg" alt="CSS icon" />
                                <p className="skill-title">CSS</p>
                            </div>
                        </div>
                    </div>

                    <div className="skills-section">
                        <h1 className="title">BACKEND</h1>
                        <div className="icons">
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/mongodb.png" alt="MongoDB icon" />
                                <p className="skill-title">MongoDB</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/postgres.png" alt="Postgres icon" />
                                <p className="skill-title">PostgreSQL</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/netlify.webp" alt="Netlify icon" />
                                <p className="skill-title">Netlify</p>
                            </div>
   
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/yarn.svg" alt="Yarn icon" />
                                <p className="skill-title">Yarn</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/node.png" alt="Node icon" />
                                <p className="skill-title">Node</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/django.svg" alt="Django icon" />
                                <p className="skill-title">Django</p>
                            </div>
                        </div>
                    </div>

                    <div className="skills-section">
                        <h1 className="title">MISC</h1>
                        <div className="icons">
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/vscode.svg" alt="vscode icon" />
                                <p className="skill-title">VS Code</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/trello.svg" alt="trello icon" />
                                <p className="skill-title">Trello</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/azure.svg" alt="azure icon" />
                                <p className="skill-title">Azure</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/git.svg" alt="git icon" />
                                <p className="skill-title">Git</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/github.svg" alt="github icon" />
                                <p className="skill-title">Github</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/slack.svg" alt="slack icon" />
                                <p className="skill-title">Slack</p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="skills-section">
                        <h1 className="title">LANGUAGES</h1>
                        <div className="icons">
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/js.png" alt="JavaScript icon" />
                                <p className="skill-title">JavaScript</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/html.png" alt="HTML icon" />
                                <p className="skill-title">HTML</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/css.svg" alt="CSS icon" />
                                <p className="skill-title">CSS</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/ruby.png" alt="Ruby icon" />
                                <p className="skill-title">Ruby</p>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="skills-section">
                        <h1 className="title">LANGUAGES</h1>
                        <div className="icons">
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/js.png" alt="JavaScript icon" />
                                <p className="skill-title">JavaScript</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/html.png" alt="HTML icon" />
                                <p className="skill-title">HTML</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/css.svg" alt="CSS icon" />
                                <p className="skill-title">CSS</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/ruby.png" alt="Ruby icon" />
                                <p className="skill-title">Ruby</p>
                            </div>
                        </div>
                    </div>
                
                    <div className="skills-section">
                        <h1 className="title">LANGUAGES</h1>
                        <div className="icons">
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/js.png" alt="JavaScript icon" />
                                <p className="skill-title">JavaScript</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/html.png" alt="HTML icon" />
                                <p className="skill-title">HTML</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/css.svg" alt="CSS icon" />
                                <p className="skill-title">CSS</p>
                            </div>
                            <div className='icon-wrapper'>
                                <img className="skill-stack-icon" src="/icons/ruby.png" alt="Ruby icon" />
                                <p className="skill-title">Ruby</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default SkillStack;