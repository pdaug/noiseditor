import {
  MDXEditor,
  listsPlugin,
  quotePlugin,
  headingsPlugin,
  MDXEditorMethods,
  thematicBreakPlugin,
  markdownShortcutPlugin,
} from "@mdxeditor/editor";
import { useEffect, useRef, useState } from "react";

// styles
import "./Insight.css";
import "@mdxeditor/editor/style.css";

const Insight = function () {
  const insightRef = useRef<MDXEditorMethods | null>(null);
  const [insightValue, setInsightValue] = useState("# Filename");

  const plugins = [
    quotePlugin(),
    listsPlugin(),
    headingsPlugin(),
    thematicBreakPlugin(),
    markdownShortcutPlugin(),
  ];

  useEffect(function () {
    if (insightRef.current) {
      insightRef.current.focus();
      return;
    }
    return;
  }, []);

  return (
    <div className="insight">
      <div className="insight-field">
        <input
          type="text"
          name="name"
          minLength={2}
          maxLength={128}
          id="insight_name"
          placeholder="Filename"
        />
        <select name="extension" id="insight_extension">
          <option value="js">JavaScript (.js)</option>
          <option value="ts">TypeScript (.ts)</option>
          <option value="py">Python (.py)</option>
        </select>
      </div>

      <MDXEditor
        ref={insightRef}
        plugins={plugins}
        markdown={insightValue}
        onChange={function (markdown) {
          if (markdown) {
            setInsightValue(markdown);
            return;
          }
          return;
        }}
      />
    </div>
  );
};

export default Insight;
