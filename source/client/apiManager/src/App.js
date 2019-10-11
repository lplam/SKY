import React, { Component } from 'react';

import routes from './routes'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import MenuPage from './components/Menu/Menu'
import TopHeader from './components/TopHeader/TopHeader'
import Footer from "./components/Footer/Footer"


class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      render: false
    }
  }

  componentDidMount()
  {
    if(window.location.pathname !== '/')
    {
      this.setState({
        render: true
      })
    }
  }

  render() {
    var state = localStorage.getItem('state');
    var x = null;
    var y = null;
    if(this.state.render)
    {
      x = (
        <div>
          <TopHeader>
          </TopHeader>
          <MenuPage></MenuPage>
        </div>
      )
       y = (
         <Footer></Footer>
       )
    }
    if(state)
    {
        window.location.reload();
        localStorage.removeItem('state');
    }
    return (
        <Router>
          {x}
          <div >
          <link rel="stylesheet" href="./servicesStyle/css/style.css"/>

            {this.showContentMenu(routes)}
          </div>
          {y}
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
