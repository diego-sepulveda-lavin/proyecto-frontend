import React, { useContext } from 'react';
import { Context } from '../store/appContext';
const CreateUser = () => {

    const { store, actions } = useContext(Context)




    return (
        <>
            <form id="creacionUsuario" onSubmit={actions.enviarFormulario}>
                <div className="panel-header panel-header-md">
                    {/* <canvas id="bigDashboardChart"></canvas> */}
                    <h2 className="text-warning text-center">Administracion</h2>
                    <h3 className="text-info text-center">Crear Usuario</h3>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-lg-12">
                            <form>
                                <div className="card card-chart">
                                    <div className="card-header">


                                        <div className="row d-flex justify-content-around my-4">
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
                                        <div className="row">
                                            <div className="col-md-4 d-flex justify-content-center">
                                                <img className="rounded-circle img-fluid img-raised" style={{ height: "350px" }} 
                                                src={store.imageURL!==null? store.imageURL: "../user-icon-vector.jpg"}></img>

                                            </div>
                                            <div className="col-md-8">
                                                <div className="row">
                                                    <div className="input-group col-md-12">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Nombre</span>
                                                        </div>
                                                        <input type="text" name="nombre" class="form-control" onChange={e => actions.getDataUsuario(e)} value={store.creacionUsuario.nombre} />
                                                    </div>
                                                    <div className="input-group col-md-12">

                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Apellido</span>
                                                        </div>
                                                        <input type="text" name="apellido" class="form-control" onChange={e => actions.getDataUsuario(e)} value={store.creacionUsuario.apellido} />
                                                    </div>
                                                    <div className="input-group col-md-12">

                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">RUT</span>
                                                        </div>
                                                        <input type="text" name="rut" class="form-control" placeholder="17355681-2" onChange={e => actions.getDataUsuario(e)} value={store.creacionUsuario.rut} />
                                                    </div>
                                                    <div className="input-group col-md-12">

                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Email</span>
                                                        </div>
                                                        <input type="email" name="email" class="form-control" onChange={e => actions.getDataUsuario(e)} value={store.creacionUsuario.email} />
                                                    </div>
                                                    <div className="input-group col-md-12">

                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Rol</span>
                                                        </div>
                                                        <input type="text" name="rol" class="form-control" onChange={e =>actions. getDataUsuario(e)} value={store.creacionUsuario.rol} />
                                                    </div>
                                                    <div className="input-group col-md-12">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Password</span>
                                                        </div>
                                                        <input type="password" name="password" class="form-control" onChange={e => actions.getDataUsuario(e)} value={store.creacionUsuario.password} />
                                                    </div>
                                                    <div className="input-group col-md-12">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Confirmación Password</span>
                                                        </div>
                                                        <input type="password" name="repassword" class="form-control" onChange={e => actions.getDataUsuario(e)} value={store.creacionUsuario.repassword} />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-5 offset-md-5">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" name="foto" onChange={e => actions.getDataUsuarioFoto(e)} />
                                                        <label class="custom-file-label" for="inputGroupFile03">File</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card-footer d-flex justify-content-end">
                                        <button class="btn btn-success ">Crear Usuario</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default CreateUser;
