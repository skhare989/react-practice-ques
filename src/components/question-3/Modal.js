import React from "react";
import "./Modal.css";

const Modal = ({ content, handleClose, handleAccept }) => {
  return (
    <div className="modal-container">
      <button
        onClick={(e) => {
          handleClose(e);
        }}>
        X
      </button>
      <div>{content}</div>
      <button
        onClick={(e) => {
          handleAccept(e);
        }}>
        Accept Offer
      </button>
    </div>
  );
};

export default Modal;
