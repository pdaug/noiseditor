export type CodeExtensions =
  | "py"
  | "js"
  | "jsx"
  | "ts"
  | "tsx"
  | "css"
  | "html";

export type CodeData = {
  name: string;
  extension: CodeExtensions;
  description: string;
  source: string;
  flowId: string;
};

export type CodeDataWithProps = CodeData & {
  id: string;
  createDate: string;
  updateDate: string;
};
