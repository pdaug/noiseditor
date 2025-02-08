import { useRef, useState } from "react";
import ReactCodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";

// plugins
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark, vscodeDarkInit } from "@uiw/codemirror-theme-vscode";

// styles
import {
  SourceConfigSetup,
  SourceConfigThemeStyles,
  SourceConfigThemeSettings,
} from "./SourceConfig";
import "./Source.css";

type SourceProps = {
  initialSourceValue?: string;
};

const Source = function ({ initialSourceValue }: SourceProps) {
  const extensions = [vscodeDark, javascript()];
  const sourceRef = useRef<ReactCodeMirrorRef | null>(null);

  const [sourceValue, setSourceValue] = useState(initialSourceValue || "");

  const theme = vscodeDarkInit({
    settings: SourceConfigThemeSettings,
    styles: SourceConfigThemeStyles,
  });

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
        onChange={OnChangeSource}
        basicSetup={SourceConfigSetup}
      />
    </div>
  );
};

export default Source;
