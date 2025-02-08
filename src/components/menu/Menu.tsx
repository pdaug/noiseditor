import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { File, Folder, GearSix, Plus } from "@phosphor-icons/react";

// styles
import "./Menu.css";

// context
import { useModal } from "../modal/ModalContext";

type MenuOptions = {
  id: string;
  name: string;
  extension: string;
  action?: () => void;
};

type MenuProps = {
  options: MenuOptions[];
};

const MenuIconSize = 20;

const Menu = function ({ options }: MenuProps) {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [optionSelected, setOptionSelected] = useState(id || "");

  const { openModal } = useModal();

  const OptionSelect = function (optionId: string) {
    setOptionSelected(optionId);
    return;
  };

  const OptionNewFile = function () {
    openModal("modal_create");
    return;
  };

  const isMenuHomepage = location.pathname === "/";
  const menuHomepageIconStyle = isMenuHomepage ? "fill" : "bold";
  const menuHomepageElementStyle = isMenuHomepage
    ? "menu-option-homepage  menu-option-selected"
    : "menu-option-homepage";

  const GoToHomepage = function () {
    navigate("/");
    return;
  };

  const isMenuSettings = location.pathname === "/settings";
  const menuSettingsIconStyle = isMenuSettings ? "fill" : "bold";
  const menuSettingsElementStyle = isMenuSettings
    ? "menu-option-footer  menu-option-selected"
    : "menu-option-footer";

  const GoToSettings = function () {
    navigate("/settings");
    return;
  };

  return (
    <div className="menu">
      <div className="menu-inner">
        <div className="menu-logo">
          <img src="/logo-light.png" alt="noise logo" />
        </div>
        <div className="menu-options">
          <div className="menu-option-container">
            <div className={menuHomepageElementStyle} onClick={GoToHomepage}>
              <File size={MenuIconSize} weight={menuHomepageIconStyle} />
              <span>Homepage</span>
            </div>
          </div>

          <div className="menu-option-container">
            <div className="menu-option-title">
              <Folder size={MenuIconSize} weight="bold" />
              <span>Workbench</span>
            </div>
            {options.map(function (option) {
              const isMenuOptionsSelected = option.id === optionSelected;

              const menuOptionIconStyle = isMenuOptionsSelected
                ? "fill"
                : "bold";

              const menuOptionElementStyle = isMenuOptionsSelected
                ? "menu-option menu-option-selected"
                : "menu-option";

              const menuOptionOnClick = function () {
                navigate(`/workbench/${option.id}`);
                OptionSelect(option.id);
                return;
              };

              return (
                <div
                  key={option.id}
                  onClick={menuOptionOnClick}
                  className={menuOptionElementStyle}>
                  <div className="menu-option-inner">
                    <File size={MenuIconSize} weight={menuOptionIconStyle} />
                    <span>
                      {option.name}.{option.extension}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="menu-option-add" onClick={OptionNewFile}>
            <Plus size={MenuIconSize} weight="bold" />
            <span>New file</span>
          </div>
        </div>

        <div className={menuSettingsElementStyle} onClick={GoToSettings}>
          <GearSix size={MenuIconSize} weight={menuSettingsIconStyle} />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
