import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link, withRouter } from 'react-router-dom';

const ModificarProveedor = (props) => {

    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)
        actions.getFetchID("/proveedores/" + props.match.params.index, setState, "proveedor")
    }, [])

    const [state, setState] = useState({
        proveedor: null

    });

    const [msg, setMsg] = useState({
        msg: ""
    })

    const valorInput = e => {
        let update = {
            [e.target.name]: e.target.value
        }
        let data = {
            proveedor: Object.assign(state.proveedor, update)
        }
        setState(data)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.putFetch("/proveedores/" + props.match.params.index, setMsg, state.proveedor, "Proveedor")
        actions.getFetch("/proveedores", "proveedor");
    }

    if (state.proveedor != null) {

        return (
            <>
                <div className="panel-header panel-header-md">
                    <h1 className="text-warning text-center">Proveedores</h1>
                    <h3 className="text-info text-center">Modificar Proveedor</h3>
                </div>
                <div className="content mt-2">
                    <div className="row ">
                        <div className="col-md-12">
                            <form onSubmit={handleSubmit}  >
                                <div className="card">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table" >
                                                <thead className=" text-primary ">
                                                    <th className="align-middle text-center">
                                                        Nombre
                                                        </th>
                                                    <th className="align-middle text-center">
                                                        RUT
                                                        </th>
                                                    <th className="align-middle text-center">
                                                        Razón Social
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
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={state.proveedor.nombre}
                                                                name="nombre"
                                                                aria-describedby="basic-addon1"
                                                                onChange={valorInput}
                                                            />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input

                                                                type="text" className="form-control"
                                                                value={state.proveedor.rut}
                                                                name="rut"
                                                                aria-describedby="basic-addon1"
                                                                onChange={valorInput} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={state.proveedor.razon_social}
                                                                name="razon_social"
                                                                aria-describedby="basic-addon1"
                                                                onChange={valorInput} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input
                                                                type="text" className="form-control"
                                                                value={state.proveedor.rubro}
                                                                name="rubro"
                                                                aria-describedby="basic-addon1"
                                                                onChange={valorInput} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input
                                                                type="text" className="form-control"
                                                                value={state.proveedor.direccion}
                                                                name="direccion"
                                                                aria-describedby="basic-addon1"
                                                                onChange={valorInput} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input
                                                                type="text" className="form-control"
                                                                value={state.proveedor.cuenta_corriente}
                                                                name="cuenta_corriente"
                                                                aria-describedby="basic-addon1"
                                                                onChange={valorInput} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <select className="form-control" name="banco" value={state.proveedor.banco? state.proveedor.banco : ""} onChange={valorInput}>
                                                                <option value="" disabled>Seleccionar</option>
                                                                <option value="Banco de Chile">Banco de Chile</option>
                                                                <option value="Banco Estado">Banco Estado</option>
                                                                <option value="Banco Internacional">Banco Internacional</option>
                                                                <option value="Scotiabank Chile">Scotiabank Chile</option>
                                                                <option value="Banco De Credito e Inversiones">Banco de Credito e Inversiones</option>
                                                                <option value="Banco BICE">Banco BICE</option>
                                                                <option value="HSBC BANK">HSBC BANK</option>
                                                                <option value="Banco Santander Chile">Banco Santander Chile</option>
                                                                <option value="Itaú Corpbanca">Itaú Corpbanca</option>
                                                                <option value="Banco Security">Banco Security</option>
                                                                <option value="Banco Falabella">Banco Falabella</option>
                                                                <option value="Banco Ripley">Banco Ripley</option>
                                                                <option value="Banco Consorcio">Banco Consorcio</option>
                                                                <option value="Scotiabank Azul">Scotiabank Azul</option>
                                                                <option value="Banco BTG Pactual Chile">Banco BTG Pactual Chile</option>
                                                            </select>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="col-12 pr-0 d-flex justify-content-end">
                                                <button className="btn btn-primary" name="Editar_Empresa">Editar Proveedor</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )


    } else {

        return (
            <>
               <i className="now-ui-icons loader_refresh spin"></i>
            </>
        )
    }

}


export default withRouter(ModificarProveedor);