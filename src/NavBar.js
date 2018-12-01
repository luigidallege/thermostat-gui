import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { DateRange, Home, Settings } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import moment from 'moment'

function NavIcon() {
  if (window.location.href === "https://thermostat-gui.herokuapp.com/") {
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

function HiddenNavBar() {
  if (window.location.href === "https://thermostat-gui.herokuapp.com/") {
    return ( false )
  } else {
    return ( true )
  }
}

function DateTime() {
  let time = moment();
  return(
  <div>
    <Typography id="time" align="left">{time.format("h:mm a")}</Typography>
    <Typography id="date" align="left">{time.format("ddd, MMM Do")}</Typography>
  </div>
  );
}

class NavBar extends Component {
  
  render() {
    let isHidden = HiddenNavBar()
    let navIcon = NavIcon();
    let dateTime = DateTime();

    return (
      <AppBar position="static">
        <Toolbar id={isHidden ? 'toolbar' : 'toolbar-homepage'}>
          <div id="date-time" isHidden={isHidden}>
            {isHidden ? null : dateTime}
          </div>
          <div id="nav">
            {navIcon}
            <Link to="/editdatetime">
              <Settings id="nav-btn" fontSize="large"/>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar