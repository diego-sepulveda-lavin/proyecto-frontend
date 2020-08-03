import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { withRouter, Link } from 'react-router-dom';

const ListadoUsuarios = (props) => {
    const { store, actions } = useContext(Context)
    const [state, setState] = useState({
        inputBuscador: "",
        buscarPor: "nombre"
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
                <h1 className="text-warning text-center">Administrador</h1>
                <h3 className="text-info text-center">Ver Usuarios</h3>
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
                            <label className="form-check-label p-0 align-middle " for="exampleRadios1">Nombre</label>
                            <input className="ml-1 mr-3 align-middle" defaultChecked type="radio" name="OpcionBuscador" id="rNombre" value="nombre" onClick={e => seleccionadorBuscador(e)}></input>
                            <label className="form-check-label align-middle " for="exampleRadios2">RUT</label>
                            <input className="ml-1 mr-3 align-middle" type="radio" name="OpcionBuscador" id="rRut" value="rut" onClick={e => seleccionadorBuscador(e)}></input>
                            <label className="form-check-label align-middle" for="exampleRadios3">Codigo Usuario</label>
                            <input className="ml-1 mr-3 align-middle" type="radio" name="OpcionBuscador" id="rUserid" value="codUsuario" onClick={e => seleccionadorBuscador(e)}></input>
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
                                                Apellido
                                                    </th>
                                            <th className="align-middle text-center">
                                                RUT
                                                    </th>
                                            <th className="align-middle text-center">
                                                Codigo Usuario
                                                    </th>
                                            <th className="align-middle text-center">
                                                Rol
                                                    </th>
                                            <th className="align-middle text-center">
                                                E-mail
                                                    </th>
                                            <th className="align-middle text-center">
                                                Fecha de Registro
                                                    </th>
                                            <th className="align-middle text-center">
                                                Activo
                                                    </th>
                                        </thead>
                                        <tbody>
                                            {
                                                store.usuarios === null ?
                                                    (<tr className="align-middle text-center">
                                                        <th colspan="8"><i className="now-ui-icons loader_refresh spin"></i></th>
                                                    </tr>)
                                                    :
                                                    (
                                                        store.usuarios.msg?
                                                            <tr className="align-middle text-center">
                                                                <th colspan="8">No hay usuarios registrados :(</th>
                                                            </tr>
                                                            :
                                                            (

                                                                store.usuarios.filter((usuario) => {
                                                                    if (state.buscarPor === "nombre")
                                                                        return usuario.nombre.toLowerCase().includes(state.inputBuscador.toLowerCase());

                                                                    if (state.buscarPor === "rut")
                                                                        return usuario.rut.includes(state.inputBuscador)

                                                                    if (state.buscarPor === "codUsuario")
                                                                        return usuario.codigo.includes(state.inputBuscador)
                                                                }).map((usuario, indice) => {
                                                                    return (
                                                                        <>
                                                                            <tr key={indice}>
                                                                                <td className="align-middle text-center">
                                                                                    {usuario.nombre}
                                                                                </td>
                                                                                <td className="align-middle text-center">
                                                                                    {usuario.apellido}
                                                                                </td>
                                                                                <td className="align-middle text-center">
                                                                                    {usuario.rut}
                                                                                </td>
                                                                                <td className="align-middle text-center">
                                                                                    {usuario.codigo}
                                                                                </td>
                                                                                <td className="align-middle text-center">
                                                                                    {usuario.rol}
                                                                                </td>
                                                                                <td className="align-middle text-center">
                                                                                    {usuario.email}
                                                                                </td>
                                                                                <td className="align-middle text-center">
                                                                                    {usuario.fecha_registro}
                                                                                </td>
                                                                                <td className="align-middle text-center">
                                                                                    {usuario.status === true ? "Activo" : "Inactivo"}
                                                                                </td>
                                                                                <td className="align-middle text-center">
                                                                                    <Link to={`/modificar-usuario/${usuario.id}`} type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Editar?">
                                                                                        <i className="now-ui-icons ui-2_settings-90"></i>
                                                                                    </Link>
                                                                                </td>
                                                                            </tr>
                                                                        </>
                                                                    )
                                                                })
                                                            )
                                                    )

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
export default withRouter(ListadoUsuarios);