import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { withRouter } from 'react-router-dom';
const CreateUser = (props) => {

    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.validaLogin(props)
    }, [])


    const [state, setState] = useState({
        nombre: "",
        apellido: "",
        rut: "",
        email: "",
        rut: "",
        rol: "",
        password: "",
        repassword: "",
        foto:""
    })

    const[imagen, setImagen] = useState={
        imageURL: null,
        MensajesRecibidos: []
    }


    getDataUsuarioFoto: e => {
        console.log(e.target.files[0])
       
        //const { creacionUsuario } = store;
        const creacionUsuario = state;
        state.foto = e.target.files[0]

        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = function (e) {
            setStore({ creacionUsuario: creacionUsuario, imageURL: [reader.result] })
        };
        setStore({ creacionUsuario: creacionUsuario })
        //{ ...prevState, ...data } Esto con el state, arriba con el contextapp
    },


    const getInformacion = e => {
        let data = {
            [e.target.name]: e.target.value
        }
        setState(prevState => {
            return { ...prevState, ...data }
        })
    }

    const enviarFormulario = e => {
        e.preventDefault()
        actions.postUsuario("/usuarios", state, setState, "Usuario")
        actions.getFetch("/usuarios", "Usuario")
    }


    return (
        <>
            <form id="creacionUsuario" onSubmit={enviarFormulario} >
                <div className="panel-header panel-header-md">
                    {/* <canvas id="bigDashboardChart"></canvas> */}
                    <h1 className="text-warning text-center">Administracion</h1>
                    <h3 className="text-info text-center">Crear Usuario</h3>
                </div>
                <div className="content">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-11 offset-md">
                            <form>
                                <div className="card card-chart">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-4 d-flex justify-content-center">
                                                <img className="rounded-circle img-fluid img-raised" style={{ height: "350px" }}
                                                    src={store.imageURL !== null ? store.imageURL : "../user-icon-vector.jpg"}></img>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="row">
                                                    <div className="input-group col-md-12">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Nombre</span>
                                                        </div>
                                                        <input type="text" name="nombre" class="form-control" value={`${state != "" ? state.nombre : ""}`} onChange={getInformacion} />
                                                    </div>
                                                    <div className="input-group col-md-12">

                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Apellido</span>
                                                        </div>
                                                        <input type="text" name="apellido" class="form-control" value={`${state != "" ? state.apellido : ""}`} onChange={getInformacion} />
                                                    </div>
                                                    <div className="input-group col-md-12">

                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">RUT</span>
                                                        </div>
                                                        <input type="text" name="rut" class="form-control" placeholder="17355681-2" value={`${state != "" ? state.rut : ""}`} onChange={getInformacion} />
                                                    </div>
                                                    <div className="input-group col-md-12">

                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Email</span>
                                                        </div>
                                                        <input type="email" name="email" class="form-control" value={`${state != "" ? state.email : ""}`} onChange={getInformacion} />
                                                    </div>
                                                    <div className="input-group col-md-12">

                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Rol</span>
                                                        </div>
                                                        <input type="text" name="rol" class="form-control" value={`${state != "" ? state.rol : ""}`} onChange={getInformacion} />
                                                    </div>
                                                    <div className="input-group col-md-12">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Password</span>
                                                        </div>
                                                        <input type="password" name="password" class="form-control" value={`${state != "" ? state.password : ""}`} onChange={getInformacion} />
                                                    </div>
                                                    <div className="input-group col-md-12">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Confirmación Password</span>
                                                        </div>
                                                        <input type="password" name="repassword" class="form-control" value={`${state != "" ? state.repassword : ""}`} onChange={getInformacion} />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-5 offset-md-5">
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" name="foto" onChange={getInformacionFoto} />
                                                        <label class="custom-file-label" for="inputGroupFile03">File</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card-footer d-flex justify-content-end">
                                        <button class="btn btn-success ">Crear Usuario</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </form>
        </>
    )
}

export default withRouter(CreateUser);
