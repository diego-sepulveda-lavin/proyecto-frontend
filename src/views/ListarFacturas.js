import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { withRouter, Link } from 'react-router-dom';


const ListarFacturas = (props) => {
    const { store, actions } = useContext(Context)
    const [state, setState] = useState({
        inputBuscador: "",
        buscarPor: "folio"
    })
    const seleccionadorBuscador = e => {
        let data = {
            buscarPor: e.target.value
        }
        setState((prevState) => {
            return { ...prevState, ...data }
        })
    }
    const inputBuscador = e => {
        let data = { inputBuscador: e.target.value }
        setState((prevState) => {
            return { ...prevState, ...data }
        })
    }

    useEffect(() => {
        actions.validaLogin(props)
    }, [])

    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Stock</h1>
                <h3 className="text-info text-center">Ver Facturas</h3>
            </div>
            <div className="content mt-2">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="input-group no-border " >
                                <input type="text" defaultValue="" className="form-control bg-light" placeholder="Buscar Factura" onChange={e => inputBuscador(e)} />
                                <div className="input-group-append">
                                    <div className="input-group-text bg-light">
                                        <i className="now-ui-icons ui-1_zoom-bold"></i>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className=" col-md-6 p-0 mb-1">
                        <div className="form-check ml-3">
                            <label className="form-check-label p-0 align-middle " for="exampleRadios1">Folio</label>
                            <input className="ml-1 mr-3 align-middle" defaultChecked type="radio" name="OpcionBuscador" id="rFolio" value="folio" onClick={e => seleccionadorBuscador(e)}></input>
                            <label className="form-check-label align-middle " for="exampleRadios2">Proveedor</label>
                            <input className="ml-1 mr-3 align-middle" type="radio" name="OpcionBuscador" id="rProveedor" value="proveedor" onClick={e => seleccionadorBuscador(e)}></input>
                        </div>

                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover" >
                                        <thead className=" text-primary ">
                                            <th className="align-middle text-center">
                                                Folio
                                                    </th>
                                            <th className="align-middle text-center">
                                                Fecha de emisión
                                                    </th>
                                            <th className="align-middle text-center">
                                                Fecha de recepción
                                                    </th>
                                            <th className="align-middle text-center">
                                                Monto Neto
                                                    </th>
                                            <th className="align-middle text-center">
                                                IVA
                                                    </th>
                                            <th className="align-middle text-center">
                                                Otros Impuestos
                                                    </th>
                                            <th className="align-middle text-center">
                                                Monto Total
                                                    </th>
                                            <th className="align-middle text-center">
                                                Proveedor
                                                    </th>
                                            <th className="align-middle text-center">
                                                &nbsp;
                                                    </th>
                                        </thead>
                                        <tbody>

                                            {/* 1.- En caso que facturas sea nulo, muestra un spinner, ya que esta cargando la info del back
                                                2.- En caso de que lo que traiga del back sea mayor a 0 lo mapea, sino, no muestra nada porque significa que no hay facturas en la bd*/}
                                            {
                                                store.facturas == null ?
                                                    <tr className="align-middle text-center">
                                                        <th colspan="8"><i className="now-ui-icons loader_refresh spin"></i></th>
                                                    </tr>
                                                    :
                                                    store.facturas.msg ?
                                                        <tr className="align-middle text-center">
                                                            <th colspan="8">No hay Facturas registradas :(</th>
                                                        </tr>
                                                        :
                                                        /* Toda esta zona  */
                                                       
                                                        store.facturas.filter((factura) => {
                                                            if (state.buscarPor == "folio") {
                                                                if (state.inputBuscador == "") return factura.folio
                                                                else {
                                                                    //Busco por el folio en concreto o parecidos?
                                                                    return factura.folio >= state.inputBuscador
                                                                }
                                                            }
                                                            if (state.buscarPor == "proveedor") {
                                                                let [valor] = actions.validaFactura(factura.proveedor_id)
                                                                return valor.toLowerCase().includes(state.inputBuscador.toLowerCase())
                                                            }
                                                        }).map((factura, indice) => {
                                                            return (
                                                                <tr key={indice}>
                                                                    <td className="align-middle text-center">
                                                                        {factura.folio}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        {new Date(factura.fecha_emision).toLocaleString("es-CL", { dateStyle: 'short' })}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        {new Date(factura.fecha_recepcion).toLocaleString("es-CL", { dateStyle: 'short' })}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                    {`${new Intl.NumberFormat("de-DE").format(`${factura.monto_neto}`)}`}
                                                                        
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                    {`${new Intl.NumberFormat("de-DE").format(`${factura.monto_iva}`)}`}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        {factura.monto_otros_impuestos}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                    {`${new Intl.NumberFormat("de-DE").format(`${factura.monto_total}`)}`}
                                                                        
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        {actions.validaFactura(factura.proveedor_id)}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        <Link to={`/editar-factura/${factura.id}`} type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Editar?">
                                                                            <i className="now-ui-icons ui-2_settings-90"></i>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default withRouter(ListarFacturas);