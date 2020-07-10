import React from 'react';
import '../css/now-ui-dashboard.css'
import Footer from '../components/footer';
import MenuLateral from '../components/menuLateral';
import NavBar from '../components/navBar';

const ListadoUsuarios = () => {
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
                                <input type="text" defaultValue="" className="form-control bg-light" placeholder="Buscar Usuario" />
                                <div className="input-group-append">
                                    <div className="input-group-text bg-light">
                                        <i className="now-ui-icons ui-1_zoom-bold"></i>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className=" col-md-6 p-0 mb-1">
                        <div class="form-check ml-3">
                            <label class="form-check-label p-0 align-middle " for="exampleRadios1">Nombre</label>
                            <input class="ml-1 mr-3 align-middle" type="radio" name="exampleRadios" id="exampleRadios1"></input>
                            <label class="form-check-label align-middle " for="exampleRadios2">RUT</label>
                            <input class="ml-1 mr-3 align-middle" type="radio" name="exampleRadios" id="exampleRadios2"></input>
                            <label class="form-check-label align-middle" for="exampleRadios3">User ID</label>
                            <input class="ml-1 mr-3 align-middle" type="radio" name="exampleRadios" id="exampleRadios3"></input>
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
                                                User ID
                                                    </th>
                                            <th className="align-middle text-center">
                                                Puesto
                                                    </th>
                                            <th className="align-middle text-center">
                                                Fecha de Registro
                                                    </th>
                                            <th className="align-middle text-center">
                                                Activo
                                                    </th>
                                        </thead>
                                        <tbody>
                                            <tr >
                                                <td className="align-middle text-center">
                                                    Leonardo
                                                        </td>
                                                <td className="align-middle text-center">
                                                    Parra
                                                        </td>
                                                <td className="align-middle text-center">
                                                    17.668.976-3
                                                        </td>
                                                <td className="align-middle text-center">
                                                    Parr001
                                                        </td>
                                                <td className="align-middle text-center">
                                                    CFO
                                                        </td>
                                                <td className="align-middle text-center">
                                                    10/07/2020
                                                        </td>
                                                <td className="align-middle text-center">
                                                    Si
                                                        </td>
                                                <td className="align-middle text-center">
                                                    <button type="button" rel="tooltip" title="" class="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Editar?">
                                                        <i class="now-ui-icons ui-2_settings-90"></i>
                                                    </button>
                                                </td>
                                                <td className="align-middle text-center">
                                                    <button type="button" rel="tooltip" title="" class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?">
                                                        <i className="now-ui-icons ui-1_simple-remove"></i>
                                                    </button>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td className="align-middle text-center">
                                                    Mister
                                                        </td>
                                                <td className="align-middle text-center">
                                                    L
                                                        </td>
                                                <td className="align-middle text-center">
                                                    17-346-888-0
                                                        </td>
                                                <td className="align-middle text-center">
                                                    MrL007
                                                        </td>
                                                <td className="align-middle text-center">
                                                    CSS especialist
                                                        </td>
                                                <td className="align-middle text-center">
                                                    10/07/2020
                                                        </td>
                                                <td className="align-middle text-center">
                                                    Si
                                                        </td>
                                                <td className="align-middle text-center">
                                                    <button type="button" rel="tooltip" title="" class="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Editar?">
                                                        <i class="now-ui-icons ui-2_settings-90"></i>
                                                    </button>
                                                </td>
                                                <td className="align-middle text-center">
                                                    <button type="button" rel="tooltip" title="" class="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?">
                                                        <i className="now-ui-icons ui-1_simple-remove"></i>
                                                    </button>
                                                </td>
                                            </tr>
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
export default ListadoUsuarios;