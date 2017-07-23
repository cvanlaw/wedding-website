import React, { Component } from 'react';
import './page-header.css';
import '../assets/mountain_road.jpeg'

class PageHeader extends Component {
    render() {
        return (
            <div className="view">
                <div className="full-bg-img flex-center">
                    <div className="row">
                        <div className="col-md-4 offset-md-1">
                            <p className="a-and-c-header">Allyson and Chris</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageHeader;