import React from 'react'

const TeamMember = (props) => {
    return (
        <>
            <div className="col-md-6 col-lg-3">
                <div className="team-player">
                    <img src={props.foto} alt="Thumbnail Image" className="rounded-circle img-fluid img-raised" />
                    <h4>{props.nombre}</h4>
                    <p className="category text-primary">{props.actividad}</p>
                    <p className="description">{props.detalles}</p>
                    <a href="#" className="btn btn-primary btn-icon btn-round"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="btn btn-primary btn-icon btn-round"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="btn btn-primary btn-icon btn-round"><i className="fab fa-facebook-square"></i></a>
                </div>
            </div>
        </>
    )
}

export default TeamMember
