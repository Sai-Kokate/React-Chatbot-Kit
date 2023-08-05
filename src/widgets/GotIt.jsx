import React, { useState } from "react";

const GotIt = (props) => {
  const [clicked, setClicked] = useState(false);
  const [display, setDisplay] = useState("block");

  const handleClick = () => {
    setClicked(!clicked);
    props.actionProvider.handleGotIt();
    setDisplay("none");
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <button
        onClick={handleClick}
        type="button"
        style={{ display: `${display}` }}
        className=" border-cyan-800 border-2 text-cyan-900 bg-gray-200 p-2 hover:bg-cyan-700 hover:text-gray-200 hover:border-gray-200 font-medium rounded-lg"
      >
        Got It!
      </button>
    </div>
  );
};

export default GotIt;
