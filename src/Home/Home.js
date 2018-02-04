import React, { Component } from 'react';
import './Home.css';
import BannerImage from '../BannerImage/BannerImage';
import TitlePhoto from '../TitlePhoto/TitlePhoto';
import { Container, Row, Col, Button } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Container>
                    <BannerImage />
                    <Row className="justify-content-center">
                        <Col sm="4">
                            <h2><Button outline color="secondary" block size="lg"><a href="/rsvp/">RSVP</a></Button></h2>
                        </Col>
                    </Row>
                    <hr />
                    <TitlePhoto />
                </Container>
            </div>
        );
    }
}

export default Home;
