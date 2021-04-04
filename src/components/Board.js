import React from "react";

import Square from "./Square";

const Board = ({ squares }) => {
  const renderSquares = (squares) =>
    squares.map((square, i) => <Square key={i} index={i} />);

  return <div className="board">{renderSquares(squares)}</div>;
};

export default Board;
