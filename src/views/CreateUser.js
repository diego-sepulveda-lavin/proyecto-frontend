import React from 'react';
const CreateUser = () => {
    return (
        <>
            <div className="panel-header panel-header-md">
                {/* <canvas id="bigDashboardChart"></canvas> */}
                <h2 className="text-warning text-center">Administracion</h2>
                <h3 className="text-info text-center">Crear Usuario</h3>
            </div>
            <div className="content">
                <div className="row">
                    <div className="col-lg-12">
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
                                        <img className="rounded-circle img-fluid img-raised" style={{height: "350px"}} src="https://picsum.photos/id/237/300/300"></img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="input-group col-md-12">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Nombre</span>
                                                </div>
                                                <input type="text" aria-label="First name" class="form-control" placeholder="aqui va el nombre" />
                                            </div>
                                            <div className="input-group col-md-12">

                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Apellido</span>
                                                </div>
                                                <input type="text" aria-label="First name" class="form-control" placeholder="aqui va el Apellido" />
                                            </div>
                                            <div className="input-group col-md-12">

                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">RUT</span>
                                                </div>
                                                <input type="text" aria-label="First name" class="form-control" placeholder="RUT" />
                                            </div>
                                            <div className="input-group col-md-12">

                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Email</span>
                                                </div>
                                                <input type="email" aria-label="First name" class="form-control" placeholder="RUT" />
                                            </div>
                                            <div className="input-group col-md-12">

                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Rol</span>
                                                </div>
                                                <input type="text" aria-label="First name" class="form-control" placeholder="PUESTO" />
                                            </div>
                                            <div className="input-group col-md-12">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Password</span>
                                                </div>
                                                <input type="password" aria-label="First name" class="form-control" placeholder="RUT" />
                                            </div>
                                            <div className="input-group col-md-12">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Confirmación Password</span>
                                                </div>
                                                <input type="password" aria-label="First name" class="form-control" placeholder="RUT" />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card-footer d-flex justify-content-end">
                                <button type="button" class="btn btn-success ">Crear Usuario</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateUser;
