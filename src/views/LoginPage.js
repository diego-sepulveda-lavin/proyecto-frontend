import React from 'react'
import '../css/now-ui-kit.css'

import NavbarLogin from '../components/Login/NavbarLogin'
import FooterLogin from '../components/Login/FooterLogin'
import LoginForm from '../components/Login/LoginForm'



const Login = () => {
    return (
        <>
            <div className="login-page sidebar-collapse">
                <NavbarLogin />
                <div className="page-header clear-filter" filter-color="orange">
                    <div className="page-header-image" style={{"backgroundImage":"url(../assets/img/login.jpg)"}}></div>
                    <LoginForm />
                    <FooterLogin />
                </div>
            </div>
        </>
    )
}

export default Login
