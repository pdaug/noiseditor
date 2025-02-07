import {
  MDXEditor,
  listsPlugin,
  quotePlugin,
  headingsPlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
} from "@mdxeditor/editor";
import { useState } from "react";

// styles
import "@mdxeditor/editor/style.css";

const Metadata = function () {
  const [description, setDescription] = useState("");
  const plugins = [
    quotePlugin(),
    listsPlugin(),
    headingsPlugin(),
    thematicBreakPlugin(),
    markdownShortcutPlugin(),
  ];

  return (
    <div className="metadata">
      <div className="metadata-field">
        <label htmlFor="metadata_name">Name</label>
        <input
          type="text"
          name="name"
          id="metadata_name"
          placeholder="name.ext"
        />
      </div>
      <div className="metadata-field">
        <label htmlFor="metadata_extension">Extension</label>
        <select name="extension" id="metadata_extension">
          <option value="js">JavaScript (.js)</option>
          <option value="ts">TypeScript (.ts)</option>
          <option value="py">Python (.py)</option>
        </select>
      </div>
      <MDXEditor
        plugins={plugins}
        contentEditableClassName="metadata-editor"
        markdown={description}
        onChange={function (markdown) {
          if (markdown) {
            setDescription(markdown);
            return;
          }
          return;
        }}
      />
    </div>
  );
};

export default Metadata;
