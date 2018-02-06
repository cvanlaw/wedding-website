import React, { Component } from "react";
import "./Home.css";
import BannerImage from "../BannerImage/BannerImage";
import TitlePhoto from "../TitlePhoto/TitlePhoto";
import { Container, Row, Col, Button } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Container>
          <BannerImage />
          <Row className="justify-content-center">
            <Col sm="4">
              <form action="/rsvp/">
                <Button outline block type="submit" value="RSVP">
                  RSVP
                </Button>
              </form>
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
