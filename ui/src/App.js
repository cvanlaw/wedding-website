import React, { Component } from "react";
import "./App.css";

import { Container } from "reactstrap";
import WeddingNav from "./WeddingNav/WeddingNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <WeddingNav />
        </Container>
      </div>
    );
  }
}

export default App;
