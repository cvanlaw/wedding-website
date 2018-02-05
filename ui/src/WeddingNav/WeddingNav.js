import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Location from '../Location/Location';
import Travel from '../Travel/Travel';
import Registry from '../Registry/Registry';
import Home from '../Home/Home';
import Rsvp from '../RSVP/Rsvp';

class WeddingNav extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Nav horizontal='horizontal' justified card>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/location/">Location</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/travel/">Travel & Accomodations</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/registry/">Registry</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/rsvp/">RSVP</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <hr />
                    <Route exact path="/" component={Home} />
                    <Route path="/location/" component={Location} />
                    <Route path="/travel/" component={Travel} />
                    <Route path="/registry/" component={Registry} />
                    <Route path="/rsvp/" component={Rsvp} />
                </div>
            </Router>
        );
    }
}

export default WeddingNav;