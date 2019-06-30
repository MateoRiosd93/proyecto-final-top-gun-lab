import React from "react";
import "../styles/DeleteModalMessage.css";

const DeleteMessage = ({toggleModal,deleteElement}) => {
  return (
    <div className="modal">
      <div className="container-delete-message">
        <div className="container-message">
          <h2>Are you sure?</h2>
        </div>
        <div className="container-decision-buttons">
          <button className="button-decision-yes" onClick={deleteElement}>Yes</button>
          <button className="button-decision-no" onClick={toggleModal}>No</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteMessage;
