import React, { Component } from 'react';
import Header from './component/header/Header';
import Wizard from './component/wizard/Wizard';
import Dashboard from './component/dashboard/Dashboard';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Wizard />
        <Header />
      </div>
    );
  }
}

export default App;
