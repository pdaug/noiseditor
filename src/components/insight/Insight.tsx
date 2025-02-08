import { MDXEditor } from "@mdxeditor/editor";
import { useEffect, useRef, useState } from "react";

// plugins
import {
  listsPlugin,
  quotePlugin,
  headingsPlugin,
  MDXEditorMethods,
  thematicBreakPlugin,
  markdownShortcutPlugin,
} from "@mdxeditor/editor";

// styles
import "./Insight.css";
import "@mdxeditor/editor/style.css";

type InsightProps = {
  initialInsightValue?: string;
};

const Insight = function ({ initialInsightValue }: InsightProps) {
  const insightRef = useRef<MDXEditorMethods | null>(null);
  const [insightValue, setInsightValue] = useState(initialInsightValue || "");

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

  const OnChangeInsight = function (markdown: string) {
    if (markdown) {
      setInsightValue(markdown);
      return;
    }
    return;
  };

  return (
    <div className="insight">
      <MDXEditor
        ref={insightRef}
        plugins={plugins}
        markdown={insightValue}
        onChange={OnChangeInsight}
      />
    </div>
  );
};

export default Insight;
