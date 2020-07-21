import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { withRouter } from 'react-router-dom';
import SelectSearch from 'react-select-search';

const Facturas = (props) => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)
    }, [])

    const [state, setState] = useState({
        sku: null,
        descripcion: null,
        codigo_barra: null,
        cantidad: null,
        unidad_entrega: null,
        costo_unitario: null,
        costo_total: null,
        precio_venta: null,
        margen_contribucion: null,
        categoria_id: null
    })
    const [buscador, setBuscador] = useState({
        opcion: "descripcion",
        buscador: ""
    })

    const inputBuscador = (e) => {
        let data = { [e.target.name]: e.target.value }
        setBuscador(prevBuscador => {
            return { ...prevBuscador, ...data }
        })
    }
    const getOpcionBuscador = (e) => {
        let data = { [e.target.name]: e.target.value }
        setBuscador(prevBuscador => {
            return { ...prevBuscador, ...data }
        })
    }
    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Stock</h1>
                <h3 className="text-info text-center">Facturas Compras</h3>
            </div>
            <div className="content mt-2">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="input-group no-border " >
                                <input type="text" defaultValue="" name="buscador" className="form-control bg-light" placeholder="Buscar Algo que no entiendo" onChange={e => inputBuscador(e)} />
                                <div className="input-group-append">
                                    <div className="input-group-text bg-light">
                                        <i className="now-ui-icons ui-1_zoom-bold"></i>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className=" col-md-6 p-0 mb-1">
                        <div className="form-check ml-3">
                            <label className="form-check-label p-0 align-middle " for="exampleRadios1">SKU</label>
                            <input className="ml-1 mr-3 align-middle" defaultChecked type="radio" name="opcion" id="rSKU" value="sku" onClick={e => getOpcionBuscador(e)}></input>
                            <label className="form-check-label align-middle " for="exampleRadios2">Descripcion</label>
                            <input className="ml-1 mr-3 align-middle" defaultChecked type="radio" name="opcion" id="rDescripcion" value="descripcion" onClick={e => getOpcionBuscador(e)}></input>
                            <label className="form-check-label align-middle" for="exampleRadios3">Codigo de Barra</label>
                            <input className="ml-1 mr-3 align-middle" type="radio" name="opcion" id="rCodBarrar" value="codBarra" onClick={e => getOpcionBuscador(e)}></input>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="card">
                            {/* <div className="card-header">
                                        <h4 className="card-title"> </h4>
                                    </div> */}
                            <div className="card-body">
                                <div class="form-group">
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
                                                    Cantidad
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Unidad de Entrega
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Costo Unitario
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Costo Total
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Precio de Venta
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Margen de Contribución
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Categoría
                                                    </th>

                                            </thead>
                                            <tbody>
                                                {
                                                    store.productos == null ?
                                                        <tr className="align-middle text-center">
                                                            <th colspan="8"><i class="now-ui-icons loader_refresh spin"></i></th>
                                                        </tr>
                                                        :
                                                        store.productos.filter((producto) => {
                                                            if (buscador.opcion === "descripcion")
                                                                return producto.descripcion.toLowerCase().includes(buscador.buscador.toLowerCase());
                                                            if (buscador.opcion === "sku")
                                                                return producto.sku.toLowerCase().includes(buscador.buscador.toLowerCase());
                                                            if (buscador.opcion === "codBarra")
                                                                return producto.codigo_barra.toLowerCase().includes(buscador.buscador.toLowerCase());




                                                        }).map((producto) => {
                                                            return (
                                                                <tr key={producto.id}>
                                                                    <td className="align-middle text-center">
                                                                        <input type="text" class="form-control" placeholder="SKU" aria-label="Username" aria-describedby="basic-addon1" value={producto.sku} />
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        <input type="text" class="form-control" placeholder="Descripcion" aria-label="Username" aria-describedby="basic-addon1" value={producto.descripcion} />
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        <input type="text" class="form-control" placeholder="Cod. Barra" aria-label="Username" aria-describedby="basic-addon1" value={producto.codigo_barra} />
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        <input type="text" class="form-control" placeholder="Cantidad" aria-label="Username" aria-describedby="basic-addon1" />
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        <input type="text" class="form-control" placeholder="Unidad" aria-label="Username" aria-describedby="basic-addon1" value={producto.unidad_entrega} />
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        <input type="text" class="form-control" placeholder="Costo Unitario" aria-label="Username" aria-describedby="basic-addon1" />
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        <input type="text" class="form-control" placeholder="Costo Total" aria-label="Username" aria-describedby="basic-addon1" disabled />
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        <input type="text" class="form-control" placeholder="Precio Venta" aria-label="Username" aria-describedby="basic-addon1" />
                                                                    </td>
                                                                    <td className="align-middle text-center" >
                                                                        <input type="text" class="form-control" placeholder="Margen Contribucion" aria-label="Username" aria-describedby="basic-addon1" value={producto.margen_contribucion} />
                                                                    </td>
                                                                    <td className="align-middle text-center" style={{ "width": "124px" }}>
                                                                        <select class="form-control form-control">
                                                                            <option>{actions.validaCategoria(producto.categoria_id)}</option>
                                                                        </select>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })

                                                }


                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="col-12 d-flex justify-content-end">
                                    <button type="button" class="btn btn-primary mr-3">Agregar línea de producto</button>
                                    <button type="submit" class="btn btn-success">Ingresar Factura</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default withRouter(Facturas);