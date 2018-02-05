import React, { Component } from 'react';
import "./MealSelection.css";
import { FormGroup, Row, Col, Input, Label } from 'reactstrap';

class MealSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guestName: "",
            selectedOption: "",
            guestValid: false,
            selectedOptionValid: false,
            formValid: false,
            formErrors: { guestName: '', selectedOption: '' }
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        let selectedOptionValid = this.state.selectedOptionValid;
        let guestValid = this.state.guestValid;
        if (target.type === 'radio') {
            selectedOptionValid = this.handleOptionChange(event);
        }
        else {
            guestValid = this.handleNameChange(event);
        }

        this.validateForm(selectedOptionValid, guestValid);
    }

    handleOptionChange(event) {
        const selectedOption = event.target.value;
        const selectedOptionValid = selectedOption === 'beef'
            || selectedOption === 'chicken'
            || selectedOption === 'fish'
            || selectedOption === 'veggie'
            || selectedOption === 'kids';

        this.setState({
            selectedOption: selectedOption,
            selectedOptionValid: selectedOptionValid
        });

        return selectedOptionValid;
    }

    handleNameChange(event) {
        const name = event.target.value;
        const nameValid = name.length >= 2;
        this.setState({
            guestName: name,
            guestValid: nameValid
        });

        return nameValid;
    }

    validateForm(selectedOptionValid, guestValid) {
        console.log(guestValid);
        console.log(selectedOptionValid);
        this.setState({
            formValid: guestValid && selectedOptionValid
        });

        this.setFormErrors()
    }

    setFormErrors() {
        if (!this.state.guestValid) {
            this.setState({
                formErrors: {
                    guestName: 'Please enter a name for this guest.',
                    selectedOption: this.state.formErrors.selectedOption
                }
            });
        }

        if (!this.state.selectedOptionValid) {
            this.setState({
                formErrors: {
                    selectedOption: 'Please choose which meal you would prefer.',
                    guestName: this.state.formErrors.guestName
                }
            });
        }
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