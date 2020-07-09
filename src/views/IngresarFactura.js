import React from 'react';
import '../css/now-ui-dashboard.css'
import Footer from '../components/footer';
import MenuLateral from '../components/menuLateral';
import NavBar from '../components/navBar';

const IngresarFactura = () => {
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
                        <h3 className="text-info text-center">Ingresar Factura</h3>
                    </div>
                    <div className="content mt-2">
                        <div className="row">

                            <div className="col-md-12">
                                <div className="card">
                                    {/* <div className="card-header">
                                        <h4 className="card-title"> </h4>
                                    </div> */}
                                    <div className="card-body">
                                        <div class="form-group">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead className=" text-primary">
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
                                                            Cantidad
                                                    </th>
                                                        <th>
                                                            Unidad de Entrega
                                                    </th>
                                                        <th>
                                                            Costo Unitario
                                                    </th>
                                                        <th>
                                                            Costo Total
                                                    </th>
                                                        <th>
                                                            Precio de Venta
                                                    </th>
                                                        <th>
                                                            Margen de Contribución
                                                    </th>
                                                        <th>
                                                            Categoría
                                                    </th>

                                                    </thead>
                                                    <tbody>
                                                        <tr>
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
                                                                <input type="text" class="form-control" placeholder="Cantidad" aria-label="Username" aria-describedby="basic-addon1" />
                                                            </td>
                                                            <td>
                                                                Unidad
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" placeholder="Costo Unitario" aria-label="Username" aria-describedby="basic-addon1" />
                                                            </td>
                                                            <td>
                                                                $30.000
                                                            </td>
                                                            <td>
                                                                $400
                                                            </td>
                                                            <td>
                                                                33%
                                                            </td>
                                                            <td>
                                                                Confites
                                                            </td>

                                                        </tr>
                                                        <tr>
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
                                                                <input type="text" class="form-control" placeholder="Cantidad" aria-label="Username" aria-describedby="basic-addon1" />
                                                            </td>
                                                            <td>
                                                                Unidad
                                                            </td>
                                                            <td>
                                                                <input type="text" class="form-control" placeholder="Costo Unitario" aria-label="Username" aria-describedby="basic-addon1" />
                                                            </td>
                                                            <td>
                                                                $360.000
                                                            </td>
                                                            <td>
                                                                $600
                                                            </td>
                                                            <td>
                                                                20%
                                                            </td>
                                                            <td>
                                                                Bebidas
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        
                                        <div className="col-12 d-flex justify-content-end">
                                            <button type="button" class="btn btn-primary mr-3">Agregar línea de producto</button>
                                            <button type="submit" class="btn btn-success">Ingresar Factura</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>

        </>
    )
}
export default IngresarFactura