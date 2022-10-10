import React from "react";
import Input from "./Input";
import { FaUserEdit, FaEnvelope, FaEye } from "react-icons/fa";

const formItems = [
  {
    html_for: "frname",
    inLabel: "First Name",
    type: "text",
    icon: FaUserEdit,
  },
  {
    html_for: "lname",
    inLabel: "Last Name",
    type: "text",
    icon: FaUserEdit,
  },
  {
    html_for: "em",
    inLabel: "Email",
    type: "text",
    icon: FaEnvelope,
  },
  {
    html_for: "pass",
    inLabel: "Password",
    type: "password",
    icon: FaEye,
  },
];

const Form = (props) => {
  const inputCheck = (text) => {
    props.inputText(text);
  };

  return (
    <div className="form-container">
      <form>
        <div className="input-container">
          {formItems.map((item) => {
            return (
              <Input
                key={item.html_for}
                html_for={item.html_for}
                inLabel={item.inLabel}
                inputType={item.type}
                icon={item.icon}
                inputValue={inputCheck}
              />
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default Form;
