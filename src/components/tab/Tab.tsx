import { MouseEvent } from "react";
import { Play, ShareNetwork } from "@phosphor-icons/react";

// styles
import "./Tab.css";

const TabItems = [
  {
    id: "tab_item_source",
    name: "Source",
  },
  {
    id: "tab_item_insight",
    name: "Insight",
  },
  {
    id: "tab_item_board",
    name: "Board",
  },
];

const TabActions = [
  {
    id: "tab_action_run",
    name: "Run",
    Icon: Play,
    onClick: function (event: MouseEvent<HTMLButtonElement>) {
      console.log(event);
      return;
    },
  },
  {
    id: "tab_action_share",
    name: "Share",
    Icon: ShareNetwork,
    onClick: function (event: MouseEvent<HTMLButtonElement>) {
      console.log(event);
      return;
    },
  },
];

type TabProps = {
  tabId: string;
  setTabId: React.Dispatch<React.SetStateAction<string>>;
};

const Tab = function ({ tabId, setTabId }: TabProps) {
  return (
    <div className="tab">
      <div className="tab-container">
        {TabItems.map(function (item) {
          const isTabSelected = tabId === item.id;
          const TabChange = function () {
            setTabId(item.id);
            return;
          };
          return (
            <button
              key={item.id}
              onClick={TabChange}
              className={isTabSelected ? "tab-active" : ""}>
              {item.name}
            </button>
          );
        })}
      </div>
      {TabActions.map(function (action) {
        return (
          <button key={action.id} onClick={action.onClick}>
            <action.Icon size={16} weight="bold" />
            <span>{action.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Tab;
