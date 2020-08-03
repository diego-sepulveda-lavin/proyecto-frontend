import React, { useState } from 'react'

const ContactUs = () => {

    const [datosAEnviar, setDatosAEnviar] = useState({
        nombre: "",
        email: "",
        consulta: ""
    })
    const [mensaje, setMensaje] = useState({
        msg: null,
    })
    const [flag, setFlag] = useState(false)

    const handleChange = e => {
        let capturaDatos = {
            [e.target.name]: e.target.value
        }
        setDatosAEnviar(prevState => {

            return { ...prevState, ...capturaDatos };
        });
    }

    const handleSubmit = e => {
        e.preventDefault()
        enviarMail()
    }

    const enviarMail = async () => {
        setFlag(true)
        try {
            let bodyContent = JSON.stringify(datosAEnviar);

            let requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: bodyContent,
            };

            const resp = await fetch('http://localhost:5000/api/email', requestOptions)
            const result = await resp.json()

            setMensaje(prevState => {
                return { ...result }
            })

            if (resp.status == 200) {
                setDatosAEnviar({
                    nombre: "",
                    email: "",
                    consulta: ""
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="section section-contact-us text-center">
                <div className="container">
                    <h2 className="title">Te interesan nuestros servicios?</h2>
                    <p className="description">Tu negocio es importante para nosotros.</p>
                    <div className="row">
                        <div className="col-lg-6 text-center col-md-8 ml-auto mr-auto">
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <div className="input-group input-lg">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="now-ui-icons users_circle-08"></i>
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" name="nombre" value={datosAEnviar.nombre} onChange={handleChange} placeholder="Nombre Completo" />
                                </div>
                                <div className="input-group input-lg">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="now-ui-icons ui-1_email-85"></i>
                                        </span>
                                    </div>
                                    <input type="email" className="form-control" name="email" value={datosAEnviar.email} onChange={handleChange} placeholder="Email" />
                                </div>
                                <div className="textarea-container">
                                    <textarea className="form-control" rows="4" cols="80" name="consulta" value={datosAEnviar.consulta} onChange={handleChange} placeholder="Escríbenos tu consulta.."></textarea>
                                </div>
                                <div className="send-button">
                                    <button className="btn btn-primary btn-round btn-block btn-lg">Enviar Mensaje</button>
                                    {
                                        //1.- Pregunto si flag esta en true
                                        //2.- Pregunto si mensaje.msg es null, si es asi muestro el icono, sino muestro mensaje.msg
                                        flag ? mensaje.msg === null ?
                                            (<i className="now-ui-icons loader_refresh spin"></i>)
                                            :
                                            (<p>{mensaje.msg}</p>)
                                            :
                                            ("")
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
