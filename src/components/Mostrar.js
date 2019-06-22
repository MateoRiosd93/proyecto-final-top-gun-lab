import React from 'react';

import '../styles/Mostrar.css';

export default function Mostrar({name,imgSrc,points}) {
    return (
        <div className="div-employee">
            <p className="name-employee">{name}</p>
            <img className="img-employee" src={imgSrc} alt=""/>
            <p className="points-employee">{points}</p>
        </div>
    )
}
