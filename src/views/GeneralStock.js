import React, { useContext, useEffect, useState } from 'react';
import "../css/ventaPrincipal.css";
import { Context } from '../store/appContext';
import { withRouter, Link } from 'react-router-dom';

const GeneralStock = (props) => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)
    }, [])

    const [state, setState] = useState({
        inputBuscador: "",
        buscarPor: "descripcion"
    })

    const inputBuscador = e => {
        let data = { inputBuscador: e.target.value }
        setState((prevState) => {
            return { ...prevState, ...data }
        })
    }
    const seleccionadorBuscador = e => {
        let data = {
            buscarPor: e.target.value
        }
        setState((prevState) => {
            return { ...prevState, ...data }
        })
    }

    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Stock</h1>
                <h3 className="text-info text-center">Ver Inventario</h3>
            </div>
            <div className="content mt-2">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="input-group no-border " >
                                <input type="text" defaultValue="" className="form-control bg-light" placeholder="Buscar producto" onChange={inputBuscador} />
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
                            <label className="form-check-label align-middle" for="exampleRadios2">Descripción</label>
                            <input className="ml-1 mr-3 align-middle" defaultChecked type="radio" name="opcionBuscador" id="exampleRadios2" onChange={seleccionadorBuscador} value="descripcion"></input>
                            <label className="form-check-label align-middle" for="exampleRadios2">Sku</label>
                            <input className="ml-1 mr-3 align-middle" type="radio" name="opcionBuscador" id="exampleRadios2" onChange={seleccionadorBuscador} value="sku"></input>
                            <label className="form-check-label align-middle" for="exampleRadios2">Codigo de Barra</label>
                            <input className="ml-1 mr-3 align-middle" type="radio" name="opcionBuscador" id="exampleRadios2" onChange={seleccionadorBuscador} value="codigo_barra"></input>

                        </div>

                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            {/* <div className="card-header">
                                        <h4 className="card-title"> </h4>
                                    </div> */}
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover" >
                                        <thead className=" text-primary ">
                                            <th className="align-middle text-center">
                                                SKU
                                                    </th>
                                            <th className="align-middle text-center">
                                                Descripción
                                                    </th>
                                            <th className="align-middle text-center">
                                                Código de Barra
                                                    </th>
                                            <th className="align-middle text-center">
                                                Inventario Disponible
                                                    </th>
                                            <th className="align-middle text-center">
                                                Unidad de Entrega
                                                    </th>

                                            <th className="text-center text-center">
                                                Precio de Venta
                                                    </th>

                                            <th className="align-middle text-center">
                                                Categoría
                                                    </th>
                                            <th className="align-middle text-center">
                                                &nbsp;
                                            </th>

                                        </thead>
                                        <tbody>
                                            {
                                                store.InventarioDisponible == null ?
                                                    <tr className="align-middle text-center">
                                                        <th colspan="8"><i className="now-ui-icons loader_refresh spin"></i></th>
                                                    </tr>
                                                    :
                                                    store.InventarioDisponible.length === 0 ?
                                                        <tr className="align-middle text-center">
                                                            <th colspan="8">No hay Stock :(</th>
                                                        </tr>
                                                        :
                                                        store.InventarioDisponible.filter((e) => {
                                                            if (state.buscarPor === "descripcion")
                                                                return e.descripcion.toLowerCase().includes(state.inputBuscador.toLowerCase())
                                                            if (state.buscarPor === "sku")
                                                                return e.sku.includes(state.inputBuscador)
                                                            if (state.buscarPor === "codigo_barra")
                                                                return e.codigo_barra.toLowerCase().includes(state.inputBuscador.toLowerCase())
                                                        }).map((producto) => {

                                                            return (
                                                                <tr >
                                                                    <td className="align-middle text-center">
                                                                        {producto.sku}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        {producto.descripcion}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        {producto.codigo_barra}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        {producto.inventario_disponible}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        {producto.unidad_entrega}
                                                                    </td>

                                                                    <td className="align-middle text-center">
                                                                        {`${new Intl.NumberFormat("de-DE").format(`${producto.precio_venta_unitario} `)}`}
                                                                    </td>

                                                                    <td className="align-middle text-center">
                                                                        {actions.validaCategoria(producto.categoria_id)}
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
export default withRouter(GeneralStock);