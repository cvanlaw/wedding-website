import React, { Component } from 'react';
import './Location.css';
import { Card, CardText, CardTitle, CardBody } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import BannerImage from '../BannerImage/BannerImage';

class Location extends Component {
    render() {
        return (
            <Container className="justify-content-between">
                <BannerImage />
                <Card className="text-center border-0">
                    <CardBody>
                        <CardTitle>
                            <h3>
                                <a name="location">
                                    <strong>Location</strong>
                                </a>
                            </h3>
                        </CardTitle>
                        <CardText>
                            <Row className="justify-content-around">
                                <Col lg="5" className="text-justify">
                                    <p>
                                        Our wedding ceremony will be held at the Open Air Chapel and the reception will be held at the Green Farm
                                        Barn - both part of the Chatfield Farms location of the Denver Botanic Gardens.
                                     </p>
                                    <p>
                                        We chose this location for the beautiful backdrop of the Front Range of the Rocky Mountains and the proximity
                                        of downtown Denver.
                                    </p>
                                    <p>
                                        We love our new home and feel that this location conveys part of what we love about living out here. We hope
                                        that you will join us and share this wonderful event with us.
                                    </p>
                                </Col>
                                <Col lg="6">
                                    <div className="embed-responsive embed-responsive-4by3">
                                        <iframe title="google-maps" className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3076.3874121644967!2d-105.10165128434765!3d39.55087131576415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b7c30eab3ea75%3A0x8db8f95b60bbb606!2sDenver+Botanic+Gardens+Chatfield+Farms!5e0!3m2!1sen!2sus!4v1509926265879"
                                            width="600" height="450" allowfullscreen></iframe>
                                    </div>
                                </Col>
                            </Row>
                        </CardText>
                    </CardBody>
                </Card>
            </Container>
        );
    }
}

export default Location;
