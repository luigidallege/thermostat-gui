import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { DateRange, Home, Settings } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import moment from 'moment'

function NavIcon() {
  if (window.location.href === "http://localhost:3000/") {
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
  if (window.location.href === "http://localhost:3000/") {
    console.log('Home')
    return ( false)
  } else {
    console.log('Not in Kansas Anymore')
    return ( true )
  }
}

class NavBar extends Component {
  render() {
    let isHidden = HiddenNavBar()
    let navIcon = NavIcon();
    let time = moment();

    console.log(isHidden)

    return (
      <AppBar position="static">
        <Toolbar id={isHidden ? 'toolbar' : 'toolbar-homepage'}>
          <div id="date-time" isHidden={isHidden}>
            {isHidden ? null : <DateTime/>}
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

const DateTime = () => (
  <div>
    <Typography id="time">4:47 PM</Typography>
    <Typography id="date">Wed, Nov. 7th</Typography>
  </div>
)

export default NavBar