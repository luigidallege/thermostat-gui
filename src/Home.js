import React, { Component } from 'react';
import './App.css';

var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var HeatLED = new Gpio(21, 'out'); //use GPIO pin 4, and specify that it is output

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      heatStatus: 0
    };
    this.setHeat = this.setHeat.bind(this);
  }

  setHeat() { 
    this.setState({heatStatus: 1});
    HeatLED.writeSync(value); //turn LED on or off depending on the button state (0 or 1)
  }

  render() {
    return (
      <div id="main-homepage">
        <div id="hvac-control">
          <button id="hvac-button">Auto</button>
          <button id="hvac-button" onClick={this.setHeat}>Heat</button>
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
    );    
  }
}

export default Home;
