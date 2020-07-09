import React from 'react'

const ContactUs = () => {
    return (
        <>
            <div className="section section-contact-us text-center">
                <div className="container">
                    <h2 className="title">Te interesan nuestros servicios?</h2>
                    <p className="description">Tu negocio es importante para nosotros.</p>
                    <div className="row">
                        <div className="col-lg-6 text-center col-md-8 ml-auto mr-auto">
                            <div className="input-group input-lg">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="now-ui-icons users_circle-08"></i>
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Nombre Completo" />
                            </div>
                            <div className="input-group input-lg">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="now-ui-icons ui-1_email-85"></i>
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Email" />
                            </div>
                            <div className="textarea-container">
                                <textarea className="form-control" name="name" rows="4" cols="80" placeholder="Escríbenos tu consulta.."></textarea>
                            </div>
                            <div className="send-button">
                                <a href="#pablo" className="btn btn-primary btn-round btn-block btn-lg">Enviar Mensaje</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
