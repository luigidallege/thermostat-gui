import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <div id="screen">
        <NavBar></NavBar>

        <div id="main">
          <div id="hvac-control">
            <button id="hvac-button">Auto</button>
            <button id="hvac-button">Heat</button>
            <button id="hvac-button">AC</button>
          </div>
          <div id="temp-container">
            <p id="curr-temp">30&#730;</p>
            <div id="status-container">
              <p id="hvac-status-id">Status: </p>
              <p id="hvac-status">Heating On</p>
            </div>
          </div>
          <div id="adjust-container">
            <div id="adjust-box">
              <div id="arrow-up"/>
              <p id="desired-temp-label">SET TEMP</p>
              <p id="desired-temp">50&#730;</p>
              <div id="arrow-down"/>
              <button id="hold-btn">HOLD</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
