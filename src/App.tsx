import { BrowserRouter, Routes, Route } from "react-router";

// styles
import "./App.css";

// context
import { ModalProvider } from "./components/modal/ModalContext";

// screens
import Homepage from "./screens/Homepage";
import Settings from "./screens/Settings";
import Workbench from "./screens/Workbench";

// modals
import { ModalCreate, ModalShare } from "./components/modal/Modal";

const App = function () {
  return (
    <ModalProvider>
      <ModalCreate />
      <ModalShare />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/workbench/:id" element={<Workbench />} />
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  );
};

export default App;
