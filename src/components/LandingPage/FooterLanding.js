import React from 'react'
import {Link} from 'react-router-dom'

const FooterLanding = (props) => {
    return (
        <>
            <footer className={props.estilo}>
                <div className=" container ">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="copyright" id="copyright">
                        &copy; {new Date().getFullYear()} Desarrollado por DSHL
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterLanding
