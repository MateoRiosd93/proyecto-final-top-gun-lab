import React from "react";

import "../styles/ShowElement.css";
import "../fonts/style.css";
import imgTEAM from "../assets/WeAreTEAM.PNG";

function ShowElements({ message, name, imgSrc, points }) {
  return (
    <div className="container-element">
      <div className="container-front">
        <p className="name-element">{name}</p>
        <img className="img-element" src={imgSrc} alt="" />
        <p className="points-element">
          <span className="start icon-star-full" />
          {points}
        </p>
      </div>
      <div className="container-back">
        <img className="img-Team" src={imgTEAM} alt="Logo TEAM negative" />
        <h1 className="we-are-team">{message}</h1>
      </div>
    </div>
  );
}

export default ShowElements;
