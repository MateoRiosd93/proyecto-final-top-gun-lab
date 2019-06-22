import React from 'react';

import '../styles/ShowEmployees.css';

export default function ShowEmployees ({name,imgSrc,points}) {
    return (
        <div className="container-employee">
            <p className="name-employee">{name}</p>
            <img className="img-employee" src={imgSrc} alt=""/>
            <p className="points-employee">{points}</p>
        </div>
    )
}
