import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { DateRange, Settings } from '@material-ui/icons'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render(){
    return(
      <AppBar position="static">
        <Toolbar id="toolbar-homepage">
          <div id="date-time">
            <Typography id="time">4:47 PM</Typography>
            <Typography id="date">Wed, Nov. 7th</Typography>
          </div>
          <div id="nav">
            <Link to="/setpoints">
              <DateRange id="nav-btn" fontSize="large"/>
            </Link>
            <Settings id="nav-btn" fontSize="large"/>
          </div>
        </Toolbar>
      </AppBar>
    );
  }

}

export default NavBar