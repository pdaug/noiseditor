import React, { useRef } from "react";
import ReactCodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";

// plugins
import { javascript } from "@codemirror/lang-javascript";
// import { nord, nordInit } from "@uiw/codemirror-theme-nord";
import { vscodeDark, vscodeDarkInit } from "@uiw/codemirror-theme-vscode";

// styles
import "./Source.css";

const Source = function () {
  const extensions = [vscodeDark, javascript()];
  const sourceRef = useRef<ReactCodeMirrorRef | null>(null);

  const theme = vscodeDarkInit({
    settings: {
      fontFamily: "'Space Mono', monospace",
    },
  });

  const basicSetup = {
    foldGutter: true,
    dropCursor: false,
    allowMultipleSelections: false,
    indentOnInput: false,
  };

  return (
    <React.Fragment>
      <ReactCodeMirror
        theme={theme}
        ref={sourceRef}
        extensions={extensions}
        basicSetup={basicSetup}
        value="console.log('hello world!');"
        onUpdate={function (view) {
          if (sourceRef.current) {
            const pos = view.state.selection.main.head;
            const line = view.state.doc.lineAt(pos).number;
            console.log("Linha atual:", line);
          }
        }}
      />
    </React.Fragment>
  );
};

export default Source;
