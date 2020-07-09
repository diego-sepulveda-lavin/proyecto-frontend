import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import injectContext from './store/appContext';

import Dashboard from './views/Dashboard'
import LandingPage from './views/LandingPage'
import LoginPage from './views/LoginPage';


const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={LandingPage}></Route>
        <Route path='/dashboard' exact component={Dashboard}></Route>
        <Route path='/login' exact component={LoginPage}></Route>

      </Switch>
    </BrowserRouter>
  )
}

export default injectContext(App);
