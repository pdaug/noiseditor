import { tags } from "@lezer/highlight";

const SourceConfigThemeColors = {
  gray: "#666",
  red: "#ff7588",
  pink: "#ff8fdd",
  orange: "#ffa961",
  blue: "#84c3e0",
  purple: "#c2baff",
  green: "#d3ffa1",
  yellow: "#ffd86b",
};

const SourceConfigThemeStyles = [
  {
    tag: tags.comment,
    color: SourceConfigThemeColors.gray,
  },
  {
    tag: tags.moduleKeyword,
    color: SourceConfigThemeColors.red,
  },
  {
    tag: tags.definitionKeyword,
    color: SourceConfigThemeColors.red,
  },
  {
    tag: tags.controlKeyword,
    color: SourceConfigThemeColors.red,
  },
  {
    tag: tags.keyword,
    color: SourceConfigThemeColors.red,
  },
  {
    tag: tags.variableName,
    color: SourceConfigThemeColors.blue,
  },
  {
    tag: tags.propertyName,
    color: SourceConfigThemeColors.purple,
  },
  {
    tag: tags.className,
    color: SourceConfigThemeColors.pink,
  },
  {
    tag: tags.number,
    color: SourceConfigThemeColors.green,
  },
  {
    tag: tags.function(tags.variableName),
    color: SourceConfigThemeColors.yellow,
  },
  {
    tag: tags.function(tags.propertyName),
    color: SourceConfigThemeColors.yellow,
  },
  {
    tag: tags.string,
    color: SourceConfigThemeColors.orange,
  },
  {
    tag: tags.special(tags.string),
    color: SourceConfigThemeColors.orange,
  },
];

const SourceConfigThemeSettings = {
  fontFamily: "'Roboto Mono', monospace",
};

const SourceConfigSetup = {
  foldGutter: true,
  dropCursor: false,
  allowMultipleSelections: false,
  indentOnInput: false,
};

export {
  SourceConfigThemeColors,
  SourceConfigThemeStyles,
  SourceConfigThemeSettings,
  SourceConfigSetup,
};
