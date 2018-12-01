import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { DateRange, Home, Settings } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function NavIcon() {
  if (window.location.href === "http://localhost:3000/") {
    return (
      <div class="nav-container">
        <Link to="/setpoints">
          <DateRange id="nav-btn" fontSize="large" />
        </Link>
        <Link to="/editdatetime">
          <Settings id="nav-btn" fontSize="large"/>
        </Link>
      </div>
    )
  } else if (window.location.href === "http://localhost:3000/editdatetime"){
    return (
      <div class="nav-container">
        <Link to="/">
          <Home id="nav-btn" fontSize="large" />
        </Link>
        <Link to="/setpoints">
          <DateRange id="nav-btn" fontSize="large"/>
        </Link>
      </div>
    )
  } else {
    return (
      <div class="nav-container">
        <Link to="/">
          <Home id="nav-btn" fontSize="large" />
        </Link>
        <Link to="/editdatetime">
          <Settings id="nav-btn" fontSize="large"/>
        </Link>
      </div>
    )
  }
}

function HiddenNavBar() {
  if (window.location.href === "http://localhost:3000/") {
    return ( false)
  } else {
    return ( true )
  }
}

class NavBar extends Component {
  render() {
    let isHidden = HiddenNavBar()
    let navIcon = NavIcon();

    return (
      <AppBar position="static">
        <Toolbar id={isHidden ? 'toolbar' : 'toolbar-homepage'}>
          <div id="date-time" isHidden={isHidden}>
            {isHidden ? null : <DateTime/>}
          </div>
          <div id="nav">
            {navIcon}
          </div>
        </Toolbar>
      </AppBar>
    );
  }

}

const DateTime = () => (
  <div>
    <Typography id="time">4:47 PM</Typography>
    <Typography id="date">Wed, Nov. 7th</Typography>
  </div>
)

export default NavBar