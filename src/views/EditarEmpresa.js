import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { withRouter } from 'react-router-dom';

const EditarEmpresa = (props) => {

    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)
        actions.getFetchID("/empresas/" + props.match.params.index, setState, "empresa")
    }, [])

    const [state, setState] = useState({
        empresa: null

    });

    const [msg, setMsg] = useState({
        msg: ""
    })

    const valorInput = e => {
        let update = {
            [e.target.name]: e.target.value
        }
        let data = {
            empresa: Object.assign(state.empresa, update),
        }
        setState(prevState => {
            return { ...prevState, ...data }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        actions.putFetch("/empresas/" + props.match.params.index, setMsg, state.empresa, "Empresa")
        actions.getFetch("/empresas", "empresas");
    }

    if (state.empresa != null) {

        return (
            <>
                <div className="panel-header panel-header-md">
                    <h1 className="text-warning text-center">Empresas</h1>
                    <h3 className="text-info text-center">Editar Empresa</h3>
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
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={state.empresa.nombre}
                                                                name="nombre"
                                                                aria-describedby="basic-addon1"
                                                                onChange={valorInput}
                                                            />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input

                                                                type="text" className="form-control"
                                                                value={state.empresa.rut}
                                                                name="rut"
                                                                aria-describedby="basic-addon1"
                                                                maxlength="13"
                                                                onChange={valorInput} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={state.empresa.razon_social}
                                                                name="razon_social"
                                                                aria-describedby="basic-addon1"
                                                                onChange={valorInput} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input
                                                                type="text" className="form-control"
                                                                value={state.empresa.rubro}
                                                                name="rubro"
                                                                aria-describedby="basic-addon1"
                                                                onChange={valorInput} />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="col-12 pr-0 d-flex justify-content-end">
                                                <button className="btn btn-primary" name="Editar_Empresa">Editar Empresa</button>
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


export default withRouter(EditarEmpresa);