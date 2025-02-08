// assets
import AssetMenuOptions from "../assets/Menu";

// components
import Menu from "../components/menu/Menu";

const Settings = function () {
  return (
    <div className="container">
      <Menu options={AssetMenuOptions} />
      <div className="main">Settings</div>
    </div>
  );
};

export default Settings;
