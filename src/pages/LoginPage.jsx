import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate("/chatbot");
  };
  return (
    <div className=" w-screen h-screen flex flex-col justify-center items-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-300">
      <h1 className="font-bold text-xl">Enter into Student Info System</h1>
      <button
        type="button"
        onClick={submitHandler}
        className=" text-lg rounded-md border-2 border-gray-800 bg-transparent p-2 hover:bg-gray-950 hover:text-emerald-400 font-medium"
      >
        Enroll Now!
      </button>
    </div>
  );
};

export default LoginPage;
