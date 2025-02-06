import { useState } from "react";
import { File, Folder, GearSix } from "@phosphor-icons/react";

import "./Menu.css";

type MenuOptions = {
  id: string;
  name: string;
  extension: string;
  emoji: string;
  action?: () => void;
};

type MenuProps = {
  options: MenuOptions[];
};

const Menu = function ({ options }: MenuProps) {
  const [optionSelected, setOptionSelected] = useState("");

  const OptionSelect = function (optionId: string) {
    setOptionSelected(optionId);
    return;
  };

  return (
    <div className="menu">
      <div className="menu-inner">
        <div className="menu-logo">
          <img src="/logo-light.png" width={64} height={64} />
        </div>
        <div className="menu-options">
          <div className="menu-option-container">
            <div className="menu-option-title">
              <Folder size={20} weight="fill" color="#81a1c1" />
              <span>Noise Editor</span>
            </div>
            <div className="menu-option">
              <File size={20} weight="fill" color="#5e81ac" />
              <span>Get Started</span>
            </div>
            <div className="menu-option">
              <File size={20} weight="fill" color="#5e81ac" />
              <span>Configuration</span>
            </div>
          </div>

          <div className="menu-option-container">
            <div className="menu-option-title">
              <Folder size={20} weight="fill" color="#81a1c1" />
              <span>Workbench</span>
            </div>
            {options.map(function (option) {
              const isOptionsSelected = option.id === optionSelected;

              return (
                <div
                  key={option.id}
                  className={
                    isOptionsSelected
                      ? "menu-option menu-option-selected"
                      : "menu-option"
                  }
                  onClick={function () {
                    OptionSelect(option.id);
                    return;
                  }}>
                  <File size={20} weight="fill" color="#5e81ac" />
                  <span>
                    {option.name}.{option.extension}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="menu-footer">
          <GearSix size={20} weight="fill" color="#5e81ac" />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
