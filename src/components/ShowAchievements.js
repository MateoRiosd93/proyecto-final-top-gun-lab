import React from 'react';

import '../styles/ShowAchievements.css';

export default function ShowAchievements({name,points}) {
    return (
        <div className="container-achievement">
            <h1
                className="name-achievement">{name}
                    <span
                        className="points-achievement">{points}
                    </span>
            </h1>
            <div>
                <button className="button-achievement">Edit</button>
                <button className="button-achievement">Delete</button>
            </div>

        </div>
    )
}
