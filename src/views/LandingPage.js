import React from 'react'
import '../css/now-ui-kit.css'

import NavbarLanding from '../components/LandingPage/NavbarLanding'
import PageHeader from '../components/LandingPage/PageHeader'
import AboutUs from '../components/LandingPage/AboutUs'
import Team from '../components/LandingPage/Team'
import ContactUs from '../components/LandingPage/ContactUs'
import FooterLanding from '../components/LandingPage/FooterLanding'

const LandingPage = () => {
    return (
        <>
            <div className="landing-page sidebar-collapse">
                <NavbarLanding />
                <div className="wrapper">
                    <PageHeader />
                    <AboutUs />
                    <Team />
                    <ContactUs />
                    <FooterLanding estilo="footer footer-default" />
                </div>
            </div>
        </>
    )
}

export default LandingPage
