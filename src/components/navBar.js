import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = props => {

    const [isAuth, setIsAuth] = useState(null)


    const checkAuth = () => {
        const token = sessionStorage.getItem('access_token');
        if (token) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }

    const removeAuth = () => {
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('user');

        setIsAuth(false)
    }

    useEffect(() => {
        checkAuth()
    }, []);

    return (
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
                    {/*    <a className="navbar-brand" href="#">Dashboard</a> */}
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navigation">

                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="now-ui-icons users_single-02"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                {
                                    isAuth ?
                                        (<Link className="dropdown-item" to="/" onClick={removeAuth}>Logout</Link>)
                                        :
                                        (<Link className="dropdown-item" to="/login">Login</Link>)
                                } 
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;