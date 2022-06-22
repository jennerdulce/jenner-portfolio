import React, { Component } from 'react'
import './SkillStack.css'

class SkillStack extends Component {
    render() {
        return (
            <div id="skill-stack">
                <div id="skill-stack-title-description">
                    <h1 className='title'>SKILL STACK</h1>
                    <h6 id="skill-stack-description">Languages, Frameworks, and Tools</h6>
                </div>
                <div id="skill-wrapper">
                    <div className='icon-wrapper'>
                       <img className="skill-stack-icon" src="/icons/html.png" alt="HTML icon" />
                        <h5>HTML</h5>
                    </div>
                    <div className='icon-wrapper'>
                      <img className="skill-stack-icon" src="/icons/css.svg" alt="CSS icon" />
                        <h5>CSS</h5>
                    </div>
                    <div className='icon-wrapper'>
                    <img className="skill-stack-icon" src="/icons/js.png" alt="JavaScript icon" />
                        <h5>JavaScript</h5>
                    </div>
                    <div className='icon-wrapper'>
                    <img className="skill-stack-icon" src="/icons/mongodb.png" alt="MongoDB icon" />
                        <h5>MongoDB</h5>
                    </div>
                    <div className='icon-wrapper'>
                    <img className="skill-stack-icon" src="/icons/netlify.webp" alt="Netlify icon" />
                        <h5>Netlify</h5>
                    </div>
                    <div className='icon-wrapper'>
                    <img className="skill-stack-icon" src="/icons/postgres.png" alt="Postgres icon" />
                        <h5>PostgreSQL</h5>
                    </div>
                    <div className='icon-wrapper'>
                    <img className="skill-stack-icon" src="/icons/rails.png" alt="Rails icon" />
                        <h5>Rails</h5>
                    </div>
                    <div className='icon-wrapper'>
                    <img className="skill-stack-icon" src="/icons/react.png" alt="React icon" />
                        <h5>React</h5>
                    </div>
                    <div className='icon-wrapper'>
                    <img className="skill-stack-icon" src="/icons/rest.png" alt="REST icon" />
                        <h5>REST</h5>
                    </div>
                    <div className='icon-wrapper'>
                    <img className="skill-stack-icon" src="/icons/rspec.png" alt="Rspec icon" />
                        <h5>Rspec</h5>
                    </div>
                    <div className='icon-wrapper'>
                    <img className="skill-stack-icon" src="/icons/ruby.png" alt="Ruby icon" />
                        <h5>Ruby</h5>
                    </div>
                    <div className='icon-wrapper'>
                    <img className="skill-stack-icon" src="/icons/sql.png" alt="SQL png" />
                        <h5>SQL</h5>
                    </div>
                    {/* <img className="skill-stack-icon" src="" alt="" />
                    <img className="skill-stack-icon" src="" alt="" />
                    <img className="skill-stack-icon" src="" alt="" />
                    <img className="skill-stack-icon" src="" alt="" /> */}
                </div>
            </div>
        );
    }
}

export default SkillStack;