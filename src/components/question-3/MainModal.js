import React, { useState } from "react";
import Modal from "./Modal";
import "./MainModal.css";

const MainModal = () => {
  const [showToggle, setShowToggle] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleModalToggle = () => {
    setShowToggle(true);
  };

  const handleClose = (e) => {
    setShowToggle(false);
  };

  const handleAccept = (e) => {
    setAccepted(true);
    setShowToggle(false);
  };

  return (
    <div className={showToggle ? "modal-window modal-opened" : "modal-window"}>
      <div className="button-container">
        {!accepted ? (
          <button
            onClick={() => {
              handleModalToggle();
            }}>
            Show Me
          </button>
        ) : (
          "Offer accepted"
        )}
      </div>
      {showToggle && (
        <Modal
          content={"Click below button to accept offer"}
          handleClose={handleClose}
          handleAccept={handleAccept}
        />
      )}
    </div>
  );
};

export default MainModal;
