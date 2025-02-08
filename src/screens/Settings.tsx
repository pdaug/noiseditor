// assets
import AssetMenuOptions from "../assets/Menu";

// components
import Menu from "../components/menu/Menu";
import Source from "../components/source/Source";

const SettingsSourceDefault = `// settings is save locally in your browser

const settings = {
  // theme
  themeMode: "dark",
  themeColor: "#ff5c72",
  
  // font
  fontSize: 16,
  fontFamily: "'Roboto Mono', monospace",

  // integrations
  openAiApiKey: "",
  deepSeekApiKey: "",
  perplexityApiKey: "",

  // Assistant AI (openai, deepseek, perplexity)
  assistant: "", 

  // others
  autoSave: true,
  beutifyCode: true,
  tabSize: 2,
  wordWrap: false,
};`;

const Settings = function () {
  return (
    <div className="container">
      <Menu options={AssetMenuOptions} />
      <div className="main">
        <Source initialSourceValue={SettingsSourceDefault} />
      </div>
    </div>
  );
};

export default Settings;
