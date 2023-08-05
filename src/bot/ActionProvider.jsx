import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleGotIt = () => {
    const clientMessage = createClientMessage("Got it");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage],
    }));

    const botMessage = createChatBotMessage("Enter your name", {
      widget: "takename",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleName = (name) => {
    const clientMessage = createClientMessage(`${name}`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage],
    }));

    const botMessage2 = createChatBotMessage("Enter your Age", {
      widget: "ageselector",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage2],
    }));
  };

  const handleAgeSelected = (age) => {
    const clientMessage = createClientMessage(`${age}`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage],
    }));

    const botMessage = createChatBotMessage(
      "Thank you. In 5 seconds, bot will exit",
      {
        widget: "timer",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Put the handleHello and handleDog function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotIt,
            handleName,
            handleAgeSelected,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
