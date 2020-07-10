import React from "react"
import { Link } from "react-router-dom";

const Footer = props => {
    return (
        <>
            <footer className="footer">
                <div className=" container-fluid ">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="copyright" id="copyright">
                        &copy; {new Date().getFullYear()} Diseñado y Desarrollado por DSHL
                            </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;