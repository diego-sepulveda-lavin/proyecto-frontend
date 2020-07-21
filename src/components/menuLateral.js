import React from "react"
import { Link, withRouter } from "react-router-dom";

const MenuLateral = props => {
    return (
        <div className="sidebar" data-color="orange">
            {/* <!--Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"--> */}
            <div className="logo">
                <img src="../assets/img/new-logo.png" alt="" />
            </div>
            <div className="sidebar-wrapper" id="sidebar-wrapper">
                <ul className="nav">
                    <li className={props.location.pathname === "/dashboard" ? "active" : ""}>
                        <Link to={"/dashboard"}>
                            <i className="now-ui-icons design_app"></i>
                            <p>Dashboard</p>
                        </Link>
                    </li>
                    <li className={
                        props.location.pathname === "/venta-usuario" ||
                            props.location.pathname === "/abrir-caja" ||
                            props.location.pathname === "/cerrar-caja" ||
                            props.location.pathname === "/cerrar-venta" ||
                            props.location.pathname === "/anular-venta" ? "active" : ""}>
                        <Link to="#">
                            <i className="now-ui-icons text_caps-small"></i>
                            <p data-toggle="collapse" data-target="#ventas">Ventas</p>
                        </Link>

                        <div id="ventas" className="collapse">
                            <ul className="p-0" style={{ "listStyleType": "none" }}>
                                <li className="ml-5 mt-2"><Link to={"/venta-usuario"}><p>Ingresar Ventas</p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"/anular-venta"}><p>Anular Venta</p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"/abrir-caja"}><p>Abrir Caja</p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"/cerrar-caja"}><p>Cierre de Caja</p></Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className={
                        props.location.pathname === "/general-stock" ||
                            props.location.pathname === "/crear-sku" ||
                            props.location.pathname === "/modificar-sku" ||
                            props.location.pathname === "/ingresar-factura" ? "active" : ""}>
                        <Link to="#">
                            <i className="now-ui-icons location_map-big"></i>
                            <p data-toggle="collapse" data-target="#stock">Stock</p>
                        </Link>
                        <div id="stock" className="collapse">
                            <ul className="p-0" style={{ "listStyleType": "none" }}>
                                <li className="ml-5 mt-2"><Link to={"/general-stock"}><p>Ver Inventario</p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"/crear-sku"}><p>Crear Producto</p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"/modificar-sku"}><p>Modificar Producto</p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"/listar-facturas"}><p>Listar Facturas</p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"/ingresar-factura"}><p>Ingresar Factura</p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"/editar-factura"}><p>Editar Factura</p></Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className={
                        props.location.pathname === "/listado-usuarios" ||
                            props.location.pathname === "/crear-usuario" ||
                            props.location.pathname === "/modificar-usuario" ? "active" : ""}>
                        <Link to="#">
                            <i className="now-ui-icons ui-1_bell-53"></i>
                            <p data-toggle="collapse" data-target="#administrador">Administrador</p>
                        </Link>

                        <div id="administrador" className="collapse">
                            <ul className="p-0" style={{ "listStyleType": "none" }}>
                                <li className="ml-5 mt-2"><Link to={"/listado-usuarios"}><p>Ver Usuarios</p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"/crear-usuario"}><p>Crear Usuarios</p></Link></li>
                                {/* <li className="ml-5 mt-2"><Link to={"/modificar-usuario"}><p>Modificar Usuarios</p></Link></li> */}
                            </ul>
                        </div>
                    </li>

                    <li className={
                        props.location.pathname === "/proveedores" ||
                            props.location.pathname === "/crear-proveedor" ? "active" : ""}>
                        <Link to="#">
                            <i className="now-ui-icons objects_spaceship"></i>
                            <p data-toggle="collapse" data-target="#proveedores">Proveedores</p>
                        </Link>

                        <div id="proveedores" className="collapse">
                            <ul className="p-0" style={{ "listStyleType": "none" }}>
                                <li className="ml-5 mt-2"><Link to={"/listar-proveedores"}><p>Ver Proveedores</p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"/crear-proveedor"}><p>Crear Proveedor</p></Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className={
                        props.location.pathname === "/empresas" ||
                            props.location.pathname === "/crear-empresa" ? "active" : ""}>
                        <Link to="#">
                            <i className="now-ui-icons objects_spaceship"></i>
                            <p data-toggle="collapse" data-target="#administrador-global">Administrador Global</p>
                        </Link>

                        <div id="administrador-global" className="collapse">
                            <ul className="p-0" style={{ "listStyleType": "none" }}>
                                <li className="ml-5 mt-2"><Link to={"/empresas"}><p>Ver Empresas</p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"/crear-empresa"}><p>Crear Empresa</p></Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default withRouter(MenuLateral);