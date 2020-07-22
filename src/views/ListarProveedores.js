import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { withRouter, Link } from 'react-router-dom';

const ListarProveedores = (props) => {
    const { store, actions } = useContext(Context)
    const [state, setState] = useState({
        inputBuscador: "",
        buscarPor: "rut"
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
                <h1 className="text-warning text-center">Proveedor</h1>
                <h3 className="text-info text-center">Ver Proveedores</h3>
            </div>
            <div className="content mt-2">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="input-group no-border " >
                                <input type="text" defaultValue="" className="form-control bg-light" placeholder="Buscar Usuario" onChange={e => inputBuscador(e)} />
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
                            <label className="form-check-label p-0 align-middle " for="exampleRadios1">RUT</label>
                            <input className="ml-1 mr-3 align-middle" defaultChecked type="radio" name="OpcionBuscador" value="rut" onClick={e => seleccionadorBuscador(e)}></input>
                            <label className="form-check-label align-middle " for="exampleRadios2">Razon Social</label>
                            <input className="ml-1 mr-3 align-middle" type="radio" name="OpcionBuscador" value="razon_social" onClick={e => seleccionadorBuscador(e)}></input>

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
                                                Nombre
                                                    </th>
                                            <th className="align-middle text-center">
                                                RUT
                                                    </th>
                                            <th className="align-middle text-center">
                                                Razon Social
                                                    </th>
                                            <th className="align-middle text-center">
                                                Rubro
                                                    </th>
                                            <th className="align-middle text-center">
                                                Dirección
                                                    </th>
                                            <th className="align-middle text-center">
                                                Cuenta Corriente
                                                    </th>
                                            <th className="align-middle text-center">
                                                Banco
                                                    </th>
                                            <th className="align-middle text-center">
                                                &nbsp;
                                            </th>
                                        </thead>
                                        <tbody>
                                            {
                                                store.proveedores == null ?
                                                    <tr className="align-middle text-center">
                                                        <th colspan="8"><i class="now-ui-icons loader_refresh spin"></i></th>
                                                    </tr>
                                                    :
                                                    store.proveedores.filter((proveedor) => {

                                                        if (state.buscarPor === "rut")
                                                            return proveedor.rut.includes(state.inputBuscador)

                                                        if (state.buscarPor === "razon_social")
                                                            return proveedor.razon_social.toLowerCase().includes(state.inputBuscador.toLowerCase())

                                                    }).map((proveedor, indice) => {
                                                        return (
                                                            <tr key={indice}>
                                                                <td className="align-middle text-center">
                                                                    {proveedor.nombre}
                                                                </td>
                                                                <td className="align-middle text-center">
                                                                    {proveedor.rut}
                                                                </td>
                                                                <td className="align-middle text-center">
                                                                    {proveedor.razon_social}
                                                                </td>
                                                                <td className="align-middle text-center">
                                                                    {proveedor.rubro}
                                                                </td>
                                                                <td className="align-middle text-center">
                                                                    {proveedor.direccion}
                                                                </td>
                                                                <td className="align-middle text-center">
                                                                    {proveedor.cuenta_corriente}
                                                                </td>
                                                                <td className="align-middle text-center">
                                                                    {proveedor.banco}
                                                                </td>
                                                               
                                                                <td className="align-middle text-center">
                                                                    <Link to={`/modificar-proveedor/${proveedor.id}`} type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Editar?">
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
export default withRouter(ListarProveedores);