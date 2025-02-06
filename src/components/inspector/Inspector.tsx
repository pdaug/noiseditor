import "./Inspector.css";

type InspectorProps = {
  emoji: string;
  name: string;
  extension: string;
  setTabName: React.Dispatch<React.SetStateAction<string>>;
};

const Inspector = function ({
  emoji,
  name,
  extension,
  setTabName,
}: InspectorProps) {
  return (
    <div className="inspector">
      <div className="inspector-topbar">
        <div className="inspector-topbar-emoji">{emoji}</div>
        <div className="inspector-topbar-filename">
          {name}.{extension}
        </div>
      </div>
      <div className="inspector-tab">
        <div className="inspector-tab-left">
          <button
            onClick={function () {
              setTabName("source");
              return;
            }}>
            Source
          </button>
          <button
            onClick={function () {
              setTabName("metadata");
              return;
            }}>
            Metadata
          </button>
        </div>
        <div className="inspector-tab-right">
          <button
            onClick={function () {
              setTabName("metadata");
              return;
            }}>
            Run
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inspector;
