import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import Scheduler from './Scheduler'
import EditSetPointTime from './EditSetPointTime'
import EditSetPointTemp from './EditSetPointTemp'
// Import routing components
import {
    Switch,
    Route
} from 'react-router-dom'
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div id="screen">
          <NavBar></NavBar>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/setpoints" component={Scheduler} />
            <Route path="/editsetpointtime" component={EditSetPointTime} />
            <Route path="/editsetpointtemp" component={EditSetPointTemp} />
          </Switch>
      </div>
    );    
  }
}

export default App;
