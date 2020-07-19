import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { withRouter } from 'react-router-dom';

const ModificarUser = (props) => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)
        actions.getFetchID("/usuarios/" + props.match.params.index, setState, "usuario")
    }, [])

    const [state, setState] = useState({
        codUser: "",
    })
    const [algo, setAlgo] = useState({

    })

    const getDataUsuario = e => {

        let data = {
            [e.target.name]: e.target.value
        }
        setState(prevState => {
            return { ...prevState, ...data }
        })


    }
    const filtro = (e) => {
        if (e.key === "Enter") {
            let data = store.usuarios.filter((usuario) => usuario.codigo == state.codUser)
            setAlgo(prevState => {
                return { ...prevState, ...data }
            })
        }
    }

    return (
        <>
            <div className="panel-header panel-header-md">
                {/* <canvas id="bigDashboardChart"></canvas> */}
                <h1 className="text-warning text-center">Administracion</h1>
                <h3 className="text-info text-center">Modificar Usuario</h3>
            </div>
            <form>
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
                                            <input type="text" aria-label="First name" className="form-control" placeholder="aqui va la fecha" />
                                        </div>
                                        <div className="input-group col-md-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">User ID</span>
                                            </div>
                                            <input name="codUser" type="text" aria-label="First name" className="form-control" placeholder="aqui va el user ID" onChange={e => getDataUsuario(e)} onKeyPress={filtro} />
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
                                        <div className="input-group col-md-2">


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
                                                    <input type="text" aria-label="First name" className="form-control" placeholder="aqui va el nombre" />
                                                </div>
                                                <div className="input-group col-md-12">

                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Apellido</span>
                                                    </div>
                                                    <input type="text" aria-label="First name" className="form-control" placeholder="aqui va el Apellido" />
                                                </div>
                                                <div className="input-group col-md-12">

                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">RUT</span>
                                                    </div>
                                                    <input type="text" aria-label="First name" className="form-control" placeholder="RUT" />
                                                </div>
                                                <div className="input-group col-md-12">

                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Email</span>
                                                    </div>
                                                    <input type="email" aria-label="First name" className="form-control" placeholder="RUT" />
                                                </div>
                                                <div className="input-group col-md-12">

                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Rol</span>
                                                    </div>
                                                    <input type="text" aria-label="First name" className="form-control" placeholder="PUESTO" />
                                                </div>
                                                <div className="input-group col-md-12">

                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Password</span>
                                                    </div>
                                                    <input type="password" aria-label="First name" className="form-control" placeholder="RUT" />
                                                </div>
                                                <div className="input-group col-md-12">

                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Confirme Password</span>
                                                    </div>
                                                    <input type="password" aria-label="First name" className="form-control" placeholder="RUT" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-footer d-flex justify-content-end">
                                    <button type="button" className="btn btn-warning">Modificar Usuario</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default withRouter(ModificarUser);
