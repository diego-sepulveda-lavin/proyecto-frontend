import React from "react"
import { Link } from "react-router-dom";

const MenuLateral = props => {
    return (
        <div className="sidebar" data-color="orange">
            {/* <!--Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"--> */}
            <div className="logo">
                <a href="#" className="simple-text logo-mini">
                    CT
            </a>
                <a href="#" className="simple-text logo-normal">
                    DHSL
            </a>
            </div>
            <div className="sidebar-wrapper" id="sidebar-wrapper">
                <ul className="nav">
                    <li className="active ">
                        <Link to={"/dashboard"}>
                            <i className="now-ui-icons design_app"></i>
                            <p>Dashboard</p>
                        </Link>
                    </li>
                    <li className="active-pro">
                        <Link>
                            <i className="now-ui-icons text_caps-small"></i>
                            <p data-toggle="collapse" data-target="#ventas">Ventas</p>
                        </Link>

                        <div id="ventas" class="collapse">                            
                            <li className="ml-5 mt-2"><Link to={"/venta-usuario"}><p>Ingresar Ventas</p></Link></li>
                            <li className="ml-5 mt-2"><Link to={"/abrir-caja"}><p>Abrir Caja</p></Link></li>
                            <li className="ml-5 mt-2"><Link to={"/cerrar-Caja"}><p>Cierre de Caja</p></Link></li>
                            <li className="ml-5 mt-2"><Link to={"/anular-Venta"}><p>Anular Venta</p></Link></li>                          
                        </div>
                    </li>
                    <li>
                        <Link>
                            <i className="now-ui-icons location_map-big"></i>
                            <p data-toggle="collapse" data-target="#stock">Stock</p>
                        </Link>
                        <div id="stock" class="collapse">                            
                            <li className="ml-5 mt-2"><Link to={"/general-stock"}><p>Ver Inventario</p></Link></li>
                            <li className="ml-5 mt-2"><Link to={"/crear-sku"}><p>Crear SKU</p></Link></li>
                            <li className="ml-5 mt-2"><Link to={"/modificar-sku"}><p>Modificar SKU</p></Link></li>
                            <li className="ml-5 mt-2"><Link to={"/ingresar-factura"}><p>Ingresar Factura</p></Link></li>                          
                        </div>
                    </li>
                    <li>
                        <Link>
                            <i className="now-ui-icons ui-1_bell-53"></i>
                            <p data-toggle="collapse" data-target="#administrador">Administrador</p>
                        </Link>
                        
                        <div id="administrador" class="collapse">                            
                            <li className="ml-5 mt-2"><Link to={"/listado-Usuarios"}><p>Ver Usuarios</p></Link></li>
                            <li className="ml-5 mt-2"><Link to={"/create-user"}><p>Crear Usuarios</p></Link></li>  
                            <li className="ml-5 mt-2"><Link to={"/modificar-user"}><p>Modificar Usuarios</p></Link></li>                    
                        </div>
                    </li>
                    <li>
                        <Link>
                            <i className="now-ui-icons objects_spaceship"></i>
                            <p data-toggle="collapse" data-target="#administrador-global">Administrador Global</p>
                        </Link>
                        
                        <div id="administrador-global" class="collapse">                            
                            <li className="ml-5 mt-2"><Link to={"/empresas"}><p>Ver Empresas</p></Link></li>
                            <li className="ml-5 mt-2"><Link to={"/crear-empresa"}><p>Crear Empresa</p></Link></li>   
                        </div>
                    </li>
                   
                   {/*  <li>
                        <a href="./typography.html">
                            <i className="now-ui-icons text_caps-small"></i>
                            <p>Typography</p>
                        </a>
                    </li> */}
                  
                </ul>
            </div>
        </div>
    )
}

export default MenuLateral;