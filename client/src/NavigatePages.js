import React, { Component } from 'react';
import './App.css';
import { button } from '@material-ui/core';
import { Link } from 'react-router-dom'

export class NavigatePages extends Component{  
    render() {   
      return(
        <div id="button-container">
          <button class="button back-btn" onClick={this.props.goBack}>BACK</button>
          <a href={this.props.nextPage} class="button next-btn">NEXT</a>
        </div>
      );
    }
}