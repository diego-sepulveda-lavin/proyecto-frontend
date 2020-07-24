import React from 'react'
import '../css/now-ui-kit.css'

import NavbarLanding from '../components/LandingPage/NavbarLanding'
import FooterLanding from '../components/LandingPage/FooterLanding'
import IngresarNuevaPassword from '../components/Login/IngresarNuevaPassword'



const NuevaPassword = () => {
    return (
        <>
            <div className="login-page sidebar-collapse">
                <NavbarLanding />
                <div className="page-header clear-filter" filter-color="orange">
                    <div className="page-header-image" style={{"backgroundImage":"url(../assets/img/login.png)"}}></div>
                    <IngresarNuevaPassword />
                    <FooterLanding estilo="footer" />
                </div>
            </div>
        </>
    )
}

export default NuevaPassword
