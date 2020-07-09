import React from 'react'

const PageHeader = () => {
    return (
        <>
            <div className="page-header page-header-small">
                <div className="page-header-image" data-parallax="true" style={{ "backgroundImage": "url('../assets/img/business.jpg')" }}>
                </div>
                <div className="content-center">
                    <div className="container">
                        <h1 className="title">DSHL - Software Control de Stock y Punto de Venta</h1>
                        <h2 className="title">Soluciones para tu PYME</h2>

                        <div className="text-center">
                            <a href="#pablo" className="btn btn-primary btn-icon btn-round">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                            <a href="#pablo" className="btn btn-primary btn-icon btn-round">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#pablo" className="btn btn-primary btn-icon btn-round">
                                <i className="fab fa-google-plus"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageHeader
