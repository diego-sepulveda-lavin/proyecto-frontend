import React from 'react';
import '../css/now-ui-dashboard.css'
import Footer from '../components/footer';
import MenuLateral from '../components/menuLateral';
import NavBar from '../components/navBar';

const GeneralStock = () => {
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
                        <h3 className="text-info text-center">Ver Inventario</h3>
                    </div>
                    <div className="content mt-2">
                        <div className="row">
                            <div className=" col-6 ">
                                <form>
                                    <div className="input-group no-border " >
                                        <input type="text" defaultValue="" className="form-control bg-light" placeholder="Buscar producto" />
                                        <div className="input-group-append">
                                            <div className="input-group-text bg-light">
                                                <i className="now-ui-icons ui-1_zoom-bold"></i>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className=" col-6 ">
                                <div class="form-check ml-3">
                                    <label class="form-check-label pl-3 pr-2" for="exampleRadios1">SKU</label>
                                    <input type="radio" aria-label="Radio button for following text input"></input>
                                    <label class="form-check-label pl-3 pr-2" for="exampleRadios1">Descripción</label>
                                    <input type="radio" aria-label="Radio button for following text input"></input>
                                    <label class="form-check-label pl-3 pr-2" for="exampleRadios1">Código de Barras</label>
                                    <input type="radio" aria-label="Radio button for following text input"></input>
                                </div>
                            </div>
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
                                                            100
                                                        </td>
                                                        <td>
                                                            Unidad
                                                        </td>
                                                        <td>
                                                            $300
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
                                                            500
                                                        </td>
                                                        <td>
                                                            Unidad
                                                        </td>
                                                        <td>
                                                            $600
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
export default GeneralStock