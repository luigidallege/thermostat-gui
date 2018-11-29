import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { DateRange, Settings } from '@material-ui/icons'

class NavBar extends Component {

  render(){
    return(
      <AppBar position="static">
        <Toolbar id="toolbar">
          <div id="date-time">
            <Typography id="time">4:47 PM</Typography>
            <Typography id="date">Wed, Nov. 7th</Typography>
          </div>
          <div id="nav">
            <DateRange fontSize="large" ></DateRange>
            <Settings fontSize="large" ></Settings>
          </div>
        </Toolbar>
      </AppBar>
    );
  }

}

export default NavBar