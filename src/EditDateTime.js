import React, { Component } from 'react'
import './App.css'
import { Typography } from '@material-ui/core'
import { NavigatePages } from './NavigatePages'
import { SelectTime } from './SelectTime'
import { SelectDate } from './SelectDate'

export class EditDateTime extends Component{
  constructor(props){
    super(props)
    this.state = {
      showNextPage: false,
      hour: 12,
      minute: 0,
      ampm: 'AM',
    };
    this.goBack = this.goBack.bind(this);
  }
  
  goBack(){
    this.props.history.goBack();
  }

  render() {   

    return(
      <div id="component-wrapper">
        <div id="main">
          <Typography id="label">Select Time</Typography>
          
          <SelectTime/>

          <Typography id="label">Select Date</Typography>
          
          <SelectDate/>
        </div>
        <NavigatePages goBack={this.goBack} nextPage={'/'}/>
      </div>
    );
  }
}

export default EditDateTime;

