import React from "react";

const Buttons = (props) => {
  return (
    <button onClick={props.modal} className={props.cName}>
      {props.inButton}
    </button>
  );
};

export default Buttons;
