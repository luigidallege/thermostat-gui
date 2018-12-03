import React, { Component } from 'react';
import './App.css';
import { UpArrow, DownArrow } from './Arrows'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      heatStatus: 'OFF',
      desiredTemp: 55
    };
    this.adjustTemp = this.adjustTemp.bind(this);
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ heatStatus: res.status }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/hvac-status');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  adjustTemp(direction, id){
    if(direction === 'up'){
      if(this.state.desiredTemp !== 90){
        this.setState({desiredTemp: this.state.desiredTemp + 1})
      }
    }
    else if(direction === 'down'){
      if(this.state.desiredTemp !== 50){
        this.setState({desiredTemp: this.state.desiredTemp - 1})
      }
    }
  }

  render() {
    return (
      <div id="main-homepage">
        <div id="hvac-control">
          <button class="button hvac-button">Auto</button>
          <button class="button hvac-button">Heat</button>
          <button class="button hvac-button">AC</button>
        </div>
        <div id="temp-container">
          <p id="curr-temp">30&#730;</p>
          <div id="status-container">
            <p id="hvac-status-id">Status: </p>
            <p id="hvac-status">{this.state.heatStatus.status}</p>
          </div>
        </div>
        <div id="adjust-container">
          <div id="adjust-box">
            <UpArrow  adjust={this.adjustTemp}/>
            <p id="desired-temp-label">SET TEMP</p>
            <p id="desired-temp">{this.state.desiredTemp}&#730;</p>
            <DownArrow   adjust={this.adjustTemp}/>
            <button class="button hold-btn">HOLD</button>
          </div>
        </div>
      </div>
    );    
  }
}

export default Home;
