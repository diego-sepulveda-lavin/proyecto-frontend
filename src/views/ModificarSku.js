import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Context } from '../store/appContext';


const ModificarSku = (props) => {
    const {store, actions} = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)     
    }, [])
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
                            <input type="text" defaultValue="" className="form-control bg-light" placeholder="Buscar producto" />
                            <div className="input-group-append">
                                <div className="input-group-text bg-light">
                                    <i className="now-ui-icons ui-1_zoom-bold"></i>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-6 ">
                        <div class="form-check ml-3">
                            <label class="form-check-label pl-3 pr-2" for="exampleRadios1">SKU</label>
                            <input type="radio" aria-label="Radio button for following text input"></input>
                            <label class="form-check-label pl-3 pr-2" for="exampleRadios1">Descripción</label>
                            <input type="radio" aria-label="Radio button for following text input"></input>
                            <label class="form-check-label pl-3 pr-2" for="exampleRadios1">Código de Barras</label>
                            <input type="radio" aria-label="Radio button for following text input"></input>
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
                                        <table className="table table-hover">
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
                                                <tr>
                                                    <td className="align-middle text-center">
                                                        <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="SKU" disabled />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" class="form-control" placeholder="Descripción" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="Codigo Barra" disabled />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" class="form-control" placeholder="Cantidad" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        Unidad
                                                            </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="C. Unit" />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="C. Total" />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" class="form-control" placeholder="Precio Venta" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="M. Cont." />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <select class="form-control">
                                                            <option>Seleccionar Categoria</option>
                                                        </select>
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                               
                            </div>
                            <div className="card-footer">
                            <div className="col-12 d-flex justify-content-end">
                                    <button type="submit" class="btn btn-primary">Modificar SKU</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default withRouter(ModificarSku);