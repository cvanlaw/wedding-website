import React, { Component } from 'react';
import { Card } from 'reactstrap';
import image from './AllysonChris_0129.jpg';
import './TitlePhoto.css';

class TitlePhoto extends Component {
    render() {
        return (
            <div>
                <Card>
                    <img alt="Allyson and Chris" src={image} className="main-photo" />
                </Card>
                <p className="photo-credit">
                    <a href="http://plumprettyphotography.com" target="_blank" rel="noopener noreferrer">Plum Pretty Photography</a> (Thanks Melissa Del Vecchio!)</p>
            </div>
        );
    }
}

export default TitlePhoto;
