import React, { Component } from 'react';
import './App.css';

import PageHeaderComponent from './page-header/page-header-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeaderComponent></PageHeaderComponent>
      </div>
    );
  }
}

export default App;
