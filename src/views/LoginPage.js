import React from 'react'
import '../css/now-ui-kit.css'

import LoginForm from '../components/Login/LoginForm'
import NavbarLanding from '../components/LandingPage/NavbarLanding'
import FooterLanding from '../components/LandingPage/FooterLanding'



const Login = () => {
    return (
        <>
            <div className="login-page sidebar-collapse">
                <NavbarLanding />
                <div className="page-header clear-filter" filter-color="orange">
                    <div className="page-header-image" style={{"backgroundImage":"url(../assets/img/login.png)"}}></div>
                    <LoginForm />
                    <FooterLanding estilo="footer" />
                </div>
            </div>
        </>
    )
}

export default Login
