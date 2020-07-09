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
                            <TeamMember foto="../assets/img/humberto.jpeg" name="Humberto Lagomarsino" actividad="Developer"/>
                            <TeamMember foto="../assets/img/leonardo.jpeg" name="Leonardo Parra" actividad="Developer"/>
                            <TeamMember foto="../assets/img/sebastian.jpeg" name="Sebastián Pizarro" actividad="Developer"/>
                            <TeamMember foto="../assets/img/diego.jpeg" name="Diego Sepúlveda" actividad="Developer"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team
