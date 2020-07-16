import React from 'react';
import "../css/anularVenta.css";

const AnularVentaUsuario = () => {

    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Ventas</h1>
                <h3 className="text-info text-center">Anular Venta</h3>
            </div>
            <div className="container mt-2">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header">
                                <div className="row d-flex justify-content-start">


                                    <div className="col-md-4">
                                        <label class="form-check-label p-0 align-middle " for="exampleRadios1">Boleta</label>
                                        <input class="ml-1 mr-3 align-middle" type="radio" name="exampleRadios" id="exampleRadios1"></input>
                                    </div>
                                    <div className="col-md-4">


                                        <label class="form-check-label p-0 align-middle " for="exampleRadios1">Factura</label>
                                        <input class="ml-1 mr-3 align-middle" type="radio" name="exampleRadios" id="exampleRadios1"></input>


                                    </div>

                                </div>
                                <h5 className="card-title"><input type="text" placeholder="Buscar Documento" className="border-0" /></h5>
                            </div>

                            <div className="card-body productos">
                                <div className="chart-area">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">N° Documento</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>55412</td>
                                                <td className="text-center">100.000</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>5235245</td>
                                                <td className="text-center">25.000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-7">
                        <div className="card card-chart">
                            <div className="card-header">
                                <div className="row d-flex justify-content-between">
                                    <div className="input-group col-md-4">
                                        <input type="text" aria-label="First name" class="input-group-prepend form-control" placeholder="Documento" />
                                    </div>
                                    <div className="input-group col-md-4">
                                        <input type="text" aria-label="First name" class="input-group-prepend form-control" placeholder="Fecha Emision" />
                                    </div>
                                </div>
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
                                            <td className="text-center"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="text-center">SuperOcho</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                            <td className="text-center"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="text-center">SuperOcho</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                            <td className="text-center"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="text-center">SuperOcho</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                            <td className="text-center"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="text-center">SuperOcho</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                            <td className="text-center"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="text-center">SuperOcho</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                            <td className="text-center"></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="text-center">SuperOcho</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                            <td className="text-center"></td>
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
                                            <th scope="col">Total venta neto</th>
                                            <th scope="col">$10000</th>
                                        </tr>
                                        <tr className=" table-hover">
                                            <th scope="col">IVA 19%</th>
                                            <th scope="col">$10000</th>
                                        </tr>
                                        <div class="dropdown-divider"></div>
                                        <tr className=" table-hover">
                                            <th scope="col">Total a pagar</th>
                                            <th scope="col">$200</th>
                                        </tr>
                                    </thead>
                                </table>
                                <button type="button" class="btn btn-danger btn-lg btn-block font-weight-bold">Anular Documento</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AnularVentaUsuario;
