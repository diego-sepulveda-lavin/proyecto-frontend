import React from 'react'

const TeamMember = (props) => {
    return (
        <>
            <div className="col-md-6 col-lg-3">
                <div className="team-player">
                    <img src={props.foto} alt="Thumbnail Image" className="rounded-circle img-fluid img-raised" />
                    <h4>{props.nombre}</h4>
                    <p className="category text-primary">{props.actividad}</p>
                    <p className="description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some
                                            <a href="#">links</a> for people to be able to follow them outside the site.</p>
                    <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-twitter"></i></a>
                    <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-instagram"></i></a>
                    <a href="#pablo" className="btn btn-primary btn-icon btn-round"><i className="fab fa-facebook-square"></i></a>
                </div>
            </div>
        </>
    )
}

export default TeamMember
