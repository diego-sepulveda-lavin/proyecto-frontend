import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { withRouter } from 'react-router-dom';

const IngresarNuevaFactura = (props) => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)
    }, [])

    const [state, setState] = useState({
        nombre: "",
        rut: "",
        razon_social: "",
        rubro: "",
        factura: {
            id: 0,
            folio: 1,
            fecha_emision: "",
            fecha_recepcion: "",
            monto_neto: 0,
            monto_iva: 0,
            monto_otros_impuestos: 0,
            monto_total: 0,
            proveedor_id: 2,
            entrada_inventario: [
                {
                    id: 0,
                    cantidad: 1,
                    precio_costo_unitario: 100,
                    costo_total: 100,
                    fecha_registro: "2020-07-01",
                    usuario_id: 1,
                    factura_compra_id: 1,
                    producto_id: 1
                }
            ]

        }
    });

    const getDatos = e => {
        let data = {
            [e.target.name]: e.target.value
        }
        setState(prevState => {
            return { ...prevState, ...data }
        })
    }

    const postData = e => {
        e.preventDefault();
        actions.postFetch("/empresas", state, setState, "Empresa")
        actions.getFetch("/empresas", "empresas");

    }

    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Stock</h1>
                <h3 className="text-info text-center">Ingresar Nueva Factura</h3>
            </div>
            <div className="content mt-2">
                <div className="row ">
                    <div className="col-md-12">

                        <form onSubmit={postData}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <h4>Factura</h4>
                                        <table className="table" >
                                            <thead className=" text-primary ">

                                                <th className="align-middle text-center">
                                                    Folio
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Fecha Emision
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Fecha Recepcion
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Proveedor
                                                    </th>

                                            </thead>
                                            <tbody>
                                                <>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <input type="text" class="form-control" placeholder="Nombre" name="nombre" aria-describedby="basic-addon1" value={state.nombre ? state.nombre : ""} onChange={getDatos} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="text" class="form-control" placeholder="Rut" name="rut" aria-describedby="basic-addon1" value={state.rut ? state.rut : ""} onChange={getDatos} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="text" class="form-control" placeholder="Razón Social" name="razon_social" aria-describedby="basic-addon1" value={state.razon_social ? state.razon_social : ""} onChange={getDatos} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="text" class="form-control" placeholder="Rubro" name="rubro" aria-describedby="basic-addon1" value={state.rubro ? state.rubro : ""} onChange={getDatos} />
                                                        </td>
                                                    </tr>
                                                </>
                                            </tbody>
                                        </table>
                                        <table className="table" >
                                            <thead className=" text-primary ">

                                                <th className="align-middle text-center">
                                                    Monto Neto
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Monto IVA
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Monto Otros Impuestos
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Monto Total
                                                    </th>

                                            </thead>
                                            <tbody>
                                                <>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <input type="text" class="form-control" placeholder="Nombre" name="nombre" aria-describedby="basic-addon1" value={state.nombre ? state.nombre : ""} onChange={getDatos} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="text" class="form-control" placeholder="Rut" name="rut" aria-describedby="basic-addon1" value={state.rut ? state.rut : ""} onChange={getDatos} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="text" class="form-control" placeholder="Razón Social" name="razon_social" aria-describedby="basic-addon1" value={state.razon_social ? state.razon_social : ""} onChange={getDatos} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="text" class="form-control" placeholder="Rubro" name="rubro" aria-describedby="basic-addon1" value={state.rubro ? state.rubro : ""} onChange={getDatos} />
                                                        </td>
                                                    </tr>
                                                </>
                                            </tbody>
                                        </table>
                                        <hr />



                                        <h4 className>Detalle Factura</h4>
                                        <table className="table" >
                                            <thead className=" text-primary ">
                                                <th className="align-middle text-center">
                                                    Producto
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Cantidad
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Precio Costo Unitario
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Costo Total
                                                    </th>
                                                <th>&nbsp;</th>
                                            </thead>
                                            <tbody>
                                                <>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <input type="text" class="form-control" placeholder="Nombre" name="nombre" aria-describedby="basic-addon1" value={state.nombre ? state.nombre : ""} onChange={getDatos} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="text" class="form-control" placeholder="Rut" name="rut" aria-describedby="basic-addon1" value={state.rut ? state.rut : ""} onChange={getDatos} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="text" class="form-control" placeholder="Razón Social" name="razon_social" aria-describedby="basic-addon1" value={state.razon_social ? state.razon_social : ""} onChange={getDatos} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="text" class="form-control" placeholder="Rubro" name="rubro" aria-describedby="basic-addon1" value={state.rubro ? state.rubro : ""} onChange={getDatos} />
                                                        </td>
                                                        <td><button className="btn btn-warning btn-sm"><i className="now-ui-icons ui-1_simple-add"></i></button></td>

                                                    </tr>
                                                </>
                                            </tbody>
                                        </table>
                                        <hr />
                                        <div className="table-responsive">
                                            <table className="table table-hover" >
                                                <thead className=" text-primary ">
                                                <th className="align-middle text-center">
                                                        N°
                                                    </th>
                                                    <th className="align-middle text-center">
                                                        Producto
                                                    </th>
                                                    <th className="align-middle text-center">
                                                        Cantidad
                                                    </th>
                                                    <th className="align-middle text-center">
                                                        Precio Costo Unitario
                                                    </th>
                                                    <th className="align-middle text-center">
                                                        Costo Total
                                                    </th>
                                                   
                                                    <th>&nbsp;</th>

                                                </thead>
                                                <tbody>
                                                  
                                                    <tr>
                                                    <td className="align-middle text-center">
                                                            1
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
                                                            23443
                                                        </td>
                                                       
                                                      
                                                        <td>
                                                            <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?">
                                                                <i className="now-ui-icons ui-1_simple-remove"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-12 d-flex justify-content-end">
                                            <button class="btn btn-primary" name="Crear_Factura">Crear Factura</button>
                                        </div>
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
export default withRouter(IngresarNuevaFactura);