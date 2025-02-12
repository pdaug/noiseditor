import { useCallback, useState } from "react";
import {
  ReactFlow,
  Background,
  Node,
  applyNodeChanges,
  addEdge,
  NodeChange,
  applyEdgeChanges,
  Edge,
  EdgeChange,
  Connection,
} from "@xyflow/react";

// styles
import "./Board.css";
import "@xyflow/react/dist/style.css";

// elements
import { BoardSquare, BoardText } from "./BoardElement";

const nodeTypes = {
  BoardSquare,
  BoardText,
};

const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: {},
    type: "BoardSquare",
    dragHandle: ".board-top",
  },
  {
    id: "2",
    position: { x: 400, y: 0 },
    data: {},
    type: "BoardText",
  },
];

const initialEdges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
  },
];

const Board = function () {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    function (updateNode: NodeChange<Node>[]) {
      const cloneNodes = window.structuredClone([...nodes]);
      const newNodes = applyNodeChanges(updateNode, cloneNodes);
      setNodes(newNodes);
      return;
    },
    [nodes, setNodes],
  );

  const onEdgesChange = useCallback(
    function (updateEdge: EdgeChange<Edge>[]) {
      const cloneEdges = window.structuredClone([...edges]);
      const newEdge = applyEdgeChanges(updateEdge, cloneEdges);
      setEdges(newEdge);
      return;
    },
    [edges, setEdges],
  );

  const onConnect = useCallback(
    function (updateEdge: Connection) {
      const cloneEdges = window.structuredClone([...edges]);
      const newEdge = addEdge(updateEdge, cloneEdges);
      setEdges(newEdge);
      return;
    },
    [edges, setEdges],
  );

  return (
    <div className="board">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        proOptions={{ hideAttribution: true }}
        onInit={function (instance) {
          instance.fitView();
          instance.zoomTo(1);
          return;
        }}>
        <Background bgColor="#1f1f1f" color="#ff5d73" />
      </ReactFlow>
    </div>
  );
};

export default Board;
