import React, { Component } from 'react';

import routes from './routes'

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div id = "containers">
            {/* <MenuPage/>        */}
            {this.showContentMenu(routes)}
          </div>
        </Router>
    );
  }

  showContentMenu = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((routes, index) => {
        return <Route key={index} path={routes.path} component={routes.main} exact = {routes.exact} />;
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;
