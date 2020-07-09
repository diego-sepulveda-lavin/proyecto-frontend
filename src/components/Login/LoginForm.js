import React from 'react'

const LoginForm = () => {
    return (
        <>
            <div className="content">
                <div className="container">
                    <div className="col-md-4 ml-auto mr-auto">
                        <div className="card card-login card-plain">
                            <form className="form" method="" action="">
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
                                        <input type="text" className="form-control" placeholder="Nombre de usuario" />
                                    </div>
                                    <div className="input-group no-border input-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="now-ui-icons text_caps-small"></i>
                                            </span>
                                        </div>
                                        <input type="password" placeholder="Contraseña" className="form-control" />
                                    </div>
                                </div>
                                <div className="card-footer text-center">
                                    <a href="#pablo" className="btn btn-primary btn-round btn-lg btn-block">Login</a>
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

export default LoginForm
