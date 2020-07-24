import React, { useState } from 'react'
import TeamMember from './TeamMember'

const Team = () => {

    const [descripcion, setDescripcion] = useState({
        humberto : "Ingeniero Informático, 30 años",
        leonardo : "Ingeniero Comercial, 32 años",
        sebastian : "Ingeniero Comercial, 28 años",
        diego : "Ingeniero Mecánico, 32 años"
    })

    return (
        <>
            <div className="section section-team text-center p-0">
                <div className="container">
                    <h2 className="title">Nuestro Equipo</h2>
                    <div className="team">
                        <div className="row">
                            <TeamMember foto="../assets/img/humberto.jpeg" nombre="Humberto Lagomarsino" actividad="Developer" detalles={descripcion.humberto}/>
                            <TeamMember foto="../assets/img/leonardo.jpeg" nombre="Leonardo Parra" actividad="Developer" detalles={descripcion.leonardo}/>
                            <TeamMember foto="../assets/img/sebastian.jpeg" nombre="Sebastián Pizarro" actividad="Developer" detalles={descripcion.sebastian}/>
                            <TeamMember foto="../assets/img/diego.jpeg" nombre="Diego Sepúlveda" actividad="Developer" detalles={descripcion.diego}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team
