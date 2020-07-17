import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';

const CrearEmpresa = () => {

    const { store, actions } = useContext(Context);
    const [state, setState] = useState({

    });
    useEffect(() => {

    }, []);

    const handleChange = (e) => {
        console.log(e.target.value);
        let data = {
            [e.target.name]: e.target.value
        }
        setState(prevState => {
            return { ...prevState, ...data }
        })
    }
    
    const handleClick = e => {
        if(!state.nombre || !state.rut || !state.razon_social || !state.rubro){
            console.log("Faltan datos para realizar Fetch")
        } else {
            actions.postEmpresas(state)
            console.log(state)
        }
    }

    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">Empresas</h1>
                <h3 className="text-info text-center">Crear nuevo registro</h3>
            </div>
            <div className="content mt-2">
                <div className="row ">
                    <div className="col-md-12">
                        <form onSubmit={(e) => e.preventDefault()} >
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table" >
                                            <thead className=" text-primary ">
                                                <th className="align-middle text-center">
                                                    Nombre
                                                    </th>
                                                <th className="align-middle text-center">
                                                    RUT
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Razón Social
                                                    </th>
                                                <th className="align-middle text-center">
                                                    Rubro
                                                    </th>
                                            </thead>
                                            <tbody>
                                                <>
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <input type="text" class="form-control" placeholder="Nombre" name="nombre" aria-describedby="basic-addon1" onChange={handleChange} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="text" class="form-control" placeholder="Rut" name="rut" aria-describedby="basic-addon1" onChange={handleChange} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="text" class="form-control" placeholder="Razón Social" name="razon_social" aria-describedby="basic-addon1" onChange={handleChange} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input type="text" class="form-control" placeholder="Rubro" name="rubro" aria-describedby="basic-addon1" onChange={handleChange} />
                                                        </td>
                                                    </tr>
                                                </>
                                            </tbody>
                                        </table>
                                        <div className="col-12 d-flex justify-content-end">
                                            <button type="submit" class="btn btn-primary" name="Crear_Empresa" onClick={handleClick}>Crear Empresa</button>
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
export default CrearEmpresa;