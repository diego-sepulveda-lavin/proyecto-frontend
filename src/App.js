import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import injectContext from './store/appContext';

import Dashboard from './views/Dashboard'
import LandingPage from './views/LandingPage'
import VentaUsuario from './views/ventaPrincipal';


const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={LandingPage}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Route exact path="/ventaUsuario" component={VentaUsuario}></Route>

      </Switch>
    </BrowserRouter>
  )
}

export default injectContext(App);
