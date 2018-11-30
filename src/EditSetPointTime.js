import React, { Component } from 'react'
import './App.css'
import { Typography } from '@material-ui/core'
import { NavigatePages } from './NavigatePages'
import { SelectTime } from './SelectTime'

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
          
          <SelectTime/>
        </div>
        <NavigatePages goBack={this.goBack} nextPage={'/editsetpointtemp'}/>
      </div>
    );
  }
}

export default EditSetPointTime;

