// assets
import AssetMenuOptions from "../assets/Menu";

// components
import Menu from "../components/menu/Menu";
import Source from "../components/source/Source";

const Settings = function () {
  return (
    <div className="container">
      <Menu options={AssetMenuOptions} />
      <div className="main">
        <Source
          initialSourceValue={`const settings = {
  fontSize: 16,
  tabSize: 4,
};`}
        />
      </div>
    </div>
  );
};

export default Settings;
