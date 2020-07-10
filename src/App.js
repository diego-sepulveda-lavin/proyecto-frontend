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
import ListadoUsuarios from './views/ListadoUsuarios';
import CerrarCaja from './views/cerrarCaja';
import Footer from './components/footer';
import NavBar from './components/navBar';
import MenuLateral from './components/menuLateral';
import AnularVentaUsuario from './views/anularVenta';



const App = props => {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage}></Route>
        <Route exact path='/login' component={LoginPage}></Route>

        <div className="wrapper">
          <MenuLateral />
          <div className="main-panel" id="main-panel">
            {/* <!-- Navbar --> */}
            <NavBar />
            {/* <!-- End Navbar --> */}



            <Route exact path='/dashboard' component={Dashboard}></Route>
            <Route exact path='/general-stock' component={GeneralStock}></Route>
            <Route exact path='/crear-sku' component={CrearSku}></Route>
            <Route exact path='/ingresar-factura' component={IngresarFactura}></Route>
            <Route exact path='/modificar-sku' component={ModificarSku}></Route>
            <Route exact path="/venta-usuario" component={VentaUsuario}></Route>
            <Route exact path="/create-user" component={CreateUser}></Route>
            <Route exact path="/modifica-user" component={ModificarUser}></Route>
            <Route exact path="/abrir-caja" component={AbrirCaja}></Route>
            <Route exact path="/listado-Usuarios" component={ListadoUsuarios}></Route>
            <Route exact path="/cerrar-Caja" component={CerrarCaja}></Route>
            <Route exact path="/anular-Venta" component={AnularVentaUsuario}></Route>


            <Footer />
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default injectContext(App);
