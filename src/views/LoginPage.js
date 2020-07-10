import React from 'react'
import '../css/now-ui-kit.css'

import FooterLogin from '../components/Login/FooterLogin'
import LoginForm from '../components/Login/LoginForm'
import NavbarLanding from '../components/LandingPage/NavbarLanding'



const Login = () => {
    return (
        <>
            <div className="login-page sidebar-collapse">
                <NavbarLanding />
                <div className="page-header clear-filter" filter-color="orange">
                    <div className="page-header-image" style={{"backgroundImage":"url(../assets/img/login.png)"}}></div>
                    <LoginForm />
                    <FooterLogin />
                </div>
            </div>
        </>
    )
}

export default Login
