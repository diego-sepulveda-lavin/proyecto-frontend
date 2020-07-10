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
import CreateUser from './views/CreateUser';
import ModificarUser from './views/ModificarUser'
import AbrirCaja from './views/abrirCaja';
import CerrarCaja from './views/cerrarCaja';



const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'  component={LandingPage}></Route>
        <Route exact path='/dashboard' component={Dashboard}></Route>
        <Route exact path='/login' component={LoginPage}></Route>
        <Route exact path='/general-stock' component={GeneralStock}></Route>
        <Route exact path='/crear-sku' component={CrearSku}></Route>
        <Route exact path='/ingresar-factura' component={IngresarFactura}></Route>
        <Route exact path='/modificar-sku' component={ModificarSku}></Route>
        <Route exact path="/ventaUsuario" component={VentaUsuario}></Route>
        <Route exact path="/CreateUser" component={CreateUser}></Route>
        <Route exact path="/modificarUser" component={ModificarUser}></Route>
        <Route exact path="/abrirCaja" component = {AbrirCaja}></Route>
        <Route exact path="/cerrarCaja" component = {CerrarCaja}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default injectContext(App);
