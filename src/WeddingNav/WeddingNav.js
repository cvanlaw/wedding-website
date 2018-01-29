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
                        <Nav horizontal justified card>
                            <NavItem>
                                <NavLink href="/location/">Location</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/travel/">Travel & Accomodations</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/registry/">Registry</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <hr />
                    <Route exact path="/" component={Home} />
                    <Route path="/location/" component={Location} />
                    <Route path="/travel/" component={Travel} />
                    <Route path="/registry/" component={Registry} />
                </div>
            </Router>
        );
    }
}

export default WeddingNav;