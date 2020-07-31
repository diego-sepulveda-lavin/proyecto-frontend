import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { withRouter, Link } from 'react-router-dom';

const ListarCategorias = (props) => {
    const { store, actions } = useContext(Context)
    const [state, setState] = useState({
        inputBuscador: "",
        buscarPor: "nombre"
    })

    const inputBuscador = e => {
        let data = { inputBuscador: e.target.value }
        setState((prevState) => {
            return { ...prevState, ...data }
        })
    }

    useEffect(() => {
        actions.validaLogin(props)
    }, [])

    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Categoria</h1>
                <h3 className="text-info text-center">Ver Categorías</h3>
            </div>
            <div className="content mt-2">
                <div className="row">
                    <div className="col-md-8">
                        <form>
                            <div className="input-group no-border " >
                                <input type="text" defaultValue="" className="form-control bg-light" placeholder="Buscar Categoría" onChange={e => inputBuscador(e)} />
                                <div className="input-group-append">
                                    <div className="input-group-text bg-light">
                                        <i className="now-ui-icons ui-1_zoom-bold"></i>
                                    </div>
                                </div>
                            </div>
                        </form>
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
                                                ID
                                            </th>
                                            <th className="align-middle text-center">
                                                &nbsp;
                                            </th>
                                        </thead>
                                        <tbody>
                                            {
                                                store.categorias == null ?
                                                    <tr className="align-middle text-center">
                                                        <th colspan="8"><i className="now-ui-icons loader_refresh spin"></i></th>
                                                    </tr>
                                                    :
                                                    store.categorias.msg ?
                                                        <tr className="align-middle text-center">
                                                            <th colspan="8">No hay Categorías registradas :(</th>
                                                        </tr>
                                                        :
                                                        store.categorias.filter((categoria) => {
                                                            if (state.buscarPor === "nombre")
                                                                return categoria.nombre.toLowerCase().includes(state.inputBuscador.toLowerCase());

                                                        }).map((categoria, indice) => {
                                                            return (
                                                                <tr key={indice}>
                                                                    <td className="align-middle text-center">
                                                                        {categoria.nombre}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        {categoria.id}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        <Link to={`/modificar-categoria/${categoria.id}`} >
                                                                            <button type="button" rel="tooltip" title="" className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Editar?">
                                                                                <i className="now-ui-icons ui-2_settings-90"></i>
                                                                            </button>
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
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
export default withRouter(ListarCategorias);