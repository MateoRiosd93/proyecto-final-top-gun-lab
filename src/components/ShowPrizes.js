import React from 'react';

import '../styles/ShowPrizes.css';

export default function ({key,description,imgSrc,name,points}) {
    return (
        <div className="container-prize">
            <h3 className="name-prize">{name}</h3>
            <img className="img-prize"src={imgSrc} alt=""/>
            <h4 className="point-prize"><span>*</span>{points}</h4>
            <p className="description-prize">{description}</p>
        </div>
    )
}