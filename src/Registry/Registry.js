import React, { Component } from 'react';
import './Registry.css';
import { Card, CardText, CardTitle, CardBody } from 'reactstrap';
import { Container, Row } from 'reactstrap';
import BannerImage from '../BannerImage/BannerImage';

class Registry extends Component {
    render() {
        return (
            <Container className="justify-content-between">
                <BannerImage />
                <Card className="text-center border-0">
                    <CardBody>
                        <CardTitle>
                            <h3>
                                <a name="registry">
                                    <strong>Registry</strong>
                                </a>
                            </h3>
                        </CardTitle>
                        <CardText>
                            <Row className="justify-content-around">
                                <p>We're currently registered at <a
                                    href="https://www.potterybarn.com/registry/rl8vdqrm6c/registry-list.html"
                                    target="_blank" rel="noopener noreferrer">
                                    Pottery Barn
                                </a>, <a
                                        href="https://www.crateandbarrel.com/gift-registry/allyson-mccarthy-and-christopher-van-law/r5785621"
                                        target="_blank" rel="noopener noreferrer">Crate & Barrel</a>
                                    , and <a
                                        href="https://www.zola.com/registry/vanlaw"
                                        target="_blank" rel="noopener noreferrer">Zola</a>.
                                    Any and all gifts will be thoroughly appreciated and enjoyed so don't feel obligated to stick
                                    to these lists!
                                </p>
                            </Row>
                        </CardText>
                    </CardBody>
                </Card>
            </Container>
        );
    }
}

export default Registry;
