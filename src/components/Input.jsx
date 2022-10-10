import React, { useState } from "react";
import "./componentsStyle/Input.css";

const Input = (props) => {
  const IconTag = props.icon;

  const gridStyle =
    props.html_for === "em" || props.html_for === "pass"
      ? { gridColumn: "1/3" }
      : {};

  const iconStyle =
    props.html_for === "em" || props.html_for === "pass"
      ? { paddingLeft: "37rem" }
      : {};

  const cursor = props.html_for === "pass" && { cursor: "pointer" };

  const [statePasswordShow, setStatePasswordShow] = useState(false);
  const showPass = () => {
    return setStatePasswordShow(!statePasswordShow);
  };

  const [stateInputValue, setStateInputValue] = useState("");
  const inputText = (event) => {
    setStateInputValue(event.target.value);
  };
  props.inputValue(stateInputValue);
  // console.log(stateInputValue)

  return (
    <div className="input" style={gridStyle}>
      <label htmlFor={props.html_for}>{props.inLabel}</label>
      <div className="icon" style={iconStyle}>
        <IconTag onClick={showPass} style={cursor} />
      </div>
      <input
        onChange={inputText}
        type={
          statePasswordShow
            ? "text"
            : props.html_for === "pass"
            ? "password"
            : "text"
        }
        id={props.html_for}
        value={stateInputValue}
      />
    </div>
  );
};

export default Input;
