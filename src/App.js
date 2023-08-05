import { BrowserRouter, Routes, Route } from "react-router-dom";
import BotComponent from "./components/BotComponent";
import LoginPage from "./pages/LoginPage";
import ExitPage from "./pages/ExitPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} exact />
          <Route path="/chatbot" element={<BotComponent />} />
          <Route path="/exit" element={<ExitPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
