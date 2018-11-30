import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { DateRange, Home, Settings } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function NavIcon() {

  if (window.location.href === "http://localhost:3001/") {
    return (
      <Link to="/setpoints">
        <DateRange id="nav-btn" fontSize="large" />
      </Link>
    )
  } else {
    return (
      <Link to="/">
        <Home id="nav-btn" fontSize="large" />
      </Link>
    )
  }
}

class NavBar extends Component {
  render() {

    let navIcon = NavIcon();

    return (
      <AppBar position="static">
        <Toolbar id="toolbar-homepage">
          <div id="date-time">
            <Typography id="time">4:47 PM</Typography>
            <Typography id="date">Wed, Nov. 7th</Typography>
          </div>
          <div id="nav">
            {navIcon}
            <Settings id="nav-btn" fontSize="large" />
          </div>
        </Toolbar>
      </AppBar>
    );
  }

}

export default NavBar