import React, { Component } from 'react';
import './page-header-component.css';
import '../assets/mountain_road.jpeg'

class PageHeaderComponent extends Component {
    render() {
        return (
            <div className="view">
                <div className="full-bg-img flex-center">
                    <div className="row justify-content-start">
                        <div className="col">
                            <p className="a-and-c-header">Allyson and Chris</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageHeaderComponent;