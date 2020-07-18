import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link, withRouter } from 'react-router-dom';

const Empresas = (props) => {

    const {store, actions} = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)   
        actions.getFetch("/empresas/")  
    }, [])


    const deleteEmpresas = (e) => {
        if (store.usuarios != null) {
            console.log(e.target.id)
            let empresasConUsuarios = store.usuarios.filter(usuarios => usuarios.empresa_id === store.empresas[`${e.target.id}`].id)
            if (empresasConUsuarios.length > 0) {
                alert("Empresa tiene usuarios registrados")
            } else {
                console.log(store.empresas[`${e.target.id}`].id)
                let idEmpresa = store.empresas[`${e.target.id}`].id
                let requestOptions = {
                    method: 'DELETE',
                    redirect: 'follow'
                };
                fetch(`http://localhost:5000/api/empresas/${idEmpresa}`, requestOptions)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .then(result => actions.getEmpresas())
                    .catch(error => console.log('error', error));

                alert("Empresa eliminada exitosamente")
            }
        }
    }



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
                        <div className="form-check ml-3">
                            <label className="form-check-label p-0 align-middle " for="exampleRadios1">Nombre</label>
                            <input className="ml-1 mr-3 align-middle" type="radio" name="exampleRadios" id="exampleRadios1"></input>
                            <label className="form-check-label align-middle " for="exampleRadios2">RUT</label>
                            <input className="ml-1 mr-3 align-middle" type="radio" name="exampleRadios" id="exampleRadios2"></input>
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
                                            {
                                                store.empresas !== null ?
                                                    (
                                                        store.empresas.map((elem, index, arr) => {
                                                            return (
                                                                <>
                                                                    <tr>
                                                                        <td className="align-middle text-center">
                                                                            {elem.nombre}
                                                                        </td>
                                                                        <td className="align-middle text-center">
                                                                            {elem.rut}
                                                                        </td>
                                                                        <td className="align-middle text-center">
                                                                            {elem.razon_social}
                                                                        </td>
                                                                        <td className="align-middle text-center">
                                                                            {elem.rubro}
                                                                        </td>

                                                                        <td className="align-middle text-center">
                                                                            <Link to={`/empresas/${index}`}>
                                                                                <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Editar?">
                                                                                    <i className="now-ui-icons ui-2_settings-90"></i>
                                                                                </button>
                                                                            </Link>
                                                                        </td>
                                                                        <td className="align-middle text-center">
                                                                            <button onClick={deleteEmpresas} id={index} type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral">
                                                                               X
                                                                            </button>
                                                                        </td>

                                                                    </tr>
                                                                </>
                                                            )
                                                        })

                                                    ) : (
                                                        <tr className="align-middle text-center">
                                                            <th colspan="6">No hay empresas registradas</th>
                                                        </tr>
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
export default withRouter(Empresas);