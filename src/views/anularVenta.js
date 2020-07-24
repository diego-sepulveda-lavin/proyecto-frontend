import React, { useContext, useEffect } from 'react';
import "../css/anularVenta.css";
import { Context } from '../store/appContext';
import { withRouter } from 'react-router-dom';

const AnularVentaUsuario = (props) => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)
    }, [])
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
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <label className="form-check-label p-0" for="exampleRadios1">Boleta</label>
                                        <input className="ml-1 mr-3 align-middle" type="radio" name="exampleRadios" id="exampleRadios1"></input>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <label className="form-check-label p-0 align-middle " for="exampleRadios1">Factura</label>
                                        <input className="ml-1 mr-3 align-middle" type="radio" name="exampleRadios" id="exampleRadios1"></input>
                                    </div>
                                </div>
                                <h5 className="card-title">
                                    <div className="input-group no-border " >
                                        <input type="text" defaultValue="" className="form-control bg-light" placeholder="Buscar Categoría" />
                                        <div className="input-group-append">
                                            <div className="input-group-text bg-light">
                                                <i className="now-ui-icons ui-1_zoom-bold"></i>
                                            </div>
                                        </div>
                                    </div>
                                </h5>
                            </div>
                            <div className="card-body productos">
                                <div className="chart-area">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th className="align-middle text-center font-weight-bold" scope="col">#</th>
                                                <th className="align-middle text-center font-weight-bold" scope="col">N° Documento</th>
                                                <th className="align-middle text-center font-weight-bold" scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th className="align-middle text-center" scope="row">1</th>
                                                <td className="align-middle text-center">55412</td>
                                                <td className="align-middle text-center">100.000</td>
                                            </tr>
                                            <tr>
                                                <th className="align-middle text-center" scope="row">2</th>
                                                <td className="align-middle text-center">5235245</td>
                                                <td className="align-middle text-center">25.000</td>
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
                                    <div className="input-group col-md-5">
                                        <input type="text" aria-label="First name" className="input-group-prepend form-control" placeholder="Documento" />
                                    </div>
                                    <div className="input-group col-md-5">
                                        <input type="text" aria-label="First name" className="input-group-prepend form-control" placeholder="Fecha Emision" />
                                    </div>
                                </div>
                            </div>
                            <div className="detalleProductos card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="align-middle text-center font-weight-bold">#</th>
                                            <th scope="col" className="align-middle text-center font-weight-bold">Producto</th>
                                            <th scope="col" className="align-middle text-center font-weight-bold">Cantidad</th>
                                            <th scope="col" className="align-middle text-center font-weight-bold">Precio Unitario</th>
                                            <th scope="col" className="align-middle text-center font-weight-bold">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="text-center">SuperOcho</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td className="text-center">Chocman</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td className="text-center">Chubi</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td className="text-center">Chocolate Trencito</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td className="text-center">Zucaritas</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td className="text-center">Coca Cola</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td className="text-center">Sprite</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-7 offset-md-5">
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <table className="table">
                                        <thead>
                                            <tr className=" table-hover">
                                                <th scope="col">Total Neto</th>
                                                <th scope="col"><input type="text" aria-label="First name" className="form-control" placeholder="Monto Neto" /></th>
                                            </tr>
                                            <tr className=" table-hover">
                                                <th scope="col">IVA 19%</th>
                                                <th scope="col"><input type="text" aria-label="First name" className="form-control" placeholder="IVA" /></th>
                                            </tr>
                                            <tr className=" table-hover">
                                                <th scope="col">Total a pagar</th>
                                                <th scope="col"><input type="text" aria-label="First name" className="form-control" placeholder="Monto a Pagar" /></th>
                                            </tr>
                                        </thead>
                                    </table>
                                    <button type="button" className="btn btn-danger btn-lg btn-block font-weight-bold">Anular Documento</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(AnularVentaUsuario);
