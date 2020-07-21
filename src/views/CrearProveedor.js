import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Context } from '../store/appContext';



const CrearProveedor = (props) => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.validaLogin(props)

    }, [])



    const [state, setState] = useState({

        nombre: null,
        rut: null,
        razon_social: null,
        rubro: null,
        direccion: null,
        cuenta_corriente: null,
        banco: null,

    })

    const getInformacion = (e) => {
        let infoCapturada = {
            [e.target.name]: e.target.value
        }
        setState(prevState => {

            return { ...prevState, ...infoCapturada };
        });
    }

    const handleSubmit = e => {
        e.preventDefault()
        actions.postFetch("/proveedores", state, setState, "Proveedor")

    }


    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Proveedores</h1>
                <h3 className="text-info text-center">Crear Proveedor</h3>
            </div>
            <div className="content mt-2">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-11 ">
                        <form onSubmit={handleSubmit}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead className=" text-primary">
                                                <th className="align-middle text-center">
                                                    Nombre
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Rut
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Razon Social
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Rubro
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Dirección
                                                    </th>
                                                <th className="align-middle text-center">
                                                Cuenta Corriente
                                                </th>
                                                <th className="align-middle text-center">
                                                Banco
                                                </th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="align-middle text-center">
                                                        <input type="text" name="nombre" className="form-control" aria-describedby="basic-addon1" placeholder="Nombre" onChange={getInformacion} value={!state.nombre ? "" : state.nombre} />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" name="rut" className="form-control" aria-describedby="basic-addon1" placeholder="RUT" onChange={getInformacion} value={!state.rut ? "" : state.rut} />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" name="razon_social" className="form-control" aria-describedby="basic-addon1" placeholder="Razón Social" onChange={getInformacion} value={!state.razon_social ? "" : state.razon_social} />
                                                    </td>

                                                    <td className="align-middle text-center">
                                                        <input type="text" name="rubro" className="form-control" aria-describedby="basic-addon1" placeholder="Rubro" onChange={getInformacion} value={!state.rubro ? "" : state.rubro} />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" name="direccion" className="form-control" aria-describedby="basic-addon1" placeholder="Dirección" onChange={getInformacion} value={!state.direccion ? "" : state.direccion} />
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <input type="text" name="cuenta_corriente" className="form-control" aria-describedby="basic-addon1" placeholder="Cuenta corriente" onChange={getInformacion} value={!state.cuenta_corriente ? "" : state.cuenta_corriente} />
                                                    </td>
                                                    
                                                    <td className="align-middle text-center">
                                                        <select className="form-control" name="banco" value={!state.banco ? "" : state.banco} onChange={getInformacion}>
                                                            <option value="" disabled>Seleccionar</option>
                                                            <option value="BANCO DE CHILE">BANCO DE CHILE</option>
                                                            <option value="BANCO INTERNACIONAL">BANCO INTERNACIONAL</option>
                                                            <option value="SCOTIABANK CHILE">SCOTIABANK CHILE</option>
                                                            <option value="BANCO DE CREDITO E INVERSIONES">BANCO DE CREDITO E INVERSIONES</option> 
                                                            <option value="BANCO BICE">BANCO BICE</option>
                                                            <option value="HSBC BANK">HSBC BANK</option>
                                                            <option value="BANCO SANTANDER-CHILE">BANCO SANTANDER-CHILE</option>
                                                            <option value="ITAÚ CORPBANCA">ITAÚ CORPBANCA</option>
                                                            <option value="BANCO SECURITY">BANCO SECURITY</option>
                                                            <option value="BANCO FALABELLA">BANCO FALABELLA</option>
                                                            <option value="BANCO RIPLEY">BANCO RIPLEY</option>
                                                            <option value="BANCO CONSORCIO">BANCO CONSORCIO</option>
                                                            <option value="SCOTIABANK AZUL">SCOTIABANK AZUL</option>
                                                            <option value="BANCO BTG PACTUAL CHILE">BANCO BTG PACTUAL CHILE</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="col-12 d-flex justify-content-end">
                                        <button className="btn btn-success">Crear Proveedor</button>
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
export default withRouter(CrearProveedor);