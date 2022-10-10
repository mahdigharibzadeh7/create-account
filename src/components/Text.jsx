import React from "react";

const Text = (props) => {
  const text = () => props.modalText("Login");

  return (
    <div className="text-container">
      <div className="start">START FOR FREE</div>
      <div className="create">
        Create new account<span>.</span>
      </div>
      <div className="login" onClick={text}>
        Already a Member? <span onClick={props.modal}>Login</span>
      </div>
    </div>
  );
};

export default Text;
