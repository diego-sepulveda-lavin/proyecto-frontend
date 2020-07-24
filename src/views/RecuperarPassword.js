import React from 'react'
import '../css/now-ui-kit.css'

import NavbarLanding from '../components/LandingPage/NavbarLanding'
import FooterLanding from '../components/LandingPage/FooterLanding'
import IngresarMail from '../components/Login/IngresarMail'



const RecuperarPassword = () => {
    return (
        <>
            <div className="login-page sidebar-collapse">
                <NavbarLanding />
                <div className="page-header clear-filter" filter-color="orange">
                    <div className="page-header-image" style={{"backgroundImage":"url(../assets/img/login.png)"}}></div>
                    <IngresarMail />
                    <FooterLanding estilo="footer" />
                </div>
            </div>
        </>
    )
}

export default RecuperarPassword
