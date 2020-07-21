import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Context } from '../store/appContext';



const CrearSku = (props) => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.validaLogin(props)

    }, [])

    const [state, setState] = useState({
        sku: null,
        descripcion: null,
        codigo_barra: null,
        unidad_entrega: null,
        categoria_id: null
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
        actions.postFetch("/productos", state, setState, "SKU")

    }

    const agregarFila = () => {
        let tb = document.querySelector("tbody")
        tb.innerHTML += tb.innerHTML = ` 
        <tr>
            <td class="align-middle text-center">
                <input type="text" name="sku" class="form-control" aria-describedby="basic-addon1" placeholder="SKU" onChange={getInformacion} value={!state.sku ? "" : state.sku} />
            </td>
            <td class="align-middle text-center">
                <input type="text" name="descripcion" class="form-control" aria-describedby="basic-addon1" placeholder="Descripcion" onChange={getInformacion} value={!state.descripcion ? "" : state.descripcion} />
            </td>
            <td class="align-middle text-center">
                <input type="text" name="codigo_barra" class="form-control" aria-describedby="basic-addon1" placeholder="Codigo Barra" onChange={getInformacion} value={!state.codigo_barra ? "" : state.codigo_barra} />
            </td>

            <td class="align-middle text-center">
                <input type="text" name="unidad_entrega" class="form-control" aria-describedby="basic-addon1" placeholder="Unidad Entrega" onChange={getInformacion} value={!state.unidad_entrega ? "" : state.unidad_entrega} />
            </td>
            <td class="align-middle text-center">
                <select class="form-control" name="categoria_id" onChange={getInformacion}>
                    <option selected value="">Seleccionar</option>
                    {
                        !!store.categorias &&
                        store.categorias.map((categoria) => {
                            return <option value={categoria.id} key={categoria.id}>{categoria.nombre}</option>
                        })
                    }
                </select>
            </td>
        </tr>`;
    }



    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Stock</h1>
                <h3 className="text-info text-center">Crear SKU</h3>
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
                                                        SKU
                                                    </th>
                                                    <th className="align-middle text-center">
                                                        Descripción
                                                    </th>
                                                    <th className="align-middle text-center">
                                                        Código de Barra
                                                    </th>

                                                    <th className="align-middle text-center">
                                                        Unidad de Entrega
                                                    </th>
                                                    <th className="align-middle text-center">
                                                        Categoría
                                                    </th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="align-middle text-center">
                                                        <input type="text" name="sku" className="form-control" aria-describedby="basic-addon1" placeholder="SKU" onChange={getInformacion} value={!state.sku ? "" : state.sku} />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" name="descripcion" className="form-control" aria-describedby="basic-addon1" placeholder="Descripcion" onChange={getInformacion} value={!state.descripcion ? "" : state.descripcion} />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" name="codigo_barra" className="form-control" aria-describedby="basic-addon1" placeholder="Codigo Barra" onChange={getInformacion} value={!state.codigo_barra ? "" : state.codigo_barra} />
                                                    </td>

                                                    <td className="align-middle text-center">
                                                        <input type="text" name="unidad_entrega" className="form-control" aria-describedby="basic-addon1" placeholder="Unidad Entrega" onChange={getInformacion} value={!state.unidad_entrega ? "" : state.unidad_entrega} />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <select className="form-control" name="categoria_id" value={!state.categoria_id ? "" : state.categoria_id} onChange={getInformacion}>
                                                            <option value="" disabled>Seleccionar</option>
                                                            {
                                                                !!store.categorias &&
                                                                store.categorias.map((categoria) => {
                                                                    return <option value={categoria.id} key={categoria.id}>{categoria.nombre}</option>
                                                                })
                                                            }
                                                        </select>
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="col-12 d-flex justify-content-end">
                                        <button type="button" className="btn btn-primary mr-3" onClick={agregarFila}>Agregar línea de producto</button>
                                        <button className="btn btn-success">Crear SKU's</button>
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
export default withRouter(CrearSku);