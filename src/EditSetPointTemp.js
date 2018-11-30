import React, { Component } from 'react'
import './App.css'
import { UpArrow, DownArrow } from './Custom Icons/Arrows'
// import { Typography } from '@material-ui/core'
import { NavigatePages } from './NavigatePages'

class EditSetPointTemp extends Component {
  constructor(props){
    super(props)
    this.state = {
      desiredTemp: 55
    };
    this.goBack = this.goBack.bind(this);
    this.adjustTemperature = this.adjustTemperature.bind(this);
  }

  goBack(){
    this.props.history.goBack();
  }

  adjustTemperature(direction){
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
      <div id="component-wrapper">
        <div id="main-settemp">
          <div id="hvac-control">
            <button id="hvac-button">Auto</button>
            <button id="hvac-button">Heat</button>
            <button id="hvac-button">AC</button>
          </div>
          <div id="temp-container">
            <p id="scheduler-temp">{this.state.desiredTemp}&#730;</p>
          </div>
          <div id="adjust-container">
            <div id="adjust-box-scheduler">
              <UpArrow adjust={this.adjustTemperature}/>
              <DownArrow adjust={this.adjustTemperature}/>
            </div>
          </div>
        </div>

        <NavigatePages goBack={this.goBack} nextPage={'/setpoints'}/>
      </div>
    );    
  }
}

export default EditSetPointTemp;
