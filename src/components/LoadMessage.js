import React from 'react';
import "../styles/LoadMessage.css";

const LoadMesagge = () => {
    return ( 
        <div className="load-message-container">
            <h2 className="load-message-tittle">Loading...</h2>
            <div className="preloader"></div>
        </div>
     );
}
 
export default LoadMesagge;