import React from 'react'
import '../css/now-ui-kit.css'

const LandingPage = () => {
    return (
        <>
            <div className="landing-page sidebar-collapse">
                {/* <!-- Navbar --> */}
                <nav className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
                    <div className="container">
                        <div className="dropdown button-dropdown">
                            <a href="#pablo" className="dropdown-toggle" id="navbarDropdown" data-toggle="dropdown">
                                <span className="button-bar"></span>
                                <span className="button-bar"></span>
                                <span className="button-bar"></span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-header">Dropdown header</a>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">One more separated link</a>
                            </div>
                        </div>
                        <div className="navbar-translate">
                            <a className="navbar-brand" href="https://demos.creative-tim.com/now-ui-kit/index.html" rel="tooltip" title="Designed by Invision. Coded by Creative Tim" data-placement="bottom" target="_blank">
                                Now Ui Kit
                            </a>
                            <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar top-bar"></span>
                                <span className="navbar-toggler-bar middle-bar"></span>
                                <span className="navbar-toggler-bar bottom-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="../assets/img/blurred-image-1.jpg">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="../index.html">Back to Kit</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://github.com/creativetimofficial/now-ui-kit/issues">Have an issue?</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank">
                                        <i className="fab fa-twitter"></i>
                                        <p className="d-lg-none d-xl-none">Twitter</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank">
                                        <i className="fab fa-facebook-square"></i>
                                        <p className="d-lg-none d-xl-none">Facebook</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank">
                                        <i className="fab fa-instagram"></i>
                                        <p className="d-lg-none d-xl-none">Instagram</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <!-- End Navbar --> */}
                <div className="wrapper">
                    <div className="page-header page-header-small">
                        <div className="page-header-image" data-parallax="true" style={{ "backgroundImage": "url('../assets/img/bg6.jpg')" }}>
                        </div>
                        <div className="content-center">
                            <div className="container">
                                <h1 className="title">This is our great company.</h1>
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
                    <div className="section section-about-us">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 ml-auto mr-auto text-center">
                                    <h2 className="title">Who we are?</h2>
                                    <h5 className="description">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</h5>
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
                    <div className="section section-team text-center">
                        <div className="container">
                            <h2 className="title">Here is our team</h2>
                            <div className="team">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="team-player">
                                            <img src="../assets/img/avatar.jpg" alt="Thumbnail Image" className="rounded-circle img-fluid img-raised" />
                                            <h4 className="title">Romina Hadid</h4>
                                            <p className="category text-primary">Model</p>
                                            <p className="description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some
                                            <a href="#">links</a> for people to be able to follow them outside the site.</p>
                                            <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-twitter"></i></a>
                                            <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-instagram"></i></a>
                                            <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-facebook-square"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="team-player">
                                            <img src="../assets/img/ryan.jpg" alt="Thumbnail Image" className="rounded-circle img-fluid img-raised" />
                                            <h4 className="title">Ryan Tompson</h4>
                                            <p className="category text-primary">Designer</p>
                                            <p className="description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some
                                            <a href="#">links</a> for people to be able to follow them outside the site.</p>
                                            <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-twitter"></i></a>
                                            <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="team-player">
                                            <img src="../assets/img/eva.jpg" alt="Thumbnail Image" className="rounded-circle img-fluid img-raised" />
                                            <h4 className="title">Eva Jenner</h4>
                                            <p className="category text-primary">Fashion</p>
                                            <p className="description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some
                                            <a href="#">links</a> for people to be able to follow them outside the site.</p>
                                            <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-google-plus"></i></a>
                                            <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-youtube"></i></a>
                                            <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-twitter"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section section-contact-us text-center">
                        <div className="container">
                            <h2 className="title">Want to work with us?</h2>
                            <p className="description">Your project is very important to us.</p>
                            <div className="row">
                                <div className="col-lg-6 text-center col-md-8 ml-auto mr-auto">
                                    <div className="input-group input-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="now-ui-icons users_circle-08"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="First Name..." />
                                    </div>
                                    <div className="input-group input-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="now-ui-icons ui-1_email-85"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Email..." />
                                    </div>
                                    <div className="textarea-container">
                                        <textarea className="form-control" name="name" rows="4" cols="80" placeholder="Type a message..."></textarea>
                                    </div>
                                    <div className="send-button">
                                        <a href="#pablo" className="btn btn-primary btn-round btn-block btn-lg">Send Message</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer footer-default">
                        <div className=" container ">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="https://www.creative-tim.com">
                                            Creative Tim
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://presentation.creative-tim.com">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://blog.creative-tim.com">
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="copyright" id="copyright">
                                &copy; {new Date().getFullYear()} Designed by
                                <a href="https://www.invisionapp.com" target="_blank">Invision</a>. Coded by
                                <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default LandingPage
