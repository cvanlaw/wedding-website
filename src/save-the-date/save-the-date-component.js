import React, { Component } from 'react';
import './save-the-date-component.css';

class SaveTheDateComponent extends Component {
    render() {
        return (
            <div className="container-fluid save-the-date-title">
                <br></br>
                <div className="row justify-content-start">
                    <div className="col-3 offset-sm-1">
                        <h2>Save the date!</h2>
                    </div>
                    <div className="col-3">
                        <h3>June 3rd, 2018</h3>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col">
                        <span></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default SaveTheDateComponent;