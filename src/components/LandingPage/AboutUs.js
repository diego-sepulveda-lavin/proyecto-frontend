import React from 'react'

const AboutUs = () => {
    return (
        <>
            <div className="section section-about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 ml-auto mr-auto text-center">
                            <h2 className="title">Que es DSHL ?</h2>
                            <h5 className="description">Te invitamos a conocer nuestro software para la gestión de tu PYME. Con él podrás llevar control de tus ventas, como además gestionar tu stock de manera simple y veloz.</h5>
                        </div>
                    </div>
                    <div className="separator separator-primary"></div>
                    <div className="section-story-overview">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="image-container image-left" style={{ "backgroundImage": "url('../assets/img/login.jpg')" }}>
                                    {/* <!-- First image on the left side --> */}
                                    <p className="blockquote blockquote-primary">"Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly"
                                            <br />
                                        <br />
                                        <small>-NOAA</small>
                                    </p>
                                </div>
                                {/* <!-- Second image on the left side of the article --> */}
                                <div className="image-container" style={{ "backgroundImage": "url('../assets/img/bg3.jpg')" }}></div>
                            </div>
                            <div className="col-md-5">
                                {/* <!-- First image on the right side, above the article --> */}
                                <div className="image-container image-right" style={{ "backgroundImage": "url('../assets/img/bg1.jpg')" }}></div>
                                <h3>So what does the new record for the lowest level of winter ice actually mean</h3>
                                <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
                                </p>
                                <p>
                                    For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.
                                </p>
                                <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
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
