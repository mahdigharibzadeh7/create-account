import React from "react";
import { CgCloseO } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";
import "./componentsStyle/Modal.css";

const Modal = ({ state, text, modalClose }) => {
  return !state ? (
    ""
  ) : (
    <>
      <div onClick={modalClose} className="modal-background"></div>
      <div className="modal">
        <div className="modal-container">
          <div className="modal-header">
            <CgCloseO onClick={modalClose} className="close-icon" />
          </div>
          <div className="modal-main">
            <div className="mainIcon">
              <FcAbout className="main-icon" />
            </div>
            <p>{text}</p>
          </div>
          <div className="btn">
            <button onClick={modalClose}>That's fine!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
