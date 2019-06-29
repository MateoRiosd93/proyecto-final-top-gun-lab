import React from 'react'
import '../styles/ShowAchievements.css';

const ShowAchievements = ({name,points,handleShowModal,handleShowDeleteMessage}) => {
    return (
        <li className="container-achievement">
            <div className="container-name-achievement">

            <h1
                className="name-achievement">{name}
                    <span className="points-achievement"><span className="start icon-star-full"></span> {points}</span>
            </h1>
            </div>
            <div className="container-achievement-buttons">
                <button className="button-achievement-edit" onClick={handleShowModal} >Edit</button>
                <button className="button-achievement-delete" onClick={handleShowDeleteMessage} >Delete</button>
            </div>
        </li>
     );
}

export default ShowAchievements;

