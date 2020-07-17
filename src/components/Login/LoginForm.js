import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'


const LoginForm = (props) => {
    console.log("AAAAAAAAAAAA");
    console.log(props)
    
    //Inicializa objeto para contener datos de login
    const [loginCredentials, setLoginCredentials] = useState({})
    const [mensaje, setMensaje] = useState("Ingresa tus credenciales")

    //captura datos login desde input y los asigna a state
    const handleChange = e => {
        let capturedCredentials = {
            [e.target.name]: e.target.value
        }
        setLoginCredentials(prevState => {

            return { ...prevState, ...capturedCredentials };
        });
    }

    //previene submit del formulario al presionar enviar y llama a login para autentificar con el server
    const handleSubmit = e => {
        e.preventDefault()
        login()
    }

    //genera fetch tipo POST con datos de login
    const login = async () => {
        try {
            let bodyContent = JSON.stringify(loginCredentials);

            let requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: bodyContent,
            };

            const resp = await fetch('http://localhost:5000/api/login', requestOptions)
            const result = await resp.json()
            if (result.access_token) {
                localStorage.setItem('access_token', result.access_token);
                props.history.push("/dashboard")
            }
            setMensaje(result.msg)

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
                                        <input type="text" className="form-control" name="email" placeholder="Email" onChange={handleChange} />
                                    </div>
                                    <div className="input-group no-border input-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="now-ui-icons text_caps-small"></i>
                                            </span>
                                        </div>
                                        <input type="password" className="form-control" name="password" placeholder="Contraseña" onChange={handleChange} />
                                    </div>
                                    <div>
                                        <h6>{mensaje}</h6>
                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-primary btn-round btn-lg btn-block">Login</button>
                                    <div className="mt-2">
                                        <h6>
                                            <a href="#pablo" className="link">Crear Cuenta</a>
                                        </h6>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(LoginForm);
