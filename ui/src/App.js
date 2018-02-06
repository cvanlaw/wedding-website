import React, { Component } from "react";
import "./App.css";
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/fontawesome-free-solid";

import { Container } from "reactstrap";
import WeddingNav from "./WeddingNav/WeddingNav";

fontawesome.library.add(faCheck);

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
