import React from 'react';

import '../styles/ShowEmployees.css';

export default function ShowEmployees ({name,imgSrc,points}) {
    return (
        <div className="container-element">
            <p className="name-element">{name}</p>
            <img className="img-element" src={imgSrc} alt=""/>
            <p className="points-element">{points}</p>
        </div>
    )
}
