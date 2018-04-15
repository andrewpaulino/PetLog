import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Example from './containers/ExContainer'

export default class App extends React.Component {
  render() {
    return (

        <Router>
          <Switch>
          <Route exact path='/' component={ Example } />
          </Switch>
      </Router>

    );
  }
}