import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { DateRange, Home, Settings } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import moment from 'moment'

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
    let time = moment();

    return (
      <AppBar position="static">
        <Toolbar id="toolbar-homepage">
          <div id="date-time">
            <Typography id="time" align="left">{time.format("h:mm a")}</Typography>
            <Typography id="date" align="left">{time.format("ddd, MMM Do")}</Typography>
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