import React from "react";
import { Handle, Position } from "@xyflow/react";

// styles
import "./Board.css";

const BoardSquare = function () {
  return (
    <React.Fragment>
      <Handle type="target" position={Position.Left} />
      <div className="board-square">
        <div className="board-top"></div>
        <textarea placeholder="Input your text here..."></textarea>
      </div>
      <Handle type="source" position={Position.Right} />
    </React.Fragment>
  );
};

const BoardText = function () {
  return (
    <React.Fragment>
      <Handle type="target" position={Position.Left} />
      <div className="board-text">
        <textarea placeholder="Input your text here..."></textarea>
      </div>
      <Handle type="source" position={Position.Right} />
    </React.Fragment>
  );
};

export { BoardSquare, BoardText };
