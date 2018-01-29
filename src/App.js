import React, { Component } from 'react';
import './App.css';
import BannerImage from './BannerImage/BannerImage';
import TitlePhoto from './TitlePhoto/TitlePhoto';
import Location from './Location/Location';
import Travel from './Travel/Travel';
import Registry from './Registry/Registry';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <BannerImage />
          <TitlePhoto />
          <hr />
          <Location />
          <hr />
          <Travel />
          <hr />
          <Registry />
        </Container>
      </div>
    );
  }
}

export default App;
