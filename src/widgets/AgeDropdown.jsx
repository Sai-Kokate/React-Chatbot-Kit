import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAge } from "../slices/infoSlice";

const AgeDropdown = (props) => {
  const dispatch = useDispatch();
  const [ageValue, setAgeValue] = useState("");

  const handleSelect = (e) => {
    const selectedValue = e.target.value;
    setAgeValue(selectedValue);
    dispatch(setAge(selectedValue));
    props.actionProvider.handleAgeSelected(selectedValue);
  };

  let ages = [];
  for (let index = 18; index <= 40; index++) {
    ages.push(index);
  }
  const renderAges = ages.map((age, index) => (
    <option key={index} value={age}>
      {age}
    </option>
  ));

  return (
    <div className="flex justify-center">
      {!ageValue && (
        <select
          value={ageValue}
          onChange={handleSelect}
          className="border-cyan-800 border pb-1 w-1/4"
        >
          <option value="">Age</option>
          {renderAges}
        </select>
      )}
    </div>
  );
};

export default AgeDropdown;
