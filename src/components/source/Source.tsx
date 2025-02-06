import React from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { githubLight, githubLightInit } from "@uiw/codemirror-theme-github";

const Source = function () {
  return (
    <React.Fragment>
      <ReactCodeMirror
        width="100%"
        value="console.log('hello world!');"
        extensions={[githubLight, javascript()]}
        theme={githubLightInit({
          settings: {
            fontFamily: "'Space Mono', monospace",
          },
        })}
        basicSetup={{
          foldGutter: true,
          dropCursor: false,
          allowMultipleSelections: false,
          indentOnInput: false,
        }}
      />
    </React.Fragment>
  );
};

export default Source;
