import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import injectContext from './store/appContext';

import Dashboard from './views/Dashboard'
import LandingPage from './views/LandingPage'
import LoginPage from './views/LoginPage';
import GeneralStock from './views/GeneralStock'
import CreateUser from './views/CreateUser';
import AbrirCaja from './views/abrirCaja';
import ListadoUsuarios from './views/ListadoUsuarios';
import CerrarCaja from './views/cerrarCaja';
import Footer from './components/footer';
import NavBar from './components/navBar';
import MenuLateral from './components/menuLateral';
import AnularVentaUsuario from './views/anularVenta';
import CerrarVenta from './views/cerrarVenta';
import Empresas from './views/GeneralEmpresas';
import CrearEmpresa from './views/CrearEmpresa';
import EditarEmpresa from './views/EditarEmpresa';
import IngresarNuevaFactura from './views/ingresarNuevaFactura';
import EditarFactura from './views/editarFactura';
import CrearProveedor from './views/CrearProveedor';
import CrearCategoria from './views/CrearCategoria';
import ModificarCategoria from './views/ModificarCategoria';
import ListarCategorias from './views/ListarCategorias';
import ListarProveedores from './views/ListarProveedores';
import ModificarUsuario from './views/ModificarUsuario';
import ModificarProveedor from './views/ModificarProveedor';
import ListarFacturas from './views/ListarFacturas';
import RecuperarPassword from './views/RecuperarPassword';
import NuevaPassword from './views/NuevaPassword';
import IngresarVenta from './views/IngresarVenta';
import CrearProducto from './views/CrearProducto';
import ModificarProducto from './views/ModificarProducto';


const App = props => {
  return (

    <BrowserRouter>
      <Switch>
        {/* FrontPage components */}
        <Route exact path='/' component={LandingPage}></Route>
        <Route exact path='/login' component={LoginPage}></Route>
        <Route exact path='/recuperar-password' component={RecuperarPassword}></Route>
        <Route exact path='/nueva-password/:token' component={NuevaPassword}></Route>


        {/* END FrontPage components */}


        <div className="wrapper">
          <MenuLateral />
          <div className="main-panel" id="main-panel">
            <NavBar />


            {/* Users Components */}

            <Route exact path="/cerrar-venta" component={CerrarVenta}></Route>
            <Route exact path='/dashboard' component={Dashboard}></Route>
            <Route exact path="/venta-usuario" component={IngresarVenta}></Route>
            <Route exact path="/abrir-caja" component={AbrirCaja}></Route>
            <Route exact path="/cerrar-caja" component={CerrarCaja}></Route>
            <Route exact path="/anular-venta" component={AnularVentaUsuario}></Route>
            <Route exact path='/general-stock' component={GeneralStock}></Route>
            <Route exact path='/crear-sku' component={CrearProducto}></Route>
            <Route exact path='/listar-facturas' component={ListarFacturas}></Route>
            <Route exact path='/editar-factura/:index' component={EditarFactura}></Route>
            <Route exact path='/ingresar-factura' component={IngresarNuevaFactura}></Route>
            <Route exact path="/listado-usuarios" component={ListadoUsuarios}></Route>
            <Route exact path="/crear-usuario" component={CreateUser}></Route>
            <Route exact path="/modificar-usuario/:index" component={ModificarUsuario}></Route>
            <Route exact path="/empresas" component={Empresas}></Route>
            <Route exact path="/crear-empresa" component={CrearEmpresa}></Route>
            <Route exact path="/empresas/:index" component={EditarEmpresa}></Route>
            <Route exact path="/crear-proveedor" component={CrearProveedor}></Route>
            <Route exact path="/listar-proveedores" component={ListarProveedores}></Route>
            <Route exact path="/modificar-proveedor/:index" component={ModificarProveedor}></Route>
            <Route exact path="/listar-categorias" component={ListarCategorias}></Route>
            <Route exact path="/crear-categoria" component={CrearCategoria}></Route>
            <Route exact path="/modificar-categoria/:index" component={ModificarCategoria}></Route>
            <Route exact path="/modificar-producto/" component={ModificarProducto}></Route>            

            {/* <Route component={NotFound} /> */}


            {/* END Users Components */}
            <Footer />
     
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default injectContext(App);
