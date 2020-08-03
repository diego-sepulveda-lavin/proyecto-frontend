import React, { useEffect, useState, useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const ModificarCategoria = (props) => {

    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)
        actions.getFetchID("/categorias/" + props.match.params.index, setState, "categoria")
    }, [])
    const [state, setState] = useState({
        categoria: null,
 
    });

    const [msg, setMsg] = useState({
        msg: ""
    });

    const getInformacion = (e) => {
        let update = {
            [e.target.name]: e.target.value
        }
        let data = {
            categoria: Object.assign(state.categoria, update),
        }
        setState(prevState => {
            return { ...prevState, ...data }
        })
    };

    const handleSubmit = e => {
        e.preventDefault()
        actions.putFetch("/categorias/" + props.match.params.index, setMsg, state.categoria, "Categoria")
        actions.getFetch("/categorias", "categorias")

    }
    if (state.categoria != null) {
        return (
            <>
                <div className="panel-header panel-header-md">
                    <h1 className="text-warning text-center">Categoria</h1>
                    <h3 className="text-info text-center">Modificar Categoria</h3>
                </div>
                <div className="content mt-2">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-11 ">
                            <form onSubmit={handleSubmit}>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead className=" text-primary">
                                                    <th className="align-middle text-center">
                                                        Nombre Categoria
                                                    </th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <input type="text" name="nombre" className="form-control" aria-describedby="basic-addon1" placeholder="Nombre categoria" onChange={getInformacion} value={state.categoria.nombre} />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="col-12 d-flex justify-content-end">
                                            <button className="btn btn-success">Modificar Categoría</button>
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
export default withRouter(ModificarCategoria);