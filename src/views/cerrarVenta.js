import React, { useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Context } from "../store/appContext";


const CerrarVenta = props => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)
    }, [])
    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Ventas</h1>
                <h3 className="text-info text-center">Cerrar Venta</h3>
            </div>
            <form>
                <div className="content mt-2">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12  pt-3 pb-3 text-center border ">
                                    <h3 className="mb-0">Resumen Venta</h3>
                                </div>
                                <div className="col-2 mt-3 d-flex justify-content-center">
                                    <h6>Forma de Pago</h6>
                                </div>
                                <div className="col-5 d-flex justify-content-center align-middle text-center">
                                    <div className="form-check m-0 mt-2">
                                        <label className="form-check-label align-middle" for="exampleRadios3">Transferencia</label>
                                        <input className="align-middle ml-1" type="radio" name="formaPago" id="exampleRadios3"></input>

                                        <label className="form-check-label align-middle " for="exampleRadios1">Efectivo</label>
                                        <input className="align-middle ml-1" type="radio" name="formaPago" id="exampleRadios1"></input>

                                        <label className="form-check-label align-middle " for="exampleRadios2">Tarjeta</label>
                                        <input className="align-middle ml-1" type="radio" name="formaPago" id="exampleRadios2"></input>
                                    </div>
                                </div>
                                <div className="col-2  d-flex justify-content-center mt-3">
                                    <h6>Documento</h6>
                                </div>
                                <div className="col-3   d-flex justify-content-center">
                                    <div className="form-check m-0 mt-2 pl-0">
                                        <label className="form-check-label p-0 align-middle pl-0" for="exampleRadios1">Boleta</label>
                                        <input className="ml-1 mr-3 align-middle" type="radio" name="documento" id="exampleRadios1"></input>
                                        <label className="form-check-label align-middle pl-0" for="exampleRadios2">Factura</label>
                                        <input className="ml-1 mr-3 align-middle" type="radio" name="documento" id="exampleRadios2"></input>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="row border">
                                        <div className="col-6 d-flex justify-content-center pt-2 pb-2 border">
                                            <h5 className="mb-0">Documento N°</h5>
                                        </div>
                                        <div className="col-6 d-flex justify-content-center pt-2 pb-2 border">
                                            <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="Nº documento" disabled />
                                        </div>
                                        <div className="col-6 d-flex justify-content-center pt-2 pb-2 border ">
                                            <h5 className="mb-0">Total Venta</h5>
                                        </div>
                                        <div className="col-6 d-flex justify-content-center pt-2 pb-2 border ">
                                            <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="Total Venta" disabled />
                                        </div>
                                        <div className="col-6 d-flex justify-content-center pt-2 pb-2 border ">
                                            <h5 className="mb-0">Monto recibido</h5>
                                        </div>
                                        <div className="col-6 d-flex justify-content-center pt-2 pb-2 border ">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1" ></span>
                                                </div>
                                                <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="Monto recicido" />
                                            </div>
                                        </div>
                                        <div className="col-6 d-flex justify-content-center pt-2 pb-2 border ">
                                            <h5 className="mb-0">Vuelto</h5>
                                        </div>
                                        <div className="col-6 d-flex justify-content-center pt-2 pb-2 border ">
                                            <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="Nº documento" disabled />
                                        </div>
                                        <div className="col-6 d-flex justify-content-center pt-2 pb-2 border ">
                                            <h5 className="mb-0">¿Envío de documento a correo electrónico?</h5>
                                        </div>
                                        <div className="col-6 d-flex justify-content-center pt-2 pb-2 border ">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1" ></span>
                                                </div>
                                                <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="Ingreso de correo opcional" />
                                            </div>
                                        </div>
                                        <div className="col-6 d-flex justify-content-center pt-2 pb-2">
                                            <Link to="venta-usuario" type="button" className="btn font-weight-bold">Cancelar Venta</Link>
                                        </div>
                                        <div className="col-6 d-flex justify-content-center pt-2 pb-2">
                                            <button type="submit" className="btn btn-success font-weight-bold">Efectuar pago</button>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default withRouter(CerrarVenta);