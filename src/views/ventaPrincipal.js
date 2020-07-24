import React, { useContext, useEffect } from 'react';
import "../css/ventaPrincipal.css";
import { Link, withRouter } from 'react-router-dom';
import { Context } from '../store/appContext';

const VentaUsuario = (props) => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)
    }, [])

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
                            <div className="card-header d-flex justify-content-center">
                                <h4 className="card-title"><input type="text" placeholder="Buscar Producto" className="border-1" /></h4>
                            </div>

                            <div className="card-body productos">
                                <div className="chart-area">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th className="align-middle text-center font-weight-bold" scope="col">#</th>
                                                <th className="align-middle text-center font-weight-bold" scope="col">Producto</th>
                                                <th className="align-middle text-center font-weight-bold" scope="col">Precio Unitario</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th className="align-middle text-center" scope="row">1</th>
                                                <td className="align-middle text-center">Super Ocho</td>
                                                <td className="align-middle text-center">100</td>
                                            </tr>
                                            <tr>
                                                <th className="align-middle text-center" scope="row">2</th>
                                                <td className="align-middle text-center">Chocman</td>
                                                <td className="align-middle text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th className="align-middle text-center" scope="row">3</th>
                                                <td className="align-middle text-center">Negrita</td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th className="align-middle text-center" scope="row">4</th>
                                                <td className="align-middle text-center">Prestigio</td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th className="align-middle text-center" scope="row">5</th>
                                                <td className="align-middle text-center">
                                                    Chocapic
                                                </td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th className="align-middle text-center" scope="row">5</th>
                                                <td className="align-middle text-center">Zucaritas</td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th className="align-middle text-center" scope="row">6</th>
                                                <td className="align-middle text-center">Chocolate Trencito</td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th className="align-middle text-center" scope="row">7</th>
                                                <td className="align-middle text-center">Rolls</td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th className="align-middle text-center" scope="row">8</th>
                                                <td className="align-middle text-center">Chubi</td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th className="align-middle text-center" scope="row">9</th>
                                                <td className="align-middle text-center">Coca Cola</td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th className="align-middle text-center" scope="row">10</th>
                                                <td className="align-middle text-center">Fanta</td>
                                                <td className="text-center">250</td>
                                            </tr>
                                            <tr>
                                                <th className="align-middle text-center" scope="row">11</th>
                                                <td className="align-middle text-center">Sprite</td>
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
                                <h4 className="card-title text-center font-weight-bold">Detalle Productos</h4>
                            </div>
                            <div className="detalleProductos card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th className="align-middle text-center font-weight-bold" scope="col">#</th>
                                            <th className="align-middle text-center font-weight-bold" scope="col">Producto</th>
                                            <th  className="align-middle text-center font-weight-bold" scope="col">Cantidad</th>
                                            <th className="align-middle text-center font-weight-bold" scope="col">Precio Unitario</th>
                                            <th className="align-middle text-center font-weight-bold" scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className="text-center">SuperOcho</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                            <td className="text-center"> <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?">
                                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                            </button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td className="text-center">Chocman</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                            <td className="text-center"> <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?">
                                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                            </button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td className="text-center">Chocolate Trencito</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                            <td className="text-center"> <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?">
                                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                            </button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td className="text-center">Zucaritas</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                            <td className="text-center"> <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?">
                                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                            </button></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td className="text-center">Coca Cola</td>
                                            <td><input type="text" className="border-0 text-center" value="2" /></td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">200</td>
                                            <td className="text-center"> <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?">
                                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                            </button></td>
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
                                <table className="table">
                                    <thead>
                                        <tr className=" table-hover">
                                            <th scope="col">Total Neto</th>
                                            <th scope="col"><input type="text" aria-label="First name" className="form-control" placeholder="Monto Neto" /></th>
                                        </tr>
                                        <tr className=" table-hover">
                                            <th scope="col">IVA 19%</th>
                                            <th scope="col"><input type="text" aria-label="First name" className="form-control" placeholder="IVA" disabled /></th>
                                        </tr>
                                        <tr className=" table-hover">
                                            <th scope="col">Total a pagar</th>
                                            <th scope="col"><input type="text" aria-label="First name" className="form-control" placeholder="Monto a Pagar" /> </th>
                                        </tr>
                                    </thead>
                                </table>
                                <Link to="/cerrar-venta" type="button" className="btn btn-success btn-lg btn-block font-weight-bold">Ir a Pagar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(VentaUsuario);
