import React, { useContext, useEffect, useState } from 'react';
import "../css/ventaPrincipal.css";
import { Link, withRouter } from 'react-router-dom';
import { Context } from '../store/appContext';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const IngresarVenta = (props) => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)
        if (store.abrirCaja == false) {
            console.log("si")

            Swal.fire({
                title: store.usuarioActivo.nombre,
                text: "Debes abrir caja para poder Iniciar las ventas!",
                icon: 'info',
                allowOutsideClick: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ir a abrir Caja!'
            }).then((result) => {
                if (result.value) props.history.push("/abrir-caja")
            })
        }
    }, [])

    const [state, setState] = useState({
        buscador: "",
        detalleProductos: [],
        datosVenta: {
            monto_total : 0,
            monto_neto : 0,
            monto_iva : 0
        }
    })

    const getInformacion = (e) => {
        let data = {
            buscador: e.target.value
        }
        setState(prevState => {
            return { ...prevState, ...data }
        })
    }

    const agregarProducto = (producto) => {
        let { detalleProductos } = state
        let ProductoAgregado = {
            descripcion: producto.descripcion,
            cantidad: 0,
            precio_venta_unitario: producto.precio_venta_unitario,
            total: 0
        }
        detalleProductos.push(ProductoAgregado)

        setState(prevState => {
            return { ...prevState, detalleProductos }
        })
    }

    const deleteProducto = e => {
        let data = state.detalleProductos;
        data.splice(e.target.id, 1);
        setState(prevState => {
            return { ...prevState, detalleProductos: data }
        });
    }

    const getDatosProductos = e => {
        const detalleProductos = state.detalleProductos;
        detalleProductos[e.target.id].cantidad = e.target.value
        detalleProductos[e.target.id].total = parseInt(detalleProductos[e.target.id].cantidad) * parseInt(detalleProductos[e.target.id].precio_venta_unitario)

        setState(prevState => {
            return { ...prevState, detalleProductos }
        })
    }
/* 
    const getDatosVenta = e => {
        const datosVenta = state.datosVenta;
        datosVenta.monto_total = e.target.value
       
        setState(prevState => {
            return { ...prevState, datosVenta }
        })
    }
 */

    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Ventas</h1>
                <h3 className="text-info text-center">Ingresar Ventas</h3>
            </div>
            <div className="content mt-2">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="card">
                            <h5 className="card-title m-2">
                                <div className="input-group no-border " >
                                    <input type="text" defaultValue="" className="form-control bg-light" placeholder="Buscar Producto" onChange={getInformacion} />
                                    <div className="input-group-append">
                                        <div className="input-group-text bg-light">
                                            <i className="now-ui-icons ui-1_zoom-bold"></i>
                                        </div>
                                    </div>
                                </div>
                            </h5>

                            <div className="card-body productos">
                                <div className="chart-area">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th className="align-middle text-center font-weight-bold" scope="col">#</th>
                                                <th className="align-middle text-center font-weight-bold" scope="col">Producto</th>
                                                <th className="align-middle text-center font-weight-bold" scope="col">Precio Unitario</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                store.productos == null ?
                                                    (<tr className="align-middle text-center">
                                                        <th colspan="8"><i className="now-ui-icons loader_refresh spin"></i></th>
                                                    </tr>
                                                    )
                                                    :
                                                    (
                                                        store.productos.length > 0 &&
                                                        store.productos.filter(ele => {
                                                            return ele.descripcion.toLowerCase().includes(state.buscador.toLowerCase())
                                                        })
                                                            .map((producto, index) => {
                                                                return <tr onClick={() => agregarProducto(producto)}>
                                                                    <th className="align-middle text-center" scope="row">{index + 1}</th>
                                                                    <td className="align-middle text-center">{producto.descripcion}</td>
                                                                    <td className="align-middle text-center">{producto.precio_venta_unitario}</td>
                                                                </tr>
                                                            })
                                                    )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Productos Seleccionados */}
                    <div className="col-lg-7 col-md-6 mb-0">
                        <div className="card card-chart">
                            <div className="card-header">
                                <h4 className="card-title text-center font-weight-bold">Detalle Productos</h4>
                            </div>
                            <div className="detalleProductos card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th className="align-middle text-center font-weight-bold" scope="col">#</th>
                                            <th className="align-middle text-center font-weight-bold" scope="col">Producto</th>
                                            <th className="align-middle text-center font-weight-bold" scope="col">Cantidad</th>
                                            <th className="align-middle text-center font-weight-bold" scope="col">Precio Unitario</th>
                                            <th className="align-middle text-center font-weight-bold" scope="col">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            state.detalleProductos == null ? "" :
                                                state.detalleProductos.map((producto, index) => {
                                                    return (
                                                        <tr>
                                                            <th scope="row">{index + 1}</th>
                                                            <td className="text-center">{producto.descripcion}</td>
                                                            <td><input type="text" className="border-0 text-center" onChange={getDatosProductos} value={producto.cantidad} id={index} /></td>
                                                            <td className="text-center">{producto.precio_venta_unitario}</td>
                                                            <td className="text-center" >{producto.total}</td>
                                                            <td className="text-center"> <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?" onClick={deleteProducto} id={index}>
                                                                <i class="now-ui-icons ui-1_simple-remove"></i>
                                                            </button></td>
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
                <div className="row">
                    <div className="col-12 col-md-7 offset-md-5">
                        <div className="card">
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr className=" table-hover">
                                            <th scope="col">Total Neto</th>
                                            <th scope="col"><input type="text" aria-label="First name" className="form-control" placeholder="Monto Neto"  value={state.datosVenta.monto_neto = state.datosVenta.monto_total/1.19} /></th>
                                        </tr>
                                        <tr className=" table-hover">
                                            <th scope="col">IVA 19%</th>
                                            <th scope="col"><input type="text" aria-label="First name" className="form-control" placeholder="IVA"  value={state.datosVenta.monto_iva = state.datosVenta.monto_net*0.19} /></th>
                                        </tr>
                                        <tr className=" table-hover">
                                            <th scope="col">Total a pagar</th>
                                            <th scope="col"><input type="text" aria-label="First name" className="form-control" placeholder="Monto a Pagar" /*  onChange={getDatosVenta} */ value={state.detalleProductos===null? 0 : state.datosVenta.monto_total = state.detalleProductos.reduce((accumulator, producto) => accumulator + producto.total, 0 )} /> </th>
                                        </tr>
                                    </thead>
                                </table>
                                <Link to="/cerrar-venta" type="button" className="btn btn-success btn-lg btn-block font-weight-bold">Ir a Pagar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(IngresarVenta);
