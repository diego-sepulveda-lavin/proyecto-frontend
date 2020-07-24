import React from 'react'

const AboutUs = () => {
    return (
        <>
            <div className="section section-about-us p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 ml-auto mr-auto text-center">
                            <h2 className="title">Que es DSHL ?</h2>
                            <h5 className="description">Te invitamos a conocer nuestro software para la gestión de tu PYME, con él podrás llevar control de tus ventas, como además gestionar tu stock de manera simple y veloz.</h5>
                        </div>
                    </div>
                    <div className="separator separator-primary"></div>
                    <div className="section-story-overview">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="image-container image-left" style={{ "backgroundImage": "url('../assets/img/graficos.jpg')" }}>
                                    {/* <!-- First image on the left side --> */}
                                    <p className="blockquote blockquote-primary text-justify">"Con DSHL, me he podido concentrar mucho más en hacer nuevos negocios, ya que gracias a su modulo de ventas y stock, la gestión de mi pyme se ha facilitado muchísimo."
                                            <br />
                                        <br />
                                        <small>Pedro Machuca   <br /> VendoLibros, Temuco</small>
                                    </p>
                                </div>
                                {/* <!-- Second image on the left side of the article --> */}
                                <div className="image-container" style={{ "backgroundImage": "url('../assets/img/cierre_caja.jpg')" }}></div>
                            </div>
                            <div className="col-md-5">
                                {/* <!-- First image on the right side, above the article --> */}
                                <div className="image-container image-right" style={{ "backgroundImage": "url('../assets/img/stock.jpg')" }}></div>
                                <h3 className="mt-5 text-justify">No te quedes en el pasado y dale la oportunidad de crecer a tu negocio</h3>
                                <p>No es un secreto que para muchas pymes, tareas esenciales como llevar control de las ventas e inventario, son importantísimas para su sustentabilidad en el tiempo.
                                </p>
                                <p className="text-justify">
                                    Pero para poder tomar decisiones correctas, se necesita información fidedigna, la cual no es siempre fácil de obtener, requiriendo de bastante tiempo y esfuerzo para mantener actualizada.
                                </p>
                                <p className="text-justify">Ya no esperes más y déjanos la tarea de llevar esta información por ti. Con DSHL podrás controlar tus ventas, cuadraturas de caja, niveles de stock, proveedores, como además de diversos reportes, los cuales facilitaran la gestión de tu empresa y así permitir que te enfoques en hacer crecer tu negocio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
