import React, { useContext, useEffect, useState } from 'react';
import "../css/ventaPrincipal.css";
import { Link, withRouter } from 'react-router-dom';
import { Context } from '../store/appContext';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const IngresarVenta = (props) => {
    const { store, actions } = useContext(Context)
    const [state, setState] = useState({
        buscador: "",
        detalleProductos: [],
        datosVenta: {
            monto_neto: null,
            monto_iva: null,
            monto_total: null,
            monto_recibido: null,
            vuelto: null,
            tipo_documento: "boleta",
            numero_documento: null,
            forma_pago: "efectivo"

        }
    })
    useEffect(() => {
        actions.validaLogin(props)
        generarFolio()
        if (sessionStorage.getItem("abrirCaja") == null) {
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

    const postData = e => {
        e.preventDefault();
        if (state.detalleProductos.length == 0) {
            Swal.fire({
                icon: 'error',
                title: 'Debe ingresar productos para generar venta'
            })
        } else if (state.datosVenta.tipo_documento === null || state.datosVenta.forma_pago === null || state.datosVenta.monto_recibido === null) {
            Swal.fire({
                icon: 'error',
                title: 'Faltan campos por completar'
            })
        } else if (state.datosVenta.vuelto < 0) {
            Swal.fire({
                icon: 'error',
                title: 'Verificar monto recibido'
            })
        } else {
            postFetch("/documentos-venta/", state, setState)
            actions.getFetch("/stock", "InventarioDisponible");
        }
    }

    const postFetch = async (urlPag, data_a_enviar, limpiarInput) => {
        try {
            let headersContent = { 'Content-Type': 'application/json' };
            const token = sessionStorage.getItem('access_token');
            if (token) {
                headersContent = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
            }
            let requestOptions = {
                method: 'POST',
                headers: headersContent,
                body: JSON.stringify(data_a_enviar)
            };
            const resp = await fetch(`${store.urlBase}${urlPag}`, requestOptions)
            const result = await resp.json();
            if (resp.status == 200 || resp.status == 201) {
                Swal.fire({
                    icon: 'success',
                    title: result.msg
                })
                limpiarInput({
                    buscador: "",
                    detalleProductos: [],
                    datosVenta: {
                        monto_neto: "",
                        monto_iva: "",
                        monto_total: "",
                        monto_recibido: "",
                        vuelto: "",
                        tipo_documento: "",
                        numero_documento: "",
                        forma_pago: ""
                    }
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Algo salió mal.',
                    text: result.msg
                })
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getInformacion = (e) => {
        let data = {
            buscador: e.target.value
        }
        setState(prevState => {
            return { ...prevState, ...data }
        })
    };

    const getDetallePago = (e) => {
        const { datosVenta } = state
        datosVenta[e.target.name] = e.target.value
        datosVenta.vuelto = datosVenta.monto_recibido - datosVenta.monto_total

        setState(prevState => {
            return { ...prevState, datosVenta }
        })
    }

    const agregarProducto = (producto) => {
        let { detalleProductos } = state
        let productoAgregado = {
            descripcion: producto.descripcion,
            cantidad: 1,
            precio_venta_unitario: producto.precio_venta_unitario,
            total: producto.precio_venta_unitario,
            producto_id: producto.id,
            cantidad_disponible: producto.inventario_disponible
        }

        let validaProductoEnDetalle = detalleProductos.map(e => {
            return e.producto_id
        })
        if (validaProductoEnDetalle.includes(productoAgregado.producto_id)) {
            Swal.fire({
                icon: 'error',
                title: "Producto ya se encuentra agregado"
            })
        } else {

            detalleProductos.push(productoAgregado)
            setState(prevState => {
                return { ...prevState, detalleProductos }
            })

            const { datosVenta } = state
            datosVenta.monto_total = state.detalleProductos.reduce((accumulator, producto) => accumulator + producto.total, 0)
            datosVenta.monto_neto = Math.ceil(datosVenta.monto_total / (1.19));
            datosVenta.monto_iva = Math.ceil(datosVenta.monto_neto * (19 / 100));
            setState(prevState => {
                return { ...prevState, datosVenta }
            })
        }
    }

    const deleteProducto = (index) => {
        let data = state.detalleProductos;
        console.log(data)
        data.splice(index, 1);
        setState(prevState => {
            return { ...prevState, detalleProductos: data }
        });

        const { datosVenta } = state
        datosVenta.monto_total = state.detalleProductos.reduce((accumulator, producto) => accumulator + producto.total, 0)
        datosVenta.monto_neto = Math.ceil(datosVenta.monto_total / (1.19));
        datosVenta.monto_iva = Math.ceil(datosVenta.monto_neto * (19 / 100));
        setState(prevState => {
            return { ...prevState, datosVenta }
        })
    }

    const getDatosProductos = e => {
        const detalleProductos = state.detalleProductos;
        detalleProductos[e.target.id].cantidad = parseInt(e.target.value)
        if (detalleProductos[e.target.id].cantidad <= 0) {
            Swal.fire({
                icon: 'error',
                title: `Tiene que ingresar una cantidad de ${detalleProductos[e.target.id].descripcion} mayor a 0.`
            })
            detalleProductos[e.target.id].cantidad = 1

        } else if (detalleProductos[e.target.id].cantidad > detalleProductos[e.target.id].cantidad_disponible) {
            Swal.fire({
                icon: 'error',
                title: `Inventario disponible de ${detalleProductos[e.target.id].descripcion} es de ${detalleProductos[e.target.id].cantidad_disponible} unidades.`
            })
            detalleProductos[e.target.id].cantidad = 1
        } else {
            detalleProductos[e.target.id].cantidad = parseInt(e.target.value)
        }

        detalleProductos[e.target.id].total = parseInt(detalleProductos[e.target.id].cantidad) * parseInt(detalleProductos[e.target.id].precio_venta_unitario)

        /* Este codigo se repite para que al momento de modificar una cantidad en los detalles de productos, se actualice el monto total, neto e monto_iva */
        const { datosVenta } = state
        datosVenta.monto_total = detalleProductos.reduce((accumulator, producto) => accumulator + producto.total, 0)
        datosVenta.monto_neto = Math.ceil(datosVenta.monto_total / (1.19));
        datosVenta.monto_iva = Math.ceil(datosVenta.monto_neto * (19 / 100));

        setState(prevState => {
            return { ...prevState, detalleProductos, datosVenta }
        })
        getDetallePago(e)
    }

    const generarFolio = () => {
        const { datosVenta } = state
        datosVenta.numero_documento = Math.floor(Math.random() * 9999) + 1
        setState(prevState => {
            return { ...prevState, datosVenta }
        })
    }

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
                                                <th className="align-middle text-center font-weight-bold" scope="col">Cantidad</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{ "cursor": "pointer" }}>

                                            {
                                                store.InventarioDisponible == null ?
                                                    (<tr className="align-middle text-center">
                                                        <th colspan="8"><i className="now-ui-icons loader_refresh spin"></i></th>
                                                    </tr>
                                                    )
                                                    :
                                                    (
                                                        store.InventarioDisponible.length > 0 &&
                                                        store.InventarioDisponible.filter(ele => {
                                                            return ele.descripcion.toLowerCase().includes(state.buscador.toLowerCase()) && ele.inventario_disponible > 0
                                                        })
                                                            .map((producto, index) => {
                                                                return <tr key={index} onClick={(e) => { agregarProducto(producto); getDetallePago(e) }}>
                                                                    <th className="align-middle text-center" scope="row">{index + 1}</th>
                                                                    <td className="align-middle text-center">{producto.descripcion}</td>
                                                                    <td className="align-middle text-center">{`${new Intl.NumberFormat("de-DE").format(`${producto.precio_venta_unitario} `)}`}</td>
                                                                    <td className="align-middle text-center">{producto.inventario_disponible}</td>
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
                                                state.detalleProductos.map((producto, index, arr) => {
                                                    return (
                                                        <tr key={producto.id}>
                                                            <th scope="row">{index + 1}</th>
                                                            <td className="text-center">{producto.descripcion}</td>
                                                            <td className="text-center"><input type="text" className="border-0 text-center " onChange={getDatosProductos} id={index} value={producto.cantidad ? producto.cantidad : 0} /></td>
                                                            <td className="text-center">{`${new Intl.NumberFormat("de-DE").format(`${producto.precio_venta_unitario} `)}`}</td>
                                                            <td className="text-center" > {`${new Intl.NumberFormat("de-DE").format(`${producto.total ? producto.total : 0}`)}`}</td>
                                                            <td className="text-center m-0 p-0"> <button type="button" rel="tooltip" title="" className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral" data-original-title="Eliminar?" onClick={(e) => { deleteProducto(index); getDetallePago(e) }} id={index}>
                                                                <i id={index} className="now-ui-icons ui-1_simple-remove"></i>
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
                        <form onSubmit={postData}>
                            <div className="card">
                                <div className="card-body">
                                    <table className="table">
                                        <thead>
                                            <tr className=" table-hover">
                                                <th scope="col">
                                                    Documento
                                                </th>
                                                <div className="col-12 d-flex justify-content-start">
                                                    <div className="form-check m-0 mt-2 pl-0">
                                                        <label className="form-check-label p-0 align-middle pl-0" for="boleta">Boleta</label>
                                                        <input className="ml-1 mr-3 align-middle" type="radio" defaultChecked name="tipo_documento" id="boleta" onChange={getDetallePago} onClick={generarFolio} value="boleta" />
                                                        <label className="form-check-label p-0 align-middle pl-0" for="fact">Factura</label>
                                                        <input className="ml-1 mr-3 align-middle" type="radio" name="tipo_documento" id="fact" onChange={getDetallePago} onClick={generarFolio} value="factura" />
                                                    </div>
                                                </div>
                                            </tr>
                                            <tr className=" table-hover">
                                                <th scope="col">
                                                    Forma de Pago
                                                </th>
                                                <div className="col-12 d-flex justify-content-start">
                                                    <div className="form-check m-0 mt-2 pl-0">
                                                        <label className="form-check-label align-middle pl-0" for="transferencia">Transferencia</label>
                                                        <input className="ml-1 mr-3 align-middle" type="radio" name="forma_pago" id="transferencia" onChange={getDetallePago} value="transferencia" />
                                                        <label className="form-check-label align-middle pl-0" for="efectivo">Efectivo</label>
                                                        <input className="ml-1 mr-3 align-middle" type="radio" defaultChecked name="forma_pago" id="efectivo" onChange={getDetallePago} value="efectivo" />
                                                        <label className="form-check-label align-middle pl-0" for="tarjeta">Tarjeta</label>
                                                        <input className="ml-1 mr-3 align-middle" type="radio" name="forma_pago" id="tarjeta" onChange={getDetallePago} value="tarjeta" />
                                                    </div>
                                                </div>
                                            </tr>
                                            <tr className=" table-hover">
                                                <th scope="col">
                                                    N° Documento
                                                </th>
                                                <th scope="col">
                                                    <input type="text" name="numero_documento" aria-label="First name" className="form-control text-right pr-5" disabled value={state.datosVenta ? state.datosVenta.numero_documento : ""} value={`${new Intl.NumberFormat("de-DE").format(`${state.datosVenta ? state.datosVenta.numero_documento : ""}`)}`}/>
                                                </th>
                                            </tr>
                                            <tr className=" table-hover">
                                                <th scope="col">
                                                    Total Neto
                                                </th>
                                                <th scope="col">
                                                    <input type="text" name="monto_neto" aria-label="First name" className="form-control text-right pr-5" disabled value={`$ ${new Intl.NumberFormat("de-DE").format(`${state.datosVenta.monto_neto ? state.datosVenta.monto_neto : ""}`)}`}/>
                                                </th>
                                            </tr>
                                            <tr className=" table-hover">
                                                <th scope="col">
                                                    IVA 19%
                                                </th>
                                                <th scope="col">
                                                    <input type="text" name="monto_iva" aria-label="First name" className="form-control text-right pr-5" disabled value={`$ ${new Intl.NumberFormat("de-DE").format(`${state.datosVenta.monto_iva ? state.datosVenta.monto_iva : ""}`)}`}/>
                                                </th>
                                            </tr>
                                            <tr className=" table-hover">
                                                <th scope="col">
                                                    Total a pagar
                                                </th>
                                                <th scope="col">
                                                    <input type="text" name="monto_total" aria-label="First name" className="form-control text-right pr-5" disabled placeholder="Monto a Pagar" value={`$ ${new Intl.NumberFormat("de-DE").format(`${state.datosVenta.monto_total ? state.datosVenta.monto_total : ""} `)}`}/>
                                                </th>
                                            </tr>
                                            <tr className=" table-hover">
                                                <th scope="col">
                                                    Monto Recibido
                                                </th>
                                                <th scope="col">
                                                    <input type="text" name="monto_recibido" aria-label="First name" className="form-control text-right pr-5"  onChange={getDetallePago} value={state.datosVenta ? state.datosVenta.monto_recibido : ""} />
                                                </th>
                                            </tr>
                                            <tr className=" table-hover">
                                                <th scope="col">
                                                    Vuelto
                                                </th>
                                                <th scope="col">
                                                    <input type="text" name="vuelto" disabled aria-label="First name" className="form-control text-right pr-5" placeholder="Vuelto" value={`$ ${new Intl.NumberFormat("de-DE").format(`${state.datosVenta.vuelto ? state.datosVenta.vuelto : ""}`)}`} />
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                    <button className="btn btn-success btn-lg btn-block font-weight-bold">Generar venta</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default withRouter(IngresarVenta);
