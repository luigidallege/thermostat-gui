import React, { Component } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

function SaveJson(save_next){
  if(save_next.toUpperCase() === "SAVE") {
    console.log("Save this stuff homie");
  }
}

export class NavigatePages extends Component{  
    render() {   
      return(
        <div id="button-container">
          <Button class="button back-btn" onClick={this.props.goBack}>BACK</Button>
          <Button class="button next-btn">
            <Link to={this.props.nextPage} onClick={SaveJson(this.props.save_next)}>{this.props.save_next}</Link>
          </Button>
        </div>
      );
    }
}