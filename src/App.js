import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="screen">
        <div id="toolbar-homepage">
          <div id="date-time">
            <h1>4:47 PM</h1>
            <h1 id="date">Wed, Nov. 7th</h1>
          </div>
          <div id="nav">
            <button>Cal</button>
            <button>S</button>
          </div>
        </div>
          
        <div id="main-homepage">
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
