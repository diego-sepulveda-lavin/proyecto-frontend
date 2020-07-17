import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const EditarEmpresa = (props) => {
    const { store, actions } = useContext(Context);
    const [state, setState] = useState({
    });

    const putEmpresa = (data) => {
        let raw = JSON.stringify(data);
        let requestOptions = {
            method: 'PUT',
            body: raw,
            headers : {
                "content-type" : "application/json"
            }
        };

        fetch(`http://localhost:5000/api/empresas/${store.empresas[props.match.params.index].id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .then(result => actions.getEmpresas())
            .catch(error => console.log('error', error));
    }

    const handleChange = (e) => {
        let data = {
            [e.target.name]: e.target.value,
        };
        setState(prevState => {
            return { ...prevState, ...data }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        putEmpresa(state)
    }

    if (store.empresas != null) {

        return (
            <>
                <div className="panel-header panel-header-md">
                    <h1 className="text-warning text-center">Empresas</h1>
                    <h3 className="text-info text-center">Editar Empresa</h3>
                </div>
                <div className="content mt-2">
                    <div className="row ">
                        <div className="col-md-12">
                            <form onSubmit={handleSubmit}  >
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
                                                    <tr>
                                                        <td className="align-middle text-center">
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                placeholder={store.empresas[props.match.params.index].nombre}
                                                                name="nombre"
                                                                aria-describedby="basic-addon1"
                                                                onChange={handleChange} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input

                                                                type="text" class="form-control"
                                                                placeholder={store.empresas[props.match.params.index].rut}
                                                                name="rut"
                                                                aria-describedby="basic-addon1" 
                                                             onChange={handleChange} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                placeholder={store.empresas[props.match.params.index].razon_social}
                                                                name="razon_social"
                                                                aria-describedby="basic-addon1"
                                                                onChange={handleChange} />
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <input
                                                                type="text" class="form-control"
                                                                placeholder={store.empresas[props.match.params.index].rubro}
                                                                name="rubro"
                                                                aria-describedby="basic-addon1"
                                                                onChange={handleChange} />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="col-12 d-flex justify-content-end">
                                                <button class="btn btn-primary" name="Editar_Empresa">Editar Empresa</button>
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


    } else {

        return (
            <>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>

            </>
        )
    }

}


export default EditarEmpresa;