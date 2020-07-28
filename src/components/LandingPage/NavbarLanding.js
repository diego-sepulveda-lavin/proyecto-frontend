import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'


const NavbarLanding = () => {

    const [isAuth, setIsAuth] = useState(null)


    const checkAuth = () =>{
        const token = sessionStorage.getItem('access_token');
        if (token){
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }

    const removeAuth = () => {
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('user')
        setIsAuth(false)
    }

    useEffect(() => {
        checkAuth()
    }, []);


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent " color-on-scroll="400">
                <div className="container">
                    <div className="navbar-translate">
                        <a href="#" className="navbar-brand" rel="tooltip" data-placement="bottom">
                            Menu
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
                                {
                                    isAuth?
                                    (<Link className="nav-link" to="/" onClick={removeAuth}>Logout</Link>)
                                    :
                                    (<Link className="nav-link" to="/login">Login</Link>)
                                }
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="Síguenos en Twitter" data-placement="bottom" href="#">
                                    <i className="fab fa-twitter"></i>
                                    <p className="d-lg-none d-xl-none">Twitter</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="Danos me gusta en Facebook" data-placement="bottom" href="#">
                                    <i className="fab fa-facebook-square"></i>
                                    <p className="d-lg-none d-xl-none">Facebook</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" rel="tooltip" title="Síguenos en Instagram" data-placement="bottom" href="#">
                                    <i className="fab fa-instagram"></i>
                                    <p className="d-lg-none d-xl-none">Instagram</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarLanding
