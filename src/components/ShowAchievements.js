import React from "react";

import "../styles/ShowAchievements.css";

function ShowAchievements({ name, points }) {
  return (
    <li className="container-achievement">
      <h1 className="name-achievement">
        {name}
        <span className="points-achievement">
          <span className="start icon-star-full" /> {points}
        </span>
      </h1>
      <div className="container-achievement-buttons">
        <button className="button-achievement-edit">Edit</button>
        <button className="button-achievement-delete">Delete</button>
      </div>
    </li>
  );
}

export default ShowAchievements;