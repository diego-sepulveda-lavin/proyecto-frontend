import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Context } from '../store/appContext';



const CrearCategoria = (props) => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.validaLogin(props)

    }, [])

    const [state, setState] = useState({
        nombre: null,
    })

    const getInformacion = (e) => {
        let infoCapturada = {
            [e.target.name]: e.target.value
        }
        setState(prevState => {

            return { ...prevState, ...infoCapturada };
        });
    }

    const handleSubmit = e => {
        e.preventDefault()
        actions.postFetch("/categorias", state, setState, "Categoria");
        actions.getFetch("/categorias", "categorias");

    }
    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Categoria</h1>
                <h3 className="text-info text-center">Crear Categoria</h3>
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
                                                        <input type="text" name="nombre" className="form-control" aria-describedby="basic-addon1" placeholder="Nombre categoria" onChange={getInformacion} value={!state.nombre ? "" : state.nombre} />
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="col-12 d-flex justify-content-end">
                                        <button className="btn btn-success">Crear Categoría</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default withRouter(CrearCategoria);