import React from 'react'
import TeamMember from './TeamMember'

const Team = () => {
    return (
        <>
            <div className="section section-team text-center">
                <div className="container">
                    <h2 className="title">Nuestro Equipo</h2>
                    <div className="team">
                        <div className="row">
                            <TeamMember foto="../assets/img/humberto.jpeg" nombre="Humberto Lagomarsino" actividad="Developer"/>
                            <TeamMember foto="../assets/img/leonardo.jpeg" nombre="Leonardo Parra" actividad="Developer"/>
                            <TeamMember foto="../assets/img/sebastian.jpeg" nombre="Sebastián Pizarro" actividad="Developer"/>
                            <TeamMember foto="../assets/img/diego.jpeg" nombre="Diego Sepúlveda" actividad="Developer"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team
