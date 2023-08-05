import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "../slices/infoSlice";

const EnterName = (props) => {
  const dispatch = useDispatch();

  const [personName, setPersonName] = useState("");
  const [display, setDisplay] = useState("block");

  const handleInputChange = (e) => {
    const inputName = e.target.value;
    setPersonName(inputName);
  };

  const handleSubmit = () => {
    props.actionProvider.handleName(personName);
    dispatch(setName(personName));

    setDisplay("none");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div style={{ display: `${display}` }}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={personName}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="border-cyan-800 border"
      ></input>
    </div>
  );
};

export default EnterName;
