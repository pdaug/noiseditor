// styles
import "./Tab.css";

// assets
import AssetTabsMain from "../../assets/Tab";
import { Play, ShareNetwork } from "@phosphor-icons/react";

type TabProps = {
  tabId: string;
  setTabId: React.Dispatch<React.SetStateAction<string>>;
};

const Tab = function ({ tabId, setTabId }: TabProps) {
  return (
    <div className="tab">
      <div className="tab-container">
        {AssetTabsMain.map(function (tabData) {
          const isTabSelected = tabId === tabData.id;

          const TabChange = function () {
            setTabId(tabData.id);
            return;
          };

          return (
            <button
              onClick={TabChange}
              className={isTabSelected ? "tab-active" : ""}>
              {tabData.name}
            </button>
          );
        })}
      </div>

      <button>
        <Play size={16} weight="bold" />
        <span>Run</span>
      </button>

      <button>
        <ShareNetwork size={16} weight="bold" />
        <span>Share</span>
      </button>
    </div>
  );
};

export default Tab;
