import React, { Component } from 'react'
import './App.css'
import { UpArrow, DownArrow } from './Custom Icons/Arrows'
import { Typography } from '@material-ui/core'
import { NavigatePages } from './NavigatePages'

export class EditSetPointTime extends Component{
  constructor(props){
    super(props)
    this.state = {
      showNextPage: false,
      hour: 12,
      minute: 0,
      ampm: 'AM',
    };
    this.goBack = this.goBack.bind(this);
    this.adjustHour = this.adjustHour.bind(this);
    this.adjustMinute = this.adjustMinute.bind(this);
    this.adjustAMPM = this.adjustAMPM.bind(this);
  }
  
  goBack(){
    this.props.history.goBack();
  }

  adjustHour(direction){
    if(direction === 'up'){
      if(this.state.hour === 12){
        this.setState({hour: 1})
      }else{
        this.setState({hour: this.state.hour + 1})
      }
    }
    else if(direction === 'down'){
      if(this.state.hour === 1){
        this.setState({hour: 12})
      }else{
        this.setState({hour: this.state.hour - 1})
      }
    }
  }

  adjustMinute(direction){
    if(direction === 'up'){
      if(this.state.minute === 59){
        this.setState({minute: 0})
      }else{
        this.setState({minute: this.state.minute + 1})
      }
    }
    else if(direction === 'down'){
      if(this.state.minute === 0){
        this.setState({minute: 59})
      }else{
        this.setState({minute: this.state.minute - 1})
      }
    }
  }

  adjustAMPM(){
    if(this.state.ampm === 'AM'){
      this.setState({ampm: 'PM'})
    }
    else if(this.state.ampm === 'PM'){
      this.setState({ampm: 'AM'})
    }
  }

  render() {   

    return(
      <div id="component-wrapper">
        <div id="main">
          <Typography id="label">Select Time</Typography>
          
          <div id="custom-dial-container">
            <div>
                <UpArrow adjust={this.adjustHour}/>
                <Typography id="dial-text">{this.state.hour}</Typography>
                <DownArrow adjust={this.adjustHour}/>
            </div>

            <div>
                <UpArrow adjust={this.adjustMinute}/>
                <Typography id="dial-text">{this.state.minute < 10 ? '0' : ''}{this.state.minute}</Typography>
                <DownArrow adjust={this.adjustMinute}/>
            </div>

            <div>
                <UpArrow adjust={this.adjustAMPM}/>
                <Typography id="dial-text">{this.state.ampm}</Typography>
                <DownArrow adjust={this.adjustAMPM}/>
            </div>
          </div>
        </div>
        <NavigatePages goBack={this.goBack} nextPage={'/editsetpointtemp'}/>
      </div>
    );
  }
}

export default EditSetPointTime;

