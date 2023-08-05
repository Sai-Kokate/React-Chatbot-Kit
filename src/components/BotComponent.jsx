import React from "react";
import config from "../bot/config.js";
import MessageParser from "../bot/MessageParser.jsx";
import ActionProvider from "../bot/ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

const BotComponent = () => {
  return (
    <div className="flex flex-row justify-center items-center w-screen h-screen bg-gradient-to-r from-cyan-300  via-gray-300  to-cyan-300 ">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default BotComponent;
