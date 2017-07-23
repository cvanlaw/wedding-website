import React, { Component } from 'react';
import './App.css';

import PageHeaderComponent from './page-header/page-header-component';
import SaveTheDateComponent from './save-the-date/save-the-date-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeaderComponent></PageHeaderComponent>
        <SaveTheDateComponent></SaveTheDateComponent>
      </div>
    );
  }
}

export default App;
