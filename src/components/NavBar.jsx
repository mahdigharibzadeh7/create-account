import React from "react";
import { FaEllo } from "react-icons/fa";

const NavBar = (props) => {
  const text = (event) => props.modalText(event.target.textContent);

  return (
    <div className="nav">
      <div className="title" onClick={text}>
        <p onClick={props.modal}>
          <FaEllo className="logo" />
          Anywhere App<span>.</span>
        </p>
      </div>
      <div onClick={text}>
        <div onClick={props.modal} className="home">
          Home
        </div>
      </div>
      <div onClick={text}>
        <div onClick={props.modal} className="join">
          Join
        </div>
      </div>
    </div>
  );
};

export default NavBar;
