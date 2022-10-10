import React, { useState } from "react";
import NavBar from "./NavBar";
import Text from "./Text";
import Form from "./Form";
import Buttons from "./Buttons";
import Modal from "./Modal";

import "./componentsStyle/NewAccount.css";

const buttons = [
  { cName: "change-method", inButton: "Change method" },
  { cName: "create-account", inButton: "Create account" },
];

const NewAccount = () => {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal(!showModal);
    setStateText("");
  };

  const [stateText, setStateText] = useState("");
  const mText = (text) => setStateText(text);

  const buttonsText = (event) => {
    mText(event.target.textContent);
    const confirm = event.target.textContent;
    inputChecker(confirm);
  };

  const inputCheck = (text) => {
    if (text.trim().length !== 0) {
      console.log("pore");
      return false;
    }
    console.log("khalie");
    return true;
  };

  const inputChecker = (confirm) => {
    if (confirm === "Create account") {
      if (inputCheck === true) console.log("empty");
      else console.log("full");
    }
  };

  return (
    <div className="container">
      <div className="create-new-account">
        <div className="wrapper">
          <Modal state={showModal} text={stateText} modalClose={modalHandler} />
          <NavBar modal={modalHandler} modalText={mText} />
          <Text modal={modalHandler} modalText={mText} />
          <Form inputText={inputCheck} />
          <div className="btns" onClick={buttonsText}>
            {buttons.map((btn) => {
              return (
                <Buttons
                  key={btn.inButton}
                  cName={btn.cName}
                  inButton={btn.inButton}
                  modal={modalHandler}
                  onClick={inputChecker}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAccount;
