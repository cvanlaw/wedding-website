import React, { Component } from "react";
import "./Rsvp.css";
import {
  CardBody,
  CardTitle,
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import BannerImage from "../BannerImage/BannerImage";
import MealSelection from "../MealSelection/MealSelection";

class Rsvp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inviteType: "Individual",
      guestCount: 1,
      guests: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;

    if (target.name === "Party Type") {
      this.handlePartyTypeChange(event);
      return;
    }

    if (target.name === "Number of Guests") {
      this.handleGuestNumberChange(event);
      return;
    }
  }

  handleGuestNumberChange(event) {
    if (this.state.inviteType === "Family") {
      this.setState({
        guestCount: event.target.value
      });
    } else {
      this.setState({
        guestCount: event.target.checked ? 2 : 1
      });
    }
  }

  handlePartyTypeChange(event) {
    this.setState({
      inviteType: event.target.value
    });
  }

  displayGuestCount() {
    if (this.state.inviteType === "Family") {
      return (
        <FormGroup>
          <Label for="guestCount">Number of Guests</Label>
          <Input
            type="text"
            name="Number of Guests"
            id="guestCount"
            placeholder="Number of Family Members"
            value={this.state.guestCount}
            onChange={this.handleChange}
          />
        </FormGroup>
      );
    }

    return (
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="Number of Guests"
            onChange={this.handleChange}
          />{" "}
          I have a plus one
        </Label>
      </FormGroup>
    );
  }

  displayMealSelection() {
    let mealSelectionContent = [];

    for (let i = 0; i < this.state.guestCount; i++) {
      mealSelectionContent.push(<MealSelection />);
    }

    return mealSelectionContent;
  }

  saveRsvp() {
    let guests = this.props.children;

    if (guests && guests.length > 0) {
      console.log(JSON.stringify(guests[0].state));
    }
  }

  render() {
    return (
      <Container>
        <BannerImage />
        <div>
          <CardBody>
            <CardTitle>
              <h3>RSVP</h3>
            </CardTitle>
          </CardBody>
          <CardBody>
            <Form>
              <FormGroup>
                <Input
                  type="select"
                  name="Party Type"
                  id="partyType"
                  onChange={this.handleChange}
                >
                  <option>Individual</option>
                  <option>Family</option>
                </Input>
              </FormGroup>
              {this.displayGuestCount()}
              {this.displayMealSelection()}
              <Button color="info" onClick={this.saveRsvp()}>
                Submit
              </Button>
            </Form>
          </CardBody>
        </div>
      </Container>
    );
  }
}

export default Rsvp;
