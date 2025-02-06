import { useState } from "react";

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
          <img src="/logo-dark.png" width={64} height={64} />
        </div>
        <div className="menu-options">
          <div className="menu-option-title">Start</div>
          <div className="menu-option">
            <span>📖</span>
            <span>Tutorial</span>
          </div>
          <div className="menu-option-title">Explorer</div>
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
                <span>{option.emoji}</span>
                {/* <File size={20} color="#bcbec2" /> */}
                <span>
                  {option.name}.{option.extension}
                </span>
              </div>
            );
          })}
        </div>
        <div className="menu-footer">Rodapé</div>
      </div>
    </div>
  );
};

export default Menu;
