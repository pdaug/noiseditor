import "./Inspector.css";

type InspectorProps = {
  setTabName: React.Dispatch<React.SetStateAction<string>>;
};

const Inspector = function ({ setTabName }: InspectorProps) {
  return (
    <div className="inspector">
      <div className="inspector-tab">
        <button
          className="inspector-tab-active"
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
      <button
        onClick={function () {
          setTabName("metadata");
          return;
        }}>
        Run
      </button>
    </div>
  );
};

export default Inspector;
