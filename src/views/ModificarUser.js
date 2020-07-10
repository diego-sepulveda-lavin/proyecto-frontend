import React from 'react'
import '../css/now-ui-dashboard.css'
const ModificarUser = () => {
    return (
        <>
            <div className="wrapper ">
                <div className="sidebar" data-color="orange">
                    {/* <!--Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"--> */}
                    <div className="logo">
                        <a href="http://www.creative-tim.com" className="simple-text logo-mini">
                            CT
                        </a>
                        <a href="http://www.creative-tim.com" className="simple-text logo-normal">
                            Creative Tim
                        </a>
                    </div>
                    <div className="sidebar-wrapper" id="sidebar-wrapper">
                        <ul className="nav">
                            <li className="active ">
                                <a href="./dashboard.html">
                                    <i className="now-ui-icons design_app"></i>
                                    <p>Dashboard</p>
                                </a>
                            </li>
                            <li>
                                <a href="./icons.html">
                                    <i className="now-ui-icons education_atom"></i>
                                    <p>Icons</p>
                                </a>
                            </li>
                            <li>
                                <a href="./map.html">
                                    <i className="now-ui-icons location_map-big"></i>
                                    <p>Maps</p>
                                </a>
                            </li>
                            <li>
                                <a href="./notifications.html">
                                    <i className="now-ui-icons ui-1_bell-53"></i>
                                    <p>Notifications</p>
                                </a>
                            </li>
                            <li>
                                <a href="./user.html">
                                    <i className="now-ui-icons users_single-02"></i>
                                    <p>User Profile</p>
                                </a>
                            </li>
                            <li>
                                <a href="./tables.html">
                                    <i className="now-ui-icons design_bullet-list-67"></i>
                                    <p>Table List</p>
                                </a>
                            </li>
                            <li>
                                <a href="./typography.html">
                                    <i className="now-ui-icons text_caps-small"></i>
                                    <p>Typography</p>
                                </a>
                            </li>
                            <li className="active-pro">
                                <a href="./upgrade.html">
                                    <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                                    <p>Upgrade to PRO</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-panel" id="main-panel">
                    {/* <!-- Navbar --> */}
                    <nav className="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
                        <div className="container-fluid">
                            <div className="navbar-wrapper">
                                <div className="navbar-toggle">
                                    <button type="button" className="navbar-toggler">
                                        <span className="navbar-toggler-bar bar1"></span>
                                        <span className="navbar-toggler-bar bar2"></span>
                                        <span className="navbar-toggler-bar bar3"></span>
                                    </button>
                                </div>
                                <a className="navbar-brand" href="#pablo">Dashboard</a>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar navbar-kebab"></span>
                                <span className="navbar-toggler-bar navbar-kebab"></span>
                                <span className="navbar-toggler-bar navbar-kebab"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navigation">
                                <form>
                                    <div className="input-group no-border">
                                        <input type="text" className="form-control" placeholder="Search..." />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <i className="now-ui-icons ui-1_zoom-bold"></i>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <i className="now-ui-icons media-2_sound-wave"></i>
                                            <p>
                                                <span className="d-lg-none d-md-block">Stats</span>
                                            </p>
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="now-ui-icons location_world"></i>
                                            <p>
                                                <span className="d-lg-none d-md-block">Some Actions</span>
                                            </p>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <i className="now-ui-icons users_single-02"></i>
                                            <p>
                                                <span className="d-lg-none d-md-block">Account</span>
                                            </p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* <!-- End Navbar --> */}
                    <div className="panel-header panel-header-md">
                        {/* <canvas id="bigDashboardChart"></canvas> */}
                        <h2 className="text-white text-center">Administracion</h2>
                        <h3 className="text-white text-center">Modificar Usuario</h3>
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card card-chart">
                                    <div className="card-header">

                                        <div className="row d-flex justify-content-around">
                                            <div class="input-group col-md-6 ">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Fecha de Registro</span>
                                                </div>
                                                <input type="text" aria-label="First name" class="form-control" placeholder="aqui va la fecha" />
                                            </div>
                                            <div class="input-group col-md-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">User ID</span>
                                                </div>
                                                <input type="text" aria-label="First name" class="form-control" placeholder="aqui va el user ID" />
                                            </div>
                                            <div className="dropdown">
                                                <button type="button" className="btn btn-round btn-outline-default dropdown-toggle btn-simple btn-icon no-caret" data-toggle="dropdown">
                                                    <i className="now-ui-icons loader_gear"></i>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                    <a className="dropdown-item text-danger" href="#">Remove Data</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 d-flex justify-content-center">
                                                <img src="https://picsum.photos/id/102/200/300"></img>
                                            </div>
                                            <div className="col-md-8">
                                                <div className="row">
                                                    <div className="input-group col-md-12">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Nombre</span>
                                                        </div>
                                                        <input type="text" aria-label="First name" class="form-control" placeholder="aqui va el nombre" />
                                                    </div>
                                                    <div className="input-group col-md-12">

                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Apellido</span>
                                                        </div>
                                                        <input type="text" aria-label="First name" class="form-control" placeholder="aqui va el Apellido" />
                                                    </div>
                                                    <div className="input-group col-md-12">

                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">RUT</span>
                                                        </div>
                                                        <input type="text" aria-label="First name" class="form-control" placeholder="RUT" />
                                                    </div>
                                                    <div className="input-group col-md-12">

                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Puesto</span>
                                                        </div>
                                                        <input type="text" aria-label="First name" class="form-control" placeholder="PUESTO" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card-footer d-flex justify-content-end">
                                    <button type="button" class="btn btn-warning">Modificar Usuario</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div className=" container-fluid ">
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
                                &copy; {new Date().getFullYear()} Designed by <a href="https://www.invisionapp.com" target="_blank">Invision</a>. Coded by <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default ModificarUser
