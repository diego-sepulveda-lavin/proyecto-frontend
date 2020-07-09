import React from 'react';
import '../css/now-ui-dashboard.css'
import Footer from '../components/footer';
import MenuLateral from '../components/menuLateral';
import NavBar from '../components/navBar';

const CrearSku = () => {
    return (
        <>
            <div className="wrapper ">
            <MenuLateral />
            <div className="main-panel" id="main-panel">
                    {/* <!-- Navbar --> */}
                    <NavBar />
                    {/* <!-- End Navbar --> */}
                    <div className="panel-header panel-header-md">
                        <h1 className="text-warning text-center">Stock</h1>
                        <h3 className="text-info text-center">Crear SKU</h3>
                    </div>
                    <div className="content mt-2">
                        <div className="row">
                            
                            <div className="col-md-12">
                                <div className="card">
                                    {/* <div className="card-header">
                                        <h4 className="card-title"> </h4>
                                    </div> */}
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead className=" text-primary">
                                                    <th>
                                                        N°
                                                    </th>
                                                    <th>
                                                        SKU
                                                    </th>
                                                    <th>
                                                        Descripción
                                                    </th>
                                                    <th>
                                                        Código de Barra
                                                    </th>
                                                    
                                                    <th>
                                                        Unidad de Entrega
                                                    </th>
                                                    <th>
                                                        Categoría
                                                    </th>

                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            1
                                                        </td>
                                                        <td>
                                                            651651
                                                        </td>
                                                        <td>
                                                            Super 8
                                                        </td>
                                                        <td>
                                                            6546556
                                                        </td>
                                                        
                                                        <td>
                                                            Unidad
                                                        </td>
                                                        <td>
                                                            Confites
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            2
                                                        </td>
                                                        <td>
                                                            454545
                                                        </td>
                                                        <td>
                                                            Coca Cola 500cc
                                                        </td>
                                                        <td>
                                                            23443
                                                        </td>
                                                        <td>
                                                            Unidad
                                                        </td>
                                                        <td>
                                                            Bebidas
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 d-flex justify-content-end">
                            <button type="button" class="btn btn-success">Crear SKU's</button>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>

        </>
    )
}
export default CrearSku