import React, { Component } from 'react';

import './App.css';
import Menu from "./menu/menu";
import Election from "./updateElection/Election";



import Principal from './home/principale'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Redirector} from 'react-router-redirect';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Redirector />
          <Switch>
            <Route path="/"  component={Principal} exact />
            <Route path="/menu/:idf/:firstName"  component={Menu}  />
            <Route path="/update/:name"  component={Election}  />

          

            

          </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
