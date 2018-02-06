import React, { Component } from 'react';
import "./MealSelection.css";
import { Button, FormGroup, Row, Col, Input, Label } from 'reactstrap';

class MealSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guestName: "",
            selectedOption: "Beef",
            guestValid: false,
            selectedOptionValid: true,
            formValid: false,
            formErrors: { guestName: '', selectedOption: '' }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }

    handleDone() {
        this.props.onDone(this.state.guestName, this.state.selectedOption);
    }

    handleChange(event) {
        const target = event.target;
        let selectedOptionValid = this.state.selectedOptionValid;
        let guestValid = this.state.guestValid;
        if (target.name === 'Meal Choice') {
            selectedOptionValid = this.handleOptionChange(event);
        }
        else {
            guestValid = this.handleNameChange(event);
        }

        this.validateForm(selectedOptionValid, guestValid);
    }

    handleOptionChange(event) {
        const selectedOption = event.target.value;
        const selectedOptionValid = selectedOption === "Beef"
            || selectedOption === "Chicken"
            || selectedOption === "Fish"
            || selectedOption === "Vegetarian"
            || selectedOption === "Kid's Meal";

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
                    <Col sm="5">
                        <Input type="text" name="Guest Name" placeholder="Guest Name"
                            value={this.state.guestName}
                            onChange={this.handleChange} />
                    </Col>
                    <Col sm="5">
                        <FormGroup>
                            <Input type="select" name="Meal Choice" id="mealSelect" onChange={this.handleChange}>
                                <option>Beef</option>
                                <option>Chicken</option>
                                <option>Fish</option>
                                <option>Vegetarian</option>
                                <option>Kid's Meal</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <Button block onClick={this.handleDone}>Done</Button>
                    </Col>
                </Row>
            </FormGroup>
        );
    }
}

export default MealSelection;