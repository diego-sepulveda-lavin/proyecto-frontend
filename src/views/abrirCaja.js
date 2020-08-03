import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { withRouter } from "react-router-dom";



const AbrirCaja = props => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)


    }, [])

    const [state, setState] = useState({
        codigo: "",
        hora_inicio: "",
        fecha: "",
        monto_inicial: "",
        administrador: "",
        password: ""
    })
    const [montoI, setMontoI] = useState({
        monto_inicial: ""
    })

/*     const getMonto = e=>{
        setMontoI({[e.target.name]: e.target.value})
    } */

    const getInformacion = (e) => {
        let data = {
            [e.target.name]: e.target.value
        }
        setState(prevState => {
            return { ...prevState, ...data }
        })
    }

    const enviarFormulario = (e) => {
        e.preventDefault();
        if (!state.hora_inicio || !state.fecha || !state.monto_inicial)
            actions.validaCaja("/valida-Caja", state, props, false)
        else actions.validaCaja("/valida-Caja", state, props)
    }

    var f = new Intl.NumberFormat('es-CL', {  
        currency: 'CLP',
        //document.write(f.format(2512300));
      });
        

    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Ventas</h1>
                <h3 className="text-info text-center">Abrir Caja</h3>
            </div>
            <div className="content mt-2">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header col-md-12">
                                <div className="alert alert-info rounded">
                                    <h5 className="title p-1">Precaución!</h5>
                                    <p>Recuerde que al abrir caja logeado con su ID, se hace responsable por el monto inicial y los
                                            movimientos que tenga durante el periodo de trabajo.</p>
                                </div>

                            </div>
                            <form onSubmit={enviarFormulario}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Nombre de usuario</label>
                                                <input type="text" name="codigo" className="form-control" value={store.usuarioActivo ? store.usuarioActivo.codigo : ""} onChange={getInformacion} />
                                            </div>
                                        </div>
                                        <div className="col-md-4 offset-md-3">
                                            <div className="form-group">
                                                <label>Código Administrador</label>
                                                <input type="text" name="administrador" className="form-control" placeholder="" onChange={getInformacion} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Hora Inicio</label>
                                                <input type="time" name="hora_inicio" className="form-control" placeholder="" onChange={getInformacion} />
                                            </div>
                                        </div>
                                        <div className="col-md-4 offset-md-3">
                                            <div className="form-group">
                                                <label>Clave</label>
                                                <input type="password" name="password" className="form-control" placeholder="" onChange={getInformacion} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Fecha</label>
                                                <input type="date" name="fecha" className="form-control" onChange={getInformacion} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label>Monto inicial</label>
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1">$</span>
                                                    </div>
                                                    <input type="text" name="monto_inicial" className="form-control" aria-describedby="basic-addon1" onChange={getInformacion} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success btn-block">Abrir Caja</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(AbrirCaja);