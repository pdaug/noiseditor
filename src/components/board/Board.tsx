import { ReactFlow, Background, Controls } from "@xyflow/react";

// styles
import "./Board.css";
import "@xyflow/react/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Hello" },
  },
  {
    id: "2",
    data: { label: "World" },
    position: { x: 100, y: 100 },
  },
];

const edges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
  },
];

const Board = function () {
  return (
    <div className="board">
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Board;
