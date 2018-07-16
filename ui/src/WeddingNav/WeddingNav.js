import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from 'react-router-dom'
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import "./WeddingNav.css";
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
                        <Nav horizontal='horizontal' justified card>
                            <NavItem>
                                <NavLink className="nav-link" href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" href="/location/">Location</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" href="/travel/">Travel & Accomodations</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" href="/registry/">Registry</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" href="/photos/">Photos</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <hr />
                    <Route exact path="/" component={Home} />
                    <Route path="/location/" component={Location} />
                    <Route path="/travel/" component={Travel} />
                    <Route path="/registry/" component={Registry} />
                    <Route path="/photos/" render={() => (
                        window.location="https://vanlawwedding.shutterfly.com/wedding"
                    )} />
                </div>
            </Router>
        );
    }
}

export default WeddingNav;