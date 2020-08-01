import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link, withRouter } from 'react-router-dom';

const Empresas = (props) => {

    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)
    }, [])
    const [state, setState] = useState({
        buscador: "",
        buscarPor: "nombre",
        msg: ""
    })



    const getValorBuscador = e => {
        let data = {
            [e.target.name]: e.target.value
        }
        setState(prevState => {
            return { ...prevState, ...data }
        })
    }
    const seleccionadorBuscador = e => {
        let data = {
            [e.target.name]: e.target.value
        }
        setState((prevState) => {
            return { ...prevState, ...data }
        })
    }
    const deleteEmpresas = (id) => {
        actions.deleteFetch("/empresas", id, setState, "Empresa", "empresas");
        //actions.getFetch("/empresas", "empresas");
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
                                <input type="text" name="buscador" className="form-control bg-light" placeholder="Buscar Empresa" onChange={e => getValorBuscador(e)} />
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
                            <label className="form-check-label p-0 align-middle" for="exampleRadios1">Nombre</label>
                            <input className="ml-1 mr-3 align-middle" defaultChecked type="radio" name="buscarPor" value="nombre" onClick={seleccionadorBuscador}></input>
                            <label className="form-check-label align-middle " for="exampleRadios2">RUT</label>
                            <input className="ml-1 mr-3 align-middle" type="radio" name="buscarPor" value="rut" onClick={seleccionadorBuscador} ></input>
                        </div>

                    </div>
                    <div className="col-md-12">
                        <div className="card">

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
                                                &nbsp;
                                                    </th>
                                            <th className="align-middle text-center">
                                                &nbsp;
                                                    </th>
                                        </thead>
                                        <tbody>
                                            {
                                                store.empresas === null ?
                                                    (<tr className="align-middle text-center">
                                                        <th colspan="8"><i className="now-ui-icons loader_refresh spin"></i></th>
                                                    </tr>)
                                                    :


                                                    
                                                    store.empresas.msg ?
                                                        (<tr className="align-middle text-center">
                                                            <th colspan="6">No hay empresas registradas :(</th>
                                                        </tr>)
                                                        :
                                                        (
                                                            store.empresas.filter((empresa) => {
                                                                if (state.buscarPor === "nombre")
                                                                    return empresa.nombre.toLowerCase().includes(state.buscador)

                                                                if (state.buscarPor === "rut")
                                                                    return empresa.rut.includes(state.buscador)

                                                            }).map((empresa, indice,) => {
                                                                return (
                                                                    <>
                                                                        <tr key={indice}>
                                                                            <td className="align-middle text-center">
                                                                                {empresa.nombre}
                                                                            </td>
                                                                            <td className="align-middle text-center">
                                                                                {empresa.rut}
                                                                            </td>
                                                                            <td className="align-middle text-center">
                                                                                {empresa.razon_social}
                                                                            </td>
                                                                            <td className="align-middle text-center">
                                                                                {empresa.rubro}
                                                                            </td>

                                                                            <td className="align-middle text-center">

                                                                                <Link to={`/empresas/${empresa.id}`} type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral">
                                                                                    <i className="now-ui-icons ui-2_settings-90"></i>

                                                                                </Link>
                                                                            </td>
                                                                            <td className="align-middle text-center">

                                                                                <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?">
                                                                                    <i className="now-ui-icons ui-1_simple-remove" onClick={() => deleteEmpresas(empresa.id)}></i>
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                                    </>
                                                                )
                                                            })
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