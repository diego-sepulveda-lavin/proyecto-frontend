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
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageHeader
