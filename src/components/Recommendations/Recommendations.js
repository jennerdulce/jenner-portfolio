import React, { Component } from 'react';

class Recommendations extends Component {
    render() {
        return (
            <div>
                <h1>Recommendations</h1>
                <h6>colleague • business-partner • customers</h6>
                <div id="recommendations">
                    <div className='recommendation-wrapper'>
                        <p>Recommndation here</p>
                        <div className='recommendation-info-wrapper'>
                            <p>Name</p>
                            <p>title</p>
                        </div>
                    </div>
                    <div className='recommendation-wrapper'>
                        <div className='recommendation-info-wrapper'>
                            <p>Name</p>
                            <p>title</p>
                        </div>
                        <p>Recommndation here</p>
                    </div>
                    <div className='recommendation-wrapper'>
                        <p>Recommndation here</p>
                        <div className='recommendation-info-wrapper'>
                            <p>Name</p>
                            <p>title</p>
                        </div>
                    </div>
                    <div className='recommendation-wrapper'>
                        <div className='recommendation-info-wrapper'>
                            <p>Name</p>
                            <p>title</p>
                        </div>
                        <p>Recommndation here</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recommendations;