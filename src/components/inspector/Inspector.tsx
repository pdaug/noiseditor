import "./Inspector.css";

type InspectorProps = {
  setTabName: React.Dispatch<React.SetStateAction<string>>;
};

const Inspector = function ({ setTabName }: InspectorProps) {
  return (
    <div className="inspector">
      <div className="inspector-tab">
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
      <div className="inspector-tab">
        <button
          onClick={function () {
            setTabName("metadata");
            return;
          }}>
          Run
        </button>
      </div>
    </div>
  );
};

export default Inspector;
