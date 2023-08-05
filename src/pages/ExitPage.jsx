import React from "react";
import { useSelector } from "react-redux";

const ExitPage = () => {
  const name = useSelector((state) => state.info.name);
  const age = useSelector((state) => state.info.age);
  return (
    <p className="flex flex-row justify-center items-center w-screen h-screen bg-gradient-to-r from-cyan-400 to-emerald-300 text-xl font-semibold">
      Your name {name} aged {age} has been added to student system. You may now
      exit
    </p>
  );
};

export default ExitPage;
