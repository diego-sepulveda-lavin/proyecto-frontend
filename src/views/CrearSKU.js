import React from 'react';
import '../css/now-ui-dashboard.css'
import Footer from '../components/footer';
import MenuLateral from '../components/menuLateral';
import NavBar from '../components/navBar';

const CrearSku = () => {
    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Stock</h1>
                <h3 className="text-info text-center">Crear SKU</h3>
            </div>
            <div className="content mt-2">
                <div className="row">

                    <div className="col-md-12">
                        <div className="card">
                            {/* <div className="card-header">
                                        <h4 className="card-title"> </h4>
                                    </div> */}
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table">
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
                                                    1
                                                        </td>
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
                                                    Unidad
                                                        </td>
                                                <td className="align-middle text-center">
                                                    Confites
                                                        </td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle text-center">
                                                    2
                                                        </td>
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
                                                    Unidad
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
                    <div className="col-12 d-flex justify-content-end">
                        <button type="button" class="btn btn-primary mr-3">Agregar línea de producto</button>
                        <button type="button" class="btn btn-success">Crear SKU's</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CrearSku;