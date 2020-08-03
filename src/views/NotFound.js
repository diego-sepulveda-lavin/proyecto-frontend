import React from "react";

const NotFound = () => {

    return (
        <>
            <div className="panel-header panel-header-md">
                <h1 className="text-warning text-center">404</h1>
                <h3 className="text-info text-center">Not Found</h3>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default NotFound;