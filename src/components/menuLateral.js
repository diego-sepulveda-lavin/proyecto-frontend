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
                            <i className="now-ui-icons business_chart-bar-32"></i>
                            <p>Dashboard<p style={{ "color": "green", "fontSize": "10px", "display": "inline-block", "marginLeft": "5px", "fontWeight": "bold" }}>Soon</p></p>
                        </Link>
                    </li>
                    {/* --- o --- */}
                    <li className={
                        props.location.pathname === "/venta-usuario" ||
                            props.location.pathname === "/abrir-caja" ||
                            props.location.pathname === "/cerrar-caja" ||
                            props.location.pathname === "/cerrar-venta" ||
                            props.location.pathname === "/anular-venta" ? "active" : ""}>
                        <Link to="#">
                            <i className="now-ui-icons business_money-coins"></i>
                            <p data-toggle="collapse" data-target="#ventas">Ventas</p>
                        </Link>
                        <div id="ventas" className="collapse">
                            <ul className="p-0" style={{ "listStyleType": "none" }}>
                                <li className="ml-5 mt-2"><Link to={"/venta-usuario"}><p>Ingresar Ventas</p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"#"}><p>Anular Venta<p style={{ "color": "green", "fontSize": "10px", "display": "inline-block", "marginLeft": "5px", "fontWeight": "bold" }}>Soon</p></p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"/abrir-caja"}><p>Abrir Caja</p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"#"}><p>Cierre de Caja<p style={{ "color": "green", "fontSize": "10px", "display": "inline-block", "marginLeft": "5px", "fontWeight": "bold" }}>Soon</p></p></Link></li>
                            </ul>
                        </div>
                    </li>
                    {/* --- o --- */}
                    <li className={
                        props.location.pathname === "/listar-categorias" ||
                            props.location.pathname === "/crear-categoria" ||
                            props.location.pathname === "/modificar-categoria" ? "active" : ""}>
                        <Link to="#">
                            <i className="now-ui-icons files_paper"></i>
                            <p data-toggle="collapse" data-target="#categoria">Categoria</p>
                        </Link>
                        <div id="categoria" className="collapse">
                            <ul className="p-0" style={{ "listStyleType": "none" }}>
                                <li className="ml-5 mt-2"><Link to={"/listar-categorias"}><p>Ver Categorias</p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"/crear-categoria"}><p>Crear Categoria</p></Link></li>
                                {/* <li className="ml-5 mt-2"><Link to={"/modificar-categoria"}><p>Modificar Categoria</p></Link></li> */}
                            </ul>
                        </div>
                    </li>
                    {/* --- o --- */}
                    <li className={
                        props.location.pathname === "/general-stock" ||
                            props.location.pathname === "/crear-sku" ||
                            props.location.pathname === "/modificar-producto" ? "active" : ""}>
                        <Link to="#">
                            <i className="now-ui-icons shopping_basket"></i>
                            <p data-toggle="collapse" data-target="#stock">Stock</p>
                        </Link>
                        <div id="stock" className="collapse">
                            <ul className="p-0" style={{ "listStyleType": "none" }}>
                                <li className="ml-5 mt-2"><Link to={"/general-stock"}><p>Ver Inventario</p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"/crear-sku"}><p>Crear Producto</p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"/modificar-producto"}><p>Modificar Producto</p></Link></li>

                            </ul>
                        </div>
                    </li>
                    {/* --- o --- */}
                    <li className={
                        props.location.pathname === "/ingresar-factura" ||
                            props.location.pathname === "/listar-facturas" ? "active" : ""}>
                        <Link to="#">
                            <i className="now-ui-icons files_single-copy-04"></i>
                            <p data-toggle="collapse" data-target="#factura">Facturas</p>
                        </Link>
                        <div id="factura" className="collapse">
                            <ul className="p-0" style={{ "listStyleType": "none" }}>
                                <li className="ml-5 mt-2"><Link to={"/listar-facturas"}><p>Listar Facturas</p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"/ingresar-factura"}><p>Ingresar Factura</p></Link></li>
                            </ul>
                        </div>
                    </li>
                    {/* --- o --- */}
                    <li className={
                        props.location.pathname === "/listar-proveedores" ||
                            props.location.pathname === "/crear-proveedor" ? "active" : ""}>
                        <Link to="#">
                            <i className="now-ui-icons shopping_delivery-fast"></i>
                            <p data-toggle="collapse" data-target="#proveedores">Proveedores</p>
                        </Link>
                        <div id="proveedores" className="collapse">
                            <ul className="p-0" style={{ "listStyleType": "none" }}>
                                <li className="ml-5 mt-2"><Link to={"/listar-proveedores"}><p>Ver Proveedores</p></Link></li>
                                <li className="ml-5 mt-2"><Link to={"/crear-proveedor"}><p>Crear Proveedor</p></Link></li>
                            </ul>
                        </div>
                    </li>
                    {/* --- o --- */}
                    <li className={
                        props.location.pathname === "/listado-usuarios" ||
                            props.location.pathname === "/crear-usuario" ||
                            props.location.pathname === "/modificar-usuario" ? "active" : ""}>
                        <Link to="#">
                            <i className="now-ui-icons ui-2_settings-90"></i>
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
                    {/* --- o --- */}
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
                    {/* --- o --- */}
                </ul>
            </div>
        </div>
    )
}

export default withRouter(MenuLateral);