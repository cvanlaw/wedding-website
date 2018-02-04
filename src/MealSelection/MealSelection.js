import React, { Component } from 'react';
import "./MealSelection.css";
import { FormGroup, Row, Col, Input, Label } from 'reactstrap';

class MealSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guestName: "",
            selectedOption: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        if (target.type === 'radio') {
            this.handleOptionChange(event);
        }
        else {
            this.handleNameChange(event);
        }
    }

    handleOptionChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    handleNameChange(event) {
        this.setState({
            guestName: event.target.value
        });
    }

    render() {
        return (
            <FormGroup inline>
                <Row>
                    <Col sm="4">
                        <Input type="text" name="Guest Name" placeholder="Guest Name"
                            value={this.state.guestName}
                            onChange={this.handleChange} />
                    </Col>
                    <Col sm="8">
                        <FormGroup tag="fieldset" inline>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="radio" name="beef" value="beef"
                                        checked={this.state.selectedOption === 'beef'}
                                        onChange={this.handleChange} />{' '}
                                    Bison Short Rib
                            </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="radio" name="chicken" value="chicken"
                                        checked={this.state.selectedOption === 'chicken'}
                                        onChange={this.handleChange} />{' '}
                                    Airline Chicken Breast
                            </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="radio" name="fish" value="fish"
                                        checked={this.state.selectedOption === 'fish'}
                                        onChange={this.handleChange} />{' '}
                                    Steelhead Trout
                            </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="radio" name="veggie" value="veggie"
                                        checked={this.state.selectedOption === 'veggie'}
                                        onChange={this.handleChange} />{' '}
                                    Cauliflower Steak (Vegetarian)
                            </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="radio" name="kids" value="kids"
                                        checked={this.state.selectedOption === 'kids'}
                                        onChange={this.handleChange} />{' '}
                                    Kid's Meal
                            </Label>
                            </FormGroup>
                        </FormGroup>
                    </Col>
                </Row>
            </FormGroup>
        );
    }
}

export default MealSelection;