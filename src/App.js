import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Employees from './components/Employees';
import Employee from './components/Employee';
import Prizes from './components/Prizes';
import Prize from './components/Prize';
import Achievements from './components/Achievements';


import './styles/App.css';

function App() {

    return (
      <div className="container-app">
        <HashRouter>
          <Header/>
          <Switch>
            <Route exact path="/employees" component={Employees}/>
            <Route exact path="/employees/:id" component={Employee}/>
            <Route exact path="/prizes" component={Prizes}/>
            <Route exact path="/prizes/:id" component={Prize}/>
            <Route exact path="/achivements" component={Achievements}/>
            <Route exact path="/" render={() => (
                                  <Redirect to="/employees"/>
            )}/>
          </Switch>
        </HashRouter>
      </div>
    );
}

export default App;

