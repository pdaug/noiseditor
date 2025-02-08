import { tags } from "@lezer/highlight";
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

  const red = "#ff7588";
  const pink = "#ff8fdd";
  const orange = "#ffa961";
  const blue = "#84c3e0";
  const purple = "#c2baff";
  const green = "#d3ffa1";
  const yellow = "#ffd86b";

  const theme = vscodeDarkInit({
    settings: {
      fontFamily: "'Roboto Mono', monospace",
    },
    styles: [
      {
        tag: tags.comment,
        color: "#666",
      },

      {
        tag: tags.moduleKeyword,
        color: red,
      },
      {
        tag: tags.definitionKeyword,
        color: red,
      },
      {
        tag: tags.controlKeyword,
        color: red,
      },
      {
        tag: tags.keyword,
        color: red,
      },

      {
        tag: tags.variableName,
        color: blue,
      },

      {
        tag: tags.propertyName,
        color: purple,
      },

      {
        tag: tags.className,
        color: pink,
      },

      {
        tag: tags.number,
        color: green,
      },

      {
        tag: tags.function(tags.variableName),
        color: yellow,
      },
      {
        tag: tags.function(tags.propertyName),
        color: yellow,
      },

      {
        tag: tags.string,
        color: orange,
      },
      {
        tag: tags.special(tags.string),
        color: orange,
      },
    ],
  });

  const basicSetup = {
    foldGutter: true,
    dropCursor: false,
    allowMultipleSelections: false,
    indentOnInput: false,
  };

  const [sourceValue, setSourceValue] = useState(
    `// Example borrowed from: https://github.com/PacktPublishing/JavaScript-by-Example/blob/master/Chapter07/CompletedCode/src/services/api/apiCall.js
// Define timeout duration
const timeoutDuration = 12000;

// Random number to better showcase syntax highlighting
const NUMBER = 81274509182375409237;

// Will make a web request to specified route
// Returns a promise
export function apiCall(route, body = {}, method = 'post') {
    const request = new Promise((resolve, reject) => {
        const headers = new Headers({
            'Content-Type': 'application/json',
        });

        const requestDetails = {
            method,
            mode: 'cors',
            headers,
        };

        if (method !== 'GET') requestDetails.body = JSON.stringify(body);

        function handleErrors(response) {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        }

        const serverURL = process.env.REACT_APP_SERVER_URL || \`http://localhost:3000\`;

        // Make the web request w/ fetch API
        fetch(\`\${serverURL}/\${route}\`, requestDetails)
            .then(handleErrors)
            .then(data => resolve(data))
            .catch(err => reject(err));
    });

    // Define a timeout so the request cannot hang forever
    const timeout = new Promise((_, reject) => {
        setTimeout(reject, timeoutDuration, \`Request timed out!\`);
    });

    // Return a promise
    return new Promise((resolve, reject) => {
        Promise.race([request, timeout])
            .then(result => resolve(result))
            .catch(error => reject(error));
    });
}
`,
  );

  const OnChangeSource = function (value: string) {
    setSourceValue(value);
    return;
  };

  return (
    <div className="source">
      <ReactCodeMirror
        theme={theme}
        ref={sourceRef}
        value={sourceValue}
        extensions={extensions}
        basicSetup={basicSetup}
        onChange={OnChangeSource}
      />
    </div>
  );
};

export default Source;
