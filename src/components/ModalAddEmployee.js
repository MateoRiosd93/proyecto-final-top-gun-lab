import React from 'react';
import '../styles/ModalAddEmployee.css';

const ModalAddEmployee = ({handleShowModal}) => {
    return ( 
        <div className="modal">
            {/* <form>
            </form> */}
            <p>Desde la modal</p>
            <button className="close-modal-button" onClick={handleShowModal}>x</button>
        </div>
     );
}
 
export default ModalAddEmployee;