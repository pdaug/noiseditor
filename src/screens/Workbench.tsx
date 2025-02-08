import { useState } from "react";

// assets
import AssetMenuOptions from "../assets/Menu";

// components
import Tab from "../components/tab/Tab";
import Menu from "../components/menu/Menu";
import Board from "../components/board/Board";
import Source from "../components/source/Source";
import Insight from "../components/insight/Insight";

const Workbench = function () {
  const [tabId, setTabId] = useState("tab_item_source");
  return (
    <div className="container">
      <Menu options={AssetMenuOptions} />
      <div className="main">
        <Tab tabId={tabId} setTabId={setTabId} />
        {tabId === "tab_item_source" && <Source />}
        {tabId === "tab_item_insight" && <Insight />}
        {tabId === "tab_item_board" && <Board />}
      </div>
    </div>
  );
};

export default Workbench;
