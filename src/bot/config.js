import { createChatBotMessage } from "react-chatbot-kit";
import GotIt from "../widgets/GotIt";
import AgeDropdown from "../widgets/AgeDropdown";
import EnterName from "../widgets/EnterName";
import CountdownTimer from "../widgets/CountdownTimer";

const botName = "student info system";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to ${botName}!`, {
      widget: "gotit",
    }),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  customComponents: {
    // Replaces the default header
    header: () => (
      <div className="p-2 bg-green-300 text-black text-lg rounded-md text-center font-semibold">
        Student Info System
      </div>
    ),
  },
  widgets: [
    {
      widgetName: "gotit",
      widgetFunc: (props) => <GotIt {...props} />,
    },
    {
      widgetName: "ageselector",
      widgetFunc: (props) => <AgeDropdown {...props} />,
    },
    {
      widgetName: "takename",
      widgetFunc: (props) => <EnterName {...props} />,
    },
    {
      widgetName: "timer",
      widgetFunc: (props) => <CountdownTimer {...props} />,
    },
  ],
};

export default config;
