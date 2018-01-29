import React, { Component } from 'react';
import './Home.css';
import BannerImage from '../BannerImage/BannerImage';
import TitlePhoto from '../TitlePhoto/TitlePhoto';
import { Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Container>
                    <BannerImage />
                    <TitlePhoto />
                </Container>
            </div>
        );
    }
}

export default Home;
