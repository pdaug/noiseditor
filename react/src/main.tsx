import { createRoot } from "react-dom/client";
import React, { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

import type {
  Node,
  Edge,
  NodeProps,
  NodeChange,
  EdgeChange,
  Connection,
} from "@xyflow/react";
import { Position, SelectionMode } from "@xyflow/react";
import { ReactFlow, Background, Handle } from "@xyflow/react";
import { applyNodeChanges, applyEdgeChanges, addEdge } from "@xyflow/react";

import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { python } from "@codemirror/lang-python";
import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

// styles
import "./main.css";
import "@xyflow/react/dist/style.css";

const container = document.getElementById("ne-container")!;
const root = createRoot(container);

type CodeExtensions = "py" | "js" | "jsx" | "ts" | "tsx" | "css" | "html";

type CodeData = {
  name: string;
  extension: CodeExtensions;
  description: string;
  source: string;
};

type CodeDataWithProps = CodeData & {
  uid: string;
  createDate: string;
  updateDate: string;
};

type FlowData = {
  nodes: Node[];
  edges: Edge[];
};

const apiCode = {
  NewCode: async function (code: CodeData) {
    const request = await axios.post("http://localhost:5005/api/code", code);
    return request;
  },
  EditCode: async function (uid: string, code: CodeData) {
    const request = await axios.put(
      `http://localhost:5005/api/code/${uid}`,
      code,
    );
    return request;
  },
};

const ApiFlow = {
  LoadFlow: async function () {
    const request = await axios.get(`http://localhost:5005/api/flow`);
    return request;
  },
  SaveFlow: async function (data: FlowData) {
    const request = await axios.post(`http://localhost:5005/api/flow`, data);
    return request;
  },
};

const initialNodes = [
  {
    id: "1",
    data: {},
    type: "NodeCode",
    position: { x: 0, y: 0 },
    dragHandle: ".ne-node-draggable",
  },
  {
    id: "2",
    data: {},
    type: "NodeCode",
    position: { x: 800, y: 400 },
    dragHandle: ".ne-node-draggable",
  },
];

const initialEdges = [{ id: "1-2", source: "1", target: "2" }];

const initialCodes: CodeDataWithProps[] = [
  {
    uid: "1",
    name: "meu codigo js",
    description: "",
    source: "console.log('Olá');",
    extension: "js" as CodeExtensions,
    createDate: new Date().toISOString(),
    updateDate: new Date().toISOString(),
  },
  {
    uid: "2",
    name: "meu codigo html",
    description: "",
    source: "<h1>Um texto</h1>",
    extension: "html" as CodeExtensions,
    createDate: new Date().toISOString(),
    updateDate: new Date().toISOString(),
  },
];

type MainContextProps = {
  modal: boolean;
  OpenModal: () => void;
  CloseModal: () => void;
  nodes: Node[];
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  codes: CodeDataWithProps[];
  setCodes: React.Dispatch<React.SetStateAction<CodeDataWithProps[]>>;
};

const MainContext = createContext<MainContextProps>({} as MainContextProps);

type MainContextProviderProps = {
  children: React.ReactNode;
};

const MainContextProvider = function ({ children }: MainContextProviderProps) {
  const [modal, setModal] = useState(false);
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [codes, setCodes] = useState<CodeDataWithProps[]>(initialCodes);

  useEffect(function () {
    ApiFlow.LoadFlow()
      .then(function ({ data }) {
        if (!data) {
          console.error("[react/src/main.tsx]", "no data");
          return;
        }
        console.log(data);
        return;
      })
      .catch(function (err) {
        console.error("[react/src/main.tsx]", err);
        return;
      });
    return;
  }, []);

  const OpenModal = function () {
    setModal(true);
    return;
  };

  const CloseModal = function () {
    setModal(false);
    return;
  };

  return (
    <MainContext.Provider
      value={{
        modal,
        OpenModal,
        CloseModal,
        nodes,
        setNodes,
        edges,
        setEdges,
        codes,
        setCodes,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const NodeCode = function ({ id }: NodeProps) {
  const { codes, setCodes } = useContext(MainContext);

  const codeIndex = codes?.findIndex(function (code) {
    return code.uid === id;
  });

  const extension = {
    py: python(),
    html: html(),
    css: css(),
    js: javascript({ jsx: false, typescript: false }),
    jsx: javascript({ jsx: true, typescript: false }),
    ts: javascript({ jsx: false, typescript: true }),
    tsx: javascript({ jsx: true, typescript: true }),
  };

  const extensionSelected = extension[codes[codeIndex].extension];

  return (
    <React.Fragment>
      <Handle type="target" position={Position.Left} />
      <div className="ne-node-code">
        <div className="ne-node-draggable"></div>
        <div className="ne-node-code-header">
          <input
            type="text"
            value={codes?.[codeIndex]?.name || ""}
            onChange={function (event) {
              setCodes(function (prevCodes) {
                const clonePrevCode = window.structuredClone([...prevCodes]);
                clonePrevCode[codeIndex].name =
                  event.currentTarget?.value || "";
                clonePrevCode[codeIndex].updateDate = new Date().toISOString();
                return clonePrevCode;
              });
              return;
            }}
          />
          <select
            value={codes?.[codeIndex]?.extension || "js"}
            onChange={function (event) {
              setCodes(function (prevCodes) {
                const clonePrevCode = window.structuredClone([...prevCodes]);
                clonePrevCode[codeIndex].extension = (event.currentTarget
                  ?.value || "js") as CodeExtensions;
                clonePrevCode[codeIndex].updateDate = new Date().toISOString();
                return clonePrevCode;
              });
              return;
            }}
          >
            {Object.keys(extension)?.map(function (ext) {
              return (
                <option key={ext} value={ext}>
                  {ext}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <ReactCodeMirror
            width="640px"
            height="480px"
            theme={vscodeDark}
            extensions={[extensionSelected]}
            value={codes?.[codeIndex]?.source || ""}
            onChange={function (value) {
              setCodes(function (prevCodes) {
                const clonePrevCode = window.structuredClone([...prevCodes]);
                clonePrevCode[codeIndex].source = value;
                clonePrevCode[codeIndex].updateDate = new Date().toISOString();
                return clonePrevCode;
              });
              return;
            }}
          />
        </div>
      </div>
      <Handle type="source" position={Position.Right} id={id} />
    </React.Fragment>
  );
};

const Main = function () {
  const { nodes, edges, setNodes, setEdges } = useContext(MainContext);

  const nodeTypes = {
    NodeCode: NodeCode,
  };

  const onNodesChange = function (updateNode: NodeChange[]) {
    setNodes(function (prevNodes) {
      const newNodes = applyNodeChanges(updateNode, prevNodes);
      return newNodes;
    });
    return;
  };

  const onEdgesChange = function (updateEdge: EdgeChange[]) {
    setEdges(function (prevEdges) {
      const newEdges = applyEdgeChanges(updateEdge, prevEdges);
      return newEdges;
    });
    return;
  };

  const onConnect = function (newEdge: Connection) {
    setEdges(function (prevEdges) {
      const newEdges = addEdge(newEdge, prevEdges);
      return newEdges;
    });
    return;
  };

  return (
    <React.Fragment>
      <ReactFlow
        fitView
        snapToGrid
        zoomOnScroll
        selectionOnDrag
        selectionMode={SelectionMode.Partial}
        style={{ background: "#2b2b2b" }}
        nodeTypes={nodeTypes}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        proOptions={{ hideAttribution: true }}
      >
        <Background />
      </ReactFlow>
    </React.Fragment>
  );
};

root.render(
  <MainContextProvider>
    <Main />
  </MainContextProvider>,
);
