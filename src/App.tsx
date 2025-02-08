import { BrowserRouter, Routes, Route } from "react-router";

// styles
import "./App.css";

// screens
import Homepage from "./screens/Homepage";
import Settings from "./screens/Settings";
import Workbench from "./screens/Workbench";

const App = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/workbench/:id" element={<Workbench />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
