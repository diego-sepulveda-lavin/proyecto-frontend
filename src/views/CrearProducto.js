import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Context } from '../store/appContext';

const CrearProducto = (props) => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.validaLogin(props)
    }, [])

    const [state, setState] = useState({
        sku: null,
        descripcion: null,
        codigo_barra: null,
        unidad_entrega: null,
        categoria_id: null,
        precio_venta_unitario: null
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
        actions.postFetch("/productos", state, setState, "Producto")
    }

    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Stock</h1>
                <h3 className="text-info text-center">Crear Producto</h3>
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
                                                    Precio Venta
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


                                                    <td>
                                                        <select className="form-control" name="unidad_entrega" onChange={getInformacion} value={!state.unidad_entrega ? "" : state.unidad_entrega}>
                                                            <option value="" disabled>Seleccionar</option>
                                                            <option value="Unidad">Unidad</option>
                                                            <option value="Kg">Kg</option>
                                                            <option value="Litro">Litro</option>
                                                            <option value="Paquete">Paquete</option>

                                                        </select>
                                                    </td>
                                                
                                                    <td className="align-middle text-center">
                                                        <input type="text" name="precio_venta_unitario" className="form-control" aria-describedby="basic-addon1" placeholder="Precio Venta Unitario" onChange={getInformacion} value={!state.precio_venta_unitario ? "" : state.precio_venta_unitario} />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <select className="form-control" name="categoria_id" value={!state.categoria_id ? "" : state.categoria_id} onChange={getInformacion}>
                                                            <option value="" disabled>Seleccionar</option>
                                                            {
                                                                store.categorias === null ?
                                                                    "" :
                                                                    !store.categorias.msg &&
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
                                    <div className="col-12 pr-0 d-flex justify-content-end">
                                        <button className="btn btn-success">Crear Producto</button>
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
export default withRouter(CrearProducto);