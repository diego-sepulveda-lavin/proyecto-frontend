import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { withRouter } from 'react-router-dom';

const ModificarUsuarioSinID = (props) => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)


    }, [])

    const [state, setState] = useState({
        usuario: null
    })



    const enviarFormulario = (e) => {
        e.preventDefault();
        actions.putUsuario("/usuarios/" + state.usuario.id, setState, state.usuario)
        //actions.putFetch("/empresas/" + props.match.params.index, setMsg, state.empresa)


    }


    return (
        <>
            <div className="panel-header panel-header-md">
                {/* <canvas id="bigDashboardChart"></canvas> */}
                <h1 className="text-warning text-center">Administracion</h1>
                <h3 className="text-info text-center">Modificar Usuario</h3>
            </div>
            <form onSubmit={enviarFormulario}>
                <div className="content">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-11 offset-md">
                            <div className="card card-chart">
                                <div className="card-header">

                                    <div className="row d-flex justify-content-around">
                                        <div className="input-group col-md-6 ">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Fecha de Registro</span>
                                            </div>
                                            <input type="text" aria-label="First name" className="form-control" placeholder="aqui va la fecha" disabled />
                                        </div>
                                        <div className="input-group col-md-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">User ID</span>
                                            </div>
                                            <input name="codUser" type="text" aria-label="First name" className="form-control" placeholder="aqui va el user ID" />
                                        </div>

                                        <div className="dropdown">
                                            <button type="button" className="btn btn-round btn-outline-default dropdown-toggle btn-simple btn-icon no-caret" data-toggle="dropdown">
                                                <i className="now-ui-icons loader_gear"></i>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <a className="dropdown-item text-danger" href="#">Remove Data</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <div className="input-group col-md-3">

                                            <select className="form-control">
                                                <option value="1" defaultValue>Activo</option>
                                                <option value="2">Inactivo</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4 d-flex justify-content-center">
                                            <img className="rounded-circle img-fluid img-raised" style={{ height: "350px" }} src="https://picsum.photos/id/102/300/300"></img>

                                        </div>
                                        <div className="col-md-8">
                                            <div className="row">
                                                <div className="input-group col-md-12">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Nombre</span>
                                                    </div>
                                                    <input type="text" name="nombre" aria-label="First name" className="form-control" />
                                                </div>
                                                <div className="input-group col-md-12">

                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Apellido</span>
                                                    </div>
                                                    <input type="text" name="apellido" aria-label="First name" className="form-control" />
                                                </div>
                                                <div className="input-group col-md-12">

                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">RUT</span>
                                                    </div>
                                                    <input type="text" name="rut" aria-label="First name" className="form-control" />
                                                </div>
                                                <div className="input-group col-md-12">

                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Email</span>
                                                    </div>
                                                    <input type="email" name="email" aria-label="First name" className="form-control" />
                                                </div>
                                                <div className="input-group col-md-12">

                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Rol</span>
                                                    </div>
                                                    <input type="text" name="rol" aria-label="First name" className="form-control" />
                                                </div>
                                                <div className="input-group col-md-12">

                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Password</span>
                                                    </div>
                                                    <input type="password" name="password" aria-label="First name" className="form-control" />
                                                </div>
                                                <div className="input-group col-md-12">

                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Confirme Password</span>
                                                    </div>
                                                    <input type="password" name="rePassword" aria-label="First name" className="form-control" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-footer d-flex justify-content-end">
                                    <button className="btn btn-warning">Modificar Usuario</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default withRouter(ModificarUsuarioSinID);
