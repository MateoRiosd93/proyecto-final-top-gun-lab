import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Employees from "./components/Employees";
import Employee from "./components/Employee";
import Prizes from "./components/Prizes";
import Prize from "./components/Prize";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

import "./styles/App.css";

export default class App extends Component {
  state = {
    intervalId: 0
  };

  scrollUp = () => {
    let intervalId = setInterval(this.scrollStep, 16);
    this.setState({ intervalId });
  };

  scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  };

  render() {
    return (
      <div className="container-app">
        <HashRouter>
          <Header />
          <Switch>
            <Route exact path="/employees" component={Employees} />
            <Route exact path="/employees/:id" component={Employee} />
            <Route exact path="/prizes" component={Prizes} />
            <Route exact path="/prizes/:id" component={Prize} />
            <Route exact path="/achievements" component={Achievements} />
            <Route exact path="/" render={() => <Redirect to="/employees" />} />
          </Switch>
          <Footer scrollUp={this.scrollUp} />
        </HashRouter>
      </div>
    );
  }
}
