import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import { Button, Switch, FormGroup, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom'

const styles = theme => ({
  colorSwitchBase: {
    color: '#FFF',
    '&$colorChecked': {
      color: '#FFF',
      '& + $colorBar': {
        backgroundColor: '#FFCD00',
      },
    },
  },
  colorBar: {},
  colorChecked: {}
});

export class Scheduler extends Component {
  constructor(props){
    super(props)
    this.state = {
      showSetPoints: false,
      enableSetPoint: false,
      setPointIsHidden: true,
      enableEditIsHidden: true,
      selectedSetPoint: '',
      selectedDay: ''
    };
    this.onDaySelectionClick = this.onDaySelectionClick.bind(this);
    this.onSetPointClick = this.onSetPointClick.bind(this);
    this.enableSetPointOnClick = this.enableSetPointOnClick.bind(this);
  }


  
  onDaySelectionClick(name) {
    this.setState({ setPointIsHidden: false, selectedDay: name});
  } 

  onSetPointClick(name) {
    this.setState({ selectedSetPoint: name, enableEditIsHidden: false });
  };

  enableSetPointOnClick = event => {
    this.setState({ enableSetPoint: event.target.checked });
  };

  render() {    
    const { classes } = this.props;

    return (
      <div id="main">
        <div id="schedule-selecter-container">
          <Button class="button schedule-btn" onClick={() => this.onDaySelectionClick('Weekdays')} style={{backgroundColor: this.state.selectedDay === "Weekdays" ? "#FFCD00" : "#808080"}}>Weekdays</Button>
          <Button class="button schedule-btn" onClick={() => this.onDaySelectionClick('Weekends')} style={{backgroundColor: this.state.selectedDay === "Weekends" ? "#FFCD00" : "#808080"}}>Weekends</Button>
        </div>

        {this.state.setPointIsHidden ? null : <SetPoints selectedDay={this.state.selectedDay} onSetPointClick={this.onSetPointClick} selectedSetPoint={this.state.selectedSetPoint}/>}      

        {this.state.enableEditIsHidden ? null : <EnableEdit selectedDay={this.state.selectedDay} selectedSetPoint={this.state.selectedSetPoint} classes={classes} enableSetPoint={this.state.enableSetPoint} enableSetPointOnClick={this.enableSetPointOnClick}/>}
      </div>
    );
  }
}

class SetPoints extends Component{
  render() {    
    return(
      <div id="schedule-selecter-container">
        <Button class="button" onClick={() => this.props.onSetPointClick('1')} style={{backgroundColor: this.props.selectedSetPoint === "1" ? "#FFCD00" : "#808080"}}>1</Button>
        <Button class="button" onClick={() => this.props.onSetPointClick('2')} style={{backgroundColor: this.props.selectedSetPoint === "2" ? "#FFCD00" : "#808080"}}>2</Button>
        <Button class="button" onClick={() => this.props.onSetPointClick('3')} style={{backgroundColor: this.props.selectedSetPoint === "3" ? "#FFCD00" : "#808080"}}>3</Button>
        <Button class="button" onClick={() => this.props.onSetPointClick('4')} style={{backgroundColor: this.props.selectedSetPoint === "4" ? "#FFCD00" : "#808080"}}>4</Button>
      </div>
    );
  }
}

class EnableEdit extends Component{
  constructor(props){
    super(props)
    this.state = {
      showNextPage: false
    };
    this.showNextPageOnClick = this.showNextPageOnClick.bind(this);
  }

  showNextPageOnClick() {
    this.setState({ showNextPage: true});
  } 

  render() {    
    const { classes } = this.props;

    return(
      <div id="enable-edit-container">
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={this.props.enableSetPoint}
                onChange={this.props.enableSetPointOnClick}
                classes={{
                  switchBase: classes.colorSwitchBase,
                  checked: classes.colorChecked,
                  bar: classes.colorBar,
                }}
              />
            }
            label={<span style={{ color: '#FFF'}}>{this.props.enableSetPoint ? 'ON' : 'OFF'}</span>}
          />
        </FormGroup>
        
        <Button class="button back-btn">
          <Link to="/editsetpointtime" >EDIT</Link>
        </Button>
       
      </div>
    );
  }
}

export default withStyles(styles)(Scheduler);

