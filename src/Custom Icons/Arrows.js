import React, { Component } from 'react';
import '../App.css';

export class UpArrow extends Component{  
    render() {  
      return(
        <div id="arrow-up" onClick={() => this.props.adjust('up')}/>
      );
    }
}

export class DownArrow extends Component{  
    render() {    
      return(
        <div id="arrow-down" onClick={() => this.props.adjust('down')}/>
      );
    }
}