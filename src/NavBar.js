import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { DateRange, Settings } from '@material-ui/icons'
import Scheduler from './Scheduler'

class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      showCalendar: false
    };
    this.onCalendarClick = this.onCalendarClick.bind(this);
  }

  onCalendarClick = () => {
    this.setState({ showCalendar: true});
  }

  render(){
    if(this.state.showCalendar){
      return <Scheduler/>
    }

    return(
      <AppBar position="static">
        <Toolbar id="toolbar-homepage">
          <div id="date-time">
            <Typography id="time">4:47 PM</Typography>
            <Typography id="date">Wed, Nov. 7th</Typography>
          </div>
          <div id="nav">
            <DateRange fontSize="large" onClick={this.onCalendarClick}></DateRange>
            <Settings fontSize="large" ></Settings>
          </div>
        </Toolbar>
      </AppBar>
    );
  }

}

export default NavBar