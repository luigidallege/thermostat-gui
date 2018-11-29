import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import { Button, Switch, FormGroup, FormControlLabel } from '@material-ui/core';
import NavBar from './NavBar'

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

class Scheduler extends Component {
  constructor(props){
    super(props)
    this.state = {
      enableSetPoint: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = name => event => {
    this.setState({ enableSetPoint: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <div id="screen">
        <NavBar></NavBar>

        <div id="main">
          <div id="schedule-selecter-container">
            <Button class="button schedule-btn">Weekdays</Button>
            <Button class="button schedule-btn">Weekends</Button>
          </div>
          
          <div id="schedule-selecter-container">
            <Button class="button">1</Button>
            <Button class="button">2</Button>
            <Button class="button">3</Button>
            <Button class="button">4</Button>
          </div>

          <div id="enable-edit-container">
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.enableSetPoint}
                    onChange={this.handleChange('enableSetPoint')}
                    classes={{
                      switchBase: classes.colorSwitchBase,
                      checked: classes.colorChecked,
                      bar: classes.colorBar,
                    }}
                  />
                }
                label={<span style={{ color: '#FFF'}}>{this.state.enableSetPoint ? 'ON' : 'OFF'}</span>}
              />
            </FormGroup>
            <Button class="button back-btn">EDIT</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Scheduler);
