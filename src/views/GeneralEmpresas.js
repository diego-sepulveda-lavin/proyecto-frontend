import React from 'react';

const Empresas = () => {
    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Empresas</h1>
                <h3 className="text-info text-center">Listado General</h3>
            </div>
            <div className="content mt-2">
                <div className="row ">
                    <div className="col-md-8 ">
                        <form>
                            <div className="input-group no-border " >
                                <input type="text" defaultValue="" className="form-control bg-light" placeholder="Buscar Empresa" />
                                <div className="input-group-append">
                                    <div className="input-group-text bg-light">
                                        <i className="now-ui-icons ui-1_zoom-bold"></i>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className=" col-md-4 p-0 mb-1 d-flex justify-content-center">
                        <div class="form-check ml-3">
                            <label class="form-check-label p-0 align-middle " for="exampleRadios1">Nombre</label>
                            <input class="ml-1 mr-3 align-middle" type="radio" name="exampleRadios" id="exampleRadios1"></input>
                            <label class="form-check-label align-middle " for="exampleRadios2">RUT</label>
                            <input class="ml-1 mr-3 align-middle" type="radio" name="exampleRadios" id="exampleRadios2"></input>
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
                                                Razón Social
                                                    </th>
                                            <th className="align-middle text-center">
                                                Rubro
                                                    </th>
                                            <th className="align-middle text-center">
                                                Editar
                                                    </th>
                                            <th className="align-middle text-center">
                                                Eliminar
                                                    </th>
                                        </thead>
                                        <tbody>
                                            <tr >
                                                <td className="align-middle text-center">
                                                    Coca Cola Andina
                                                        </td>
                                                <td className="align-middle text-center">
                                                    96.783.569-9
                                                        </td>
                                                <td className="align-middle text-center">
                                                    Coca Cola Andina S.A.
                                                        </td>
                                                <td className="align-middle text-center">
                                                    Bebidas
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
                                            <tr >
                                                <td className="align-middle text-center">
                                                    Coca Cola Andina
                                                        </td>
                                                <td className="align-middle text-center">
                                                    96.783.569-9
                                                        </td>
                                                <td className="align-middle text-center">
                                                    Coca Cola Andina S.A.
                                                        </td>
                                                <td className="align-middle text-center">
                                                    Bebidas
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
export default Empresas;