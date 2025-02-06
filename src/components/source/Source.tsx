import React from "react";
import ReactCodeMirror from "@uiw/react-codemirror";

// plugins
import { javascript } from "@codemirror/lang-javascript";
import { nord, nordInit } from "@uiw/codemirror-theme-nord";

// styles
import "./Source.css";

const Source = function () {
  const extensions = [nord, javascript()];

  const theme = nordInit({
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
        extensions={extensions}
        basicSetup={basicSetup}
        value="console.log('hello world!');"
      />
    </React.Fragment>
  );
};

export default Source;
