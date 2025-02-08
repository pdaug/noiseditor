import { MouseEvent } from "react";
import { DownloadSimple, Play, ShareNetwork } from "@phosphor-icons/react";

// styles
import "./Tab.css";

// context
import { useModal } from "../modal/ModalContext";

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

type TabProps = {
  tabId: string;
  setTabId: React.Dispatch<React.SetStateAction<string>>;
};

const Tab = function ({ tabId, setTabId }: TabProps) {
  const { openModal } = useModal();

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
      id: "tab_action_download",
      name: "Download",
      Icon: DownloadSimple,
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
        openModal("modal_share");
        return;
      },
    },
  ];

  return (
    <div className="tab">
      <div className="tab-main">
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
      <div className="tab-actions">
        {TabActions.map(function (action) {
          return (
            <button key={action.id} onClick={action.onClick}>
              <action.Icon size={16} weight="bold" />
              <span>{action.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tab;
