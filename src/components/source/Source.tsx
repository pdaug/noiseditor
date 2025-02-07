import { useRef, useState } from "react";
import ReactCodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";

// plugins
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark, vscodeDarkInit } from "@uiw/codemirror-theme-vscode";

// styles
import "./Source.css";

const Source = function () {
  const extensions = [vscodeDark, javascript()];
  const sourceRef = useRef<ReactCodeMirrorRef | null>(null);

  const theme = vscodeDarkInit({
    settings: {
      fontFamily: "'Roboto Mono', monospace",
    },
  });

  const basicSetup = {
    foldGutter: true,
    dropCursor: false,
    allowMultipleSelections: false,
    indentOnInput: false,
  };

  const [sourceValue, setSourceValue] = useState(
    `const myMessage = "Hello, there!";\nconsole.log(myMessage);`,
  );

  return (
    <div className="source">
      <ReactCodeMirror
        theme={theme}
        ref={sourceRef}
        value={sourceValue}
        extensions={extensions}
        basicSetup={basicSetup}
        onUpdate={function (view) {
          if (sourceRef.current) {
            const pos = view.state.selection.main.head;
            const line = view.state.doc.lineAt(pos).number;
            console.log("Linha atual:", line);
          }
        }}
      />
    </div>
  );
};

export default Source;
