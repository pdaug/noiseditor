import { useState } from "react";

import "./App.css";

import Menu from "./components/menu/Menu";
import Source from "./components/source/Source";
import Inspector from "./components/inspector/Inspector";
import Metadata from "./components/metadata/Metadata";

import AssetMenuOptions from "./assets/Menu";

const App = function () {
  const [tabName, setTabName] = useState("source");

  return (
    <div className="container">
      <Menu options={AssetMenuOptions} />
      <div className="main">
        <Inspector
          emoji="🏉"
          extension="js"
          name="sum_arr"
          setTabName={setTabName}
        />
        <div className="content">
          {tabName === "source" && <Source />}
          {tabName === "metadata" && <Metadata />}
        </div>
      </div>
    </div>
  );
};

export default App;
