import React, { Component } from 'react';
import image from './banner.jpg';
import './BannerImage.css';

class BannerImage extends Component {
    render() {
        return (
            <div className="header clearfix">
                <img alt="banner" src={image} className="img-fluid banner-image" />
            </div>
        );
    }
}

export default BannerImage;
