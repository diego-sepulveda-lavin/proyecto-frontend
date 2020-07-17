import React from 'react';

const CrearSku = () => {
    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Stock</h1>
                <h3 className="text-info text-center">Crear SKU</h3>
            </div>
            <form>
                <div className="content">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-11 ">
                            <div className="card">
                               <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead className=" text-primary">
                                                <th className="align-middle text-center">
                                                    N°
                                                    </th>
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
                                                        <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="Nº" disabled />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="SKU" />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="Descripcion" />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="Codigo Barra" />
                                                    </td>

                                                    <td className="align-middle text-center">
                                                        <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="Unidad Entrega" />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <select class="form-control">
                                                            <option>Seleccionar Categoria</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="align-middle text-center">
                                                        <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="Nº" disabled />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="SKU" />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="Descripcion" />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="Codigo Barra" />
                                                    </td>

                                                    <td className="align-middle text-center">
                                                        <input type="text" className="form-control" aria-describedby="basic-addon1" placeholder="Unidad Entrega" />
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
                                <div className="card-footer">
                                    <div className="col-12 d-flex justify-content-end">
                                        <button type="button" class="btn btn-primary mr-3">Agregar línea de producto</button>
                                        <button type="button" class="btn btn-success">Crear SKU's</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default CrearSku;