import React, { useState, useContext } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Context } from '../../store/appContext';



const IngresarMail = (props) => {

    const { store, actions } = useContext(Context)


    //Inicializa objeto para contener datos de login
    const [nuevaPassword, setNuevaPassword] = useState({})
    const [mensaje, setMensaje] = useState("Crea una nueva contraseña")

    //captura datos login desde input y los asigna a state
    const handleChange = e => {
        let capturedInfo = {
            [e.target.name]: e.target.value
        }
        setNuevaPassword(prevState => {

            return { ...prevState, ...capturedInfo };
        });
    }

    //previene submit del formulario al presionar enviar y llama a recuperarEmail para autentificar con el server
    const handleSubmit = e => {
        e.preventDefault()
        recuperarEmail()
    }

    //genera fetch tipo POST con datos de formulario
    const recuperarEmail = async () => {
        try {
            sessionStorage.setItem('temp_token', props.match.params.token)

            const token = sessionStorage.getItem('temp_token');
            let headersContent = { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }

            let bodyContent = JSON.stringify(nuevaPassword);

            let requestOptions = {
                method: 'PUT',
                headers: headersContent,
                body: bodyContent,
            };

            const resp = await fetch(`http://localhost:5000/api/nueva-password/`, requestOptions)
            const result = await resp.json()
            
            setMensaje(result.msg)
            if (resp.status == 200){
                sessionStorage.removeItem('temp_token')
                setTimeout(()=> props.history.push("/"),3000)
                
            }

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className="content">
                <div className="container">
                    <div className="col-md-4 ml-auto mr-auto">
                        <div className="card card-login card-plain">
                            <form className="form" onSubmit={handleSubmit} autoComplete="off">
                                <div className="card-header text-center">
                                    <div className="logo-container">
                                        <img src="../assets/img/new-logo.png" alt="" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="input-group no-border input-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="now-ui-icons users_circle-08"></i>
                                            </span>
                                        </div>
                                        <input type="password" className="form-control" name="password" placeholder="Nueva contraseña" onChange={handleChange} />
                                    </div>
                                    <div className="input-group no-border input-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="now-ui-icons users_circle-08"></i>
                                            </span>
                                        </div>
                                        <input type="password" className="form-control" name="repassword" placeholder="Repetir nueva contraseña" onChange={handleChange} />
                                    </div>
                                    <div>
                                        <h6>{mensaje}</h6>
                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-primary btn-round btn-lg btn-block">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(IngresarMail);
