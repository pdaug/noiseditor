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
