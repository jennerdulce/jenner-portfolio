import React, { Component } from 'react';
import './ContactMe.css'

class ContactMe extends Component {
    render() {
        return (
            <div id="contact">
                <div id="contact-title-description">
                    <h1 className='title'>CONTACT ME</h1>
                    <h5 id="contact-description">Let's get in touch!</h5>
                </div>
                <form>
                    <div id="inputs">
                        <input></input>
                        <input></input>
                        <input></input>
                    </div>
                    <input id="message"></input>
                </form>
            </div>
        );
    }
}

export default ContactMe;