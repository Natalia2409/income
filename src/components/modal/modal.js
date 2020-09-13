import React from 'react';
import './modal.css';

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="date">{props.date}</div>
            <input type="number"/>
            <input type="textarea"/>
            <button>Add</button>
        </div>
    )
}

export default Modal;