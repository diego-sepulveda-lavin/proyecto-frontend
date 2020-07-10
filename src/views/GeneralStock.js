import React from 'react';

const GeneralStock = () => {
    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Stock</h1>
                <h3 className="text-info text-center">Ver Inventario</h3>
            </div>
            <div className="content mt-2">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div className="input-group no-border " >
                                <input type="text" defaultValue="" className="form-control bg-light" placeholder="Buscar producto" />
                                <div className="input-group-append">
                                    <div className="input-group-text bg-light">
                                        <i className="now-ui-icons ui-1_zoom-bold"></i>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className=" col-md-6 p-0 mb-1">
                        <div class="form-check ml-3">
                            <label class="form-check-label p-0 align-middle " for="exampleRadios1">SKU</label>
                            <input class="ml-1 mr-3 align-middle" type="radio" name="exampleRadios" id="exampleRadios1"></input>
                            <label class="form-check-label align-middle " for="exampleRadios2">Descripción</label>
                            <input class="ml-1 mr-3 align-middle" type="radio" name="exampleRadios" id="exampleRadios2"></input>
                            <label class="form-check-label align-middle" for="exampleRadios3">Código de Barras</label>
                            <input class="ml-1 mr-3 align-middle" type="radio" name="exampleRadios" id="exampleRadios3"></input>
                        </div>

                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            {/* <div className="card-header">
                                        <h4 className="card-title"> </h4>
                                    </div> */}
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover" >
                                        <thead className=" text-primary ">
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
                                            <th className="text-center text-center">
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
                                            <tr >
                                                <td className="align-middle text-center">
                                                    651651
                                                        </td>
                                                <td className="align-middle text-center">
                                                    Super 8
                                                        </td>
                                                <td className="align-middle text-center">
                                                    6546556
                                                        </td>
                                                <td className="align-middle text-center">
                                                    100
                                                        </td>
                                                <td className="align-middle text-center">
                                                    Unidad
                                                        </td>
                                                <td className="align-middle text-center">
                                                    $300
                                                        </td>
                                                <td className="align-middle text-center">
                                                    $30.000
                                                        </td>
                                                <td className="align-middle text-center">
                                                    $400
                                                        </td>
                                                <td className="align-middle text-center">
                                                    33%
                                                        </td>
                                                <td className="align-middle text-center">
                                                    Confites
                                                        </td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle text-center">
                                                    454545
                                                        </td>
                                                <td className="align-middle text-center">
                                                    Coca Cola 500cc
                                                        </td>
                                                <td className="align-middle text-center">
                                                    23443
                                                        </td>
                                                <td className="align-middle text-center">
                                                    500
                                                        </td>
                                                <td className="align-middle text-center">
                                                    Unidad
                                                        </td>
                                                <td className="align-middle text-center">
                                                    $600
                                                        </td>
                                                <td className="align-middle text-center">
                                                    $360.000
                                                        </td>
                                                <td className="align-middle text-center">
                                                    $600
                                                        </td>
                                                <td className="align-middle text-center">
                                                    20%
                                                        </td>
                                                <td className="align-middle text-center">
                                                    Bebidas
                                                        </td>
                                            </tr>
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
export default GeneralStock;