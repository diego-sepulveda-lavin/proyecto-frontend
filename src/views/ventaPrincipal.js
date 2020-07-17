import React from 'react';
import "../css/ventaPrincipal.css";
import { Link } from 'react-router-dom';

const VentaUsuario = () => {

    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Ventas</h1>
                <h3 className="text-info text-center">Ingresar Ventas</h3>
            </div>
            <div className="content mt-2">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title"><input type="text" placeholder="Buscar Producto" className="border-0" /></h4>
                            </div>

                            <div className="card-body productos">
                                <div className="chart-area">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Producto</th>
                                                <th scope="col">Precio Unitario</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>SuperOcho</td>
                                                <td className="text-center">100</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Chocamn</td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Chocamn</td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Chocamn</td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Chocamn</td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Chocamn</td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Chocamn</td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Chocamn</td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Chocamn</td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Chocamn</td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Chocamn</td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Chocamn</td>
                                                <td className="text-center">250</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 mb-0">
                        <div className="card card-chart">
                            <div className="card-header">
                                <h4 className="card-title text-center">Detalle Productos</h4>
                            </div>
                            <div className="detalleProductos card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col" className="text-center">Producto</th>
                                            <th scope="col" className="text-center">Cantidad</th>
                                            <th scope="col" className="text-center">Precio Unitario</th>
                                            <th scope="col" className="text-center">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="text-center">SuperOcho</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                            <td className="text-center"> <button type="button" rel="tooltip" title="" class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?">
                                                <i class="now-ui-icons ui-1_simple-remove"></i>
                                            </button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="text-center">SuperOcho</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                            <td className="text-center"> <button type="button" rel="tooltip" title="" class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?">
                                                <i class="now-ui-icons ui-1_simple-remove"></i>
                                            </button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="text-center">SuperOcho</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                            <td className="text-center"> <button type="button" rel="tooltip" title="" class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?">
                                                <i class="now-ui-icons ui-1_simple-remove"></i>
                                            </button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="text-center">SuperOcho</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                            <td className="text-center"> <button type="button" rel="tooltip" title="" class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?">
                                                <i class="now-ui-icons ui-1_simple-remove"></i>
                                            </button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="text-center">SuperOcho</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                            <td className="text-center"> <button type="button" rel="tooltip" title="" class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?">
                                                <i class="now-ui-icons ui-1_simple-remove"></i>
                                            </button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="text-center">SuperOcho</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                            <td className="text-center"> <button type="button" rel="tooltip" title="" class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?">
                                                <i class="now-ui-icons ui-1_simple-remove"></i>
                                            </button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="text-center">SuperOcho</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                            <td className="text-center"> <button type="button" rel="tooltip" title="" class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?">
                                                <i class="now-ui-icons ui-1_simple-remove"></i>
                                            </button></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 md-4 offset-md-7">
                        <div className="card">
                            <div className="card-body">
                                <table class="table">
                                    <thead>
                                        <tr className=" table-hover">
                                            <th scope="col">Total Neto</th>
                                            <th scope="col"><input type="text" aria-label="First name" class="form-control" placeholder="Monto Neto" /></th>
                                        </tr>
                                        <tr className=" table-hover">
                                            <th scope="col">IVA 19%</th>
                                            <th scope="col"><input type="text" aria-label="First name" class="form-control" placeholder="IVA" disabled /></th>
                                        </tr>
                                        <tr className=" table-hover">
                                            <th scope="col">Total a pagar</th>
                                            <th scope="col"><input type="text" aria-label="First name" class="form-control" placeholder="Monto a Pagar" /></th>
                                        </tr>
                                    </thead>
                                </table>
                                <Link to="/cerrar-venta" type="button" class="btn btn-success btn-lg btn-block font-weight-bold">Ir a Pagar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VentaUsuario;
