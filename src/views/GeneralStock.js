import React, { useContext, useEffect } from 'react';
import "../css/ventaPrincipal.css";
import { Context } from '../store/appContext';
import { withRouter } from 'react-router-dom';
const GeneralStock = (props) => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)
    }, [])

    /* const reduce = () => {
        if (store.productos != null && store.entradas_inventario != null && store.salidas_inventario) {
            let saldoInventario = store.productos.reduce((acc, producto) => {
                acc[producto.id] = { descripcion: producto.descripcion, entradas: 0, salidas: 0, diferencia: 0 }
                return acc
            }, {})
            
            store.entradas_inventario.map(entradaI => {
                return saldoInventario[entradaI.producto_id].entradas += entradaI.cantidad
            });
            store.salidas_inventario.map(salidaI => {
                return saldoInventario[salidaI.producto_id].salidas += salidaI.cantidad
            });
 
 
  
          
            saldoInventario[7].diferencia = saldoInventario[7].entradas-saldoInventario[7].salidas
            console.log("si",saldoInventario[7])
            return saldoInventario
        }
 
    }
 
   
    console.log(reduce()) */


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
                        <div className="form-check ml-3">
                            <label className="form-check-label p-0 align-middle " for="exampleRadios1">SKU</label>
                            <input className="ml-1 mr-3 align-middle" type="radio" name="exampleRadios" id="exampleRadios1"></input>
                            <label className="form-check-label align-middle " for="exampleRadios2">Descripción</label>
                            <input className="ml-1 mr-3 align-middle" type="radio" name="exampleRadios" id="exampleRadios2"></input>
                            <label className="form-check-label align-middle" for="exampleRadios3">Código de Barras</label>
                            <input className="ml-1 mr-3 align-middle" type="radio" name="exampleRadios" id="exampleRadios3"></input>
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
                                                Inventario Disponible
                                                    </th>
                                            <th className="align-middle text-center">
                                                Unidad de Entrega
                                                    </th>

                                            <th className="text-center text-center">
                                                Precio de Venta
                                                    </th>

                                            <th className="align-middle text-center">
                                                Categoría
                                                    </th>

                                        </thead>
                                        <tbody>
                                            {
                                                store.InventarioDisponible == null ?
                                                    <tr className="align-middle text-center">
                                                        <th colspan="8"><i className="now-ui-icons loader_refresh spin"></i></th>
                                                    </tr>
                                                    :
                                                    store.InventarioDisponible.length == 0 ?
                                                        <tr className="align-middle text-center">
                                                            <th colspan="8">No hay Stock :(</th>
                                                        </tr>
                                                        :
                                                        store.InventarioDisponible.map((producto, index) => {

                                                            return (
                                                                <tr >
                                                                    <td className="align-middle text-center">
                                                                        {producto.sku}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        {producto.descripcion}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        {producto.codigo_barra}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        {producto.inventario_disponible}
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        {producto.unidad_entrega}
                                                                    </td>

                                                                    <td className="align-middle text-center">
                                                                        {producto.precio_venta_unitario}
                                                                    </td>

                                                                    <td className="align-middle text-center">
                                                                        {producto.categoria_id}
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
export default withRouter(GeneralStock);