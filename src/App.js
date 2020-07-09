import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import injectContext from './store/appContext';

import Dashboard from './views/Dashboard'
import LandingPage from './views/LandingPage'
import LoginPage from './views/LoginPage';
import GeneralStock from './views/GeneralStock'
import CrearSku from './views/CrearSKU';
import IngresarFactura from './views/IngresarFactura';
import ModificarSku from './views/ModificarSku';
import VentaUsuario from './views/ventaPrincipal';


const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={LandingPage}></Route>
        <Route path='/dashboard' exact component={Dashboard}></Route>
        <Route path='/login' exact component={LoginPage}></Route>
        <Route path='/general-stock' exact component={GeneralStock}></Route>
        <Route path='/crear-sku' exact component={CrearSku}></Route>
        <Route path='/ingresar-factura' exact component={IngresarFactura}></Route>
        <Route path='/modificar-sku' exact component={ModificarSku}></Route>
        <Route exact path="/ventaUsuario" component={VentaUsuario}></Route>

      </Switch>
    </BrowserRouter>
  )
}

export default injectContext(App);
