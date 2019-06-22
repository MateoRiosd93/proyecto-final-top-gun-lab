import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Employees from './components/Employees';
import Employee from './components/Employee';
import Prizes from './components/Prizes';
import Prize from './components/Prize';
import Achivements from './components/Achivements';

import './styles/App.css';

function App() {
  return (
    <HashRouter>
      <Header/>
      <Switch>
        <Route exact path="/employees" component={Employees}/>
        <Route exact path="/" render={() => (
                              <Redirect to="/employes"/>
        )}/>
        <Route exact path="/employees/:id" component={Employee}/>
        <Route exact path="/prizes" component={Prizes}/>
        <Route exact path="/prizes/:id" component={Prize}/>
        <Route exact path="/achivements" component={Achivements}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
