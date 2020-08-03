import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Context } from '../store/appContext';


const ModificarProducto = (props) => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)
        fetchProductos("/stock", "productos");
    }, [])


    const [state, setState] = useState({
        productos: [],
    })

    const [buscar, setBuscar] = useState({
        inputBuscador: "",
        buscarPor: "descripcion",
    })

    const getInformacion = (e, index) => {
        let { productos } = state;
        //let productos = state.productos;


        productos[index][e.target.name] = e.target.value

        setState(prevState => {
            return { ...prevState, productos }
        })
    }
    const fetchProductos = async (urlPag, data) => {
        try {
            let headersContent = { 'Content-Type': 'application/json' };
            const token = sessionStorage.getItem('access_token');
            if (token) {
                headersContent = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
            }
            let requestOptions = {
                method: 'GET',
                headers: headersContent
            };
            const resp = await fetch(`${store.urlBase}${urlPag}`, requestOptions)
            const result = await resp.json();
            setState(
                { [data]: result }
            )
        } catch (error) {
            console.log(error);
        }
    }

    const enviarFormulario = (e) => {
        e.preventDefault()
        actions.putFetch("/productos", "", state.productos, "Producto(s)")
    }

    const inputBuscador = e => {
        let data = {
            inputBuscador: e.target.value
        }
        setBuscar((prevState) => {
            return { ...prevState, ...data }
        })
    }

    const seleccionadorBuscador = e => {
        let data = {
            buscarPor: e.target.value
        }
        setBuscar((prevState) => {
            return { ...prevState, ...data }
        })
    }

    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Stock</h1>
                <h3 className="text-info text-center">Modificar SKU</h3>
            </div>
            <div className="content mt-2">
                <div className="row">
                    <div className="col-6 ">
                        <div className="input-group no-border " >
                            <input type="text" defaultValue="" className="form-control bg-light" placeholder="Buscar producto" onChange={e => inputBuscador(e)} />
                            <div className="input-group-append">
                                <div className="input-group-text bg-light">
                                    <i className="now-ui-icons ui-1_zoom-bold"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 ">
                        <div className="form-check ml-3">
                            <label className="form-check-label pl-3 pr-2" for="exampleRadios1" >Descripción</label>
                            <input type="radio" aria-label="Radio button for following text input" name="OpcionBuscador" id="descripcion" value="descripcion" defaultChecked onClick={e => seleccionadorBuscador(e)}></input>
                            <label className="form-check-label pl-3 pr-2" for="exampleRadios1">SKU</label>
                            <input type="radio" aria-label="Radio button for following text input" name="OpcionBuscador" id="sku" value="sku" onClick={e => seleccionadorBuscador(e)}></input>
                            <label className="form-check-label pl-3 pr-2" for="exampleRadios1">Código de Barras</label>
                            <input type="radio" aria-label="Radio button for following text input" name="OpcionBuscador" id="codigo_barra" value="codigo_barra" onClick={e => seleccionadorBuscador(e)}></input>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <form onSubmit={enviarFormulario}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead className=" text-primary">
                                                    <th className="align-middle text-center" style={{ "width": "10vw" }}>
                                                        SKU
                                                    </th>
                                                    <th className="align-middle text-center">
                                                        Descripción
                                                    </th>
                                                    <th className="align-middle text-center">
                                                        Código de Barra
                                                    </th>

                                                    <th className="align-middle text-center">
                                                        Precio de Venta
                                                    </th>

                                                    <th className="align-middle text-center">
                                                        Unidad Entrega
                                                    </th>
                                                    <th className="align-middle text-center">
                                                        Categoría
                                                    </th>
                                                </thead>
                                                <tbody>
                                                    {
                                                        state.productos == null ?
                                                            <tr className="align-middle text-center">
                                                                <th colspan="8"><i className="now-ui-icons loader_refresh spin"></i></th>
                                                            </tr>
                                                            :
                                                            state.productos.length == 0 ?
                                                                <tr className="align-middle text-center">
                                                                    <th colspan="8"><i className="now-ui-icons loader_refresh spin"></i></th>
                                                                </tr>
                                                                :
                                                                state.productos &&
                                                                state.productos.filter((producto) => {
                                                                    if (buscar.buscarPor == "descripcion")
                                                                        return producto.descripcion.toLowerCase().includes(buscar.inputBuscador.toLowerCase())
                                                                    if (buscar.buscarPor == "sku")
                                                                        return producto.sku.toLowerCase().includes(buscar.inputBuscador.toLowerCase())
                                                                    if (buscar.buscarPor == "codigo_barra")
                                                                        return producto.codigo_barra.toLowerCase().includes(buscar.inputBuscador.toLowerCase())
                                                                }).map((producto, index) => {

                                                                    return (
                                                                        <tr key={index}>
                                                                            <td className="align-middle text-center">
                                                                                <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="SKU" disabled value={producto.sku} />
                                                                            </td>
                                                                            <td className="align-middle text-center" style={{ "width": "15vw" }}>
                                                                                <input type="text" name="descripcion" className="form-control" aria-label="Username" aria-describedby="basic-addon1" value={producto.descripcion ? producto.descripcion : ""} onChange={(e) => getInformacion(e, index)} />
                                                                            </td>
                                                                            <td className="align-middle text-center" style={{ "width": "13vw" }}>
                                                                                <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="Codigo Barra" disabled value={producto.codigo_barra} />
                                                                            </td>

                                                                            <td className="align-middle text-center" style={{ "width": "10vw" }}>
                                                                                <input type="number" name="precio_venta_unitario" className="form-control" placeholder="Precio Venta" aria-label="Username" aria-describedby="basic-addon1" value={producto.precio_venta_unitario ? producto.precio_venta_unitario : ""} onChange={(e) => getInformacion(e, index)} />
                                                                            </td>

                                                                            <td className="align-middle text-center" >
                                                                                <select className="form-control" name="unidad_entrega" value={producto ? producto.unidad_entrega : ""}
                                                                                    onChange={(e) => getInformacion(e, index)}>
                                                                                    <option value="" disabled>Seleccionar</option>
                                                                                    <option value="Unidad">Unidad</option>
                                                                                    <option value="Kg">Kg</option>
                                                                                    <option value="Litro">Litro</option>
                                                                                    <option value="Paquete">Paquete</option>
                                                                                </select>
                                                                            </td>
                                                                            <td className="align-middle text-center">
                                                                                <select className="form-control" name="categoria_id" value={producto ? producto.categoria_id : ""} onChange={(e) => getInformacion(e, index)}>
                                                                                    <option value="" disabled>Seleccionar</option>
                                                                                    {
                                                                                        store.categorias ?
                                                                                            store.categorias.map((categoria, index) => {
                                                                                                return <option value={categoria.id}>{categoria.nombre}</option>
                                                                                            })
                                                                                            : ""
                                                                                    }
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
                                </div>
                                <div className="card-footer">
                                    <div className="col-12 pr-0 d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary">Modificar Producto(s)</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default withRouter(ModificarProducto);



