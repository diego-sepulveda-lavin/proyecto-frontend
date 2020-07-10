import React from "react"
import NavBar from "../components/navBar";
import MenuLateral from "../components/menuLateral";
import Footer from "../components/footer";


const AbrirCaja = props => {
    return (
        <div className="wrapper ">
            <MenuLateral />
            <div className="main-panel" id="main-panel">
                {/* <!-- Navbar --> */}
                <NavBar />
                {/* <!-- End Navbar --> */}
                <div className="panel-header panel-header-md">
                    <h1 className="text-warning text-center">Ventas</h1>
                    <h3 className="text-info text-center">Abrir Caja</h3>
                </div>
                <div className="content mt-2">

                    <div class="row">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-header col-md-5">
                                    <div class="alert alert-info rounded">
                                        <h5 class="title">Atención!</h5>
                                        <p>blablabla? si bla bla blu? bla bla</p>
                                    </div>


                                </div>
                                <div class="card-body">
                                    <form>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Nombre de usuario</label>
                                                    <input type="text" class="form-control" placeholder="" />
                                                </div>
                                            </div>


                                        </div>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Hora Inicio</label>
                                                    <input type="time" class="form-control" placeholder="" />
                                                </div>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Fecha</label>
                                                    <input type="date" class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label>Monto inicial</label>
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="basic-addon1">$</span>
                                                        </div>
                                                        <input type="text" class="form-control" aria-describedby="basic-addon1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                                <div className="card-footer">
                                    <button type="button" class="btn btn-success btn-block">Abrir Caja</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )


}

export default AbrirCaja;