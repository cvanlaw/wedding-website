import React, { Component } from "react";
import axios from "axios";
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
      guests: [],
      canSave: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.saveRsvp = this.saveRsvp.bind(this);
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

  handleDone(guestName, mealSelection) {
    const existingGuests = this.state.guests;
    this.setState({
      guests: [...existingGuests, {
        guestName: guestName,
        mealSelection: mealSelection
      }],
      canSave: existingGuests.length + 1 === this.state.guestCount
    });
  }

  displayMealSelection() {
    let mealSelectionContent = [];

    for (let i = 0; i < this.state.guestCount; i++) {
      mealSelectionContent.push(<MealSelection onDone={this.handleDone}/>);
    }

    return mealSelectionContent;
  }

  saveRsvp() {
    const rsvpBody = {
      guests: this.state.guests
    };

    axios.post('/api/rsvp', rsvpBody)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
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
              <Button color="info" onClick={this.saveRsvp} disabled={!this.state.canSave}>
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
