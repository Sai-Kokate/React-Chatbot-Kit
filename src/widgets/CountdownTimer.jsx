import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CountdownTimer = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else {
      navigate("/exit");
    }

    // Clean up the timer on component unmount or when the countdown reaches 0
    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <div className="flex flex-row justify-center items-center border rounded-full  text-lg font-medium text-cyan-800 ">
      {countdown === 0 ? (
        <p>Time's up! Redirecting...</p>
      ) : (
        <p className="">{countdown}...</p>
      )}
    </div>
  );
};

export default CountdownTimer;
