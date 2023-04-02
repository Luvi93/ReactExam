import React from 'react';
import { NavLink } from 'react-router-dom';
import './Modal.css';

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-dropdown">
      <NavLink className="modal-dropdown-link" to="/signup" onClick={onClose}>
        Sign up
      </NavLink>
      <NavLink className="modal-dropdown-link" to="/login" onClick={onClose}>
        Log in
      </NavLink>
      <NavLink className="modal-dropdown-link" to="/airbnb-your-home" onClick={onClose}>
        Airbnb your home
      </NavLink>
      <NavLink className="modal-dropdown-link" to="/host-experience" onClick={onClose}>
        Host an experience
      </NavLink>
      <NavLink className="modal-dropdown-link" to="/help" onClick={onClose}>
        Help
      </NavLink>
    </div>
  );
};

export default Modal;
