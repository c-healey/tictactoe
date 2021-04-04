import React, { useContext, useState } from "react";
import { GameContext } from "./context/GameContext";

const Square = ({ index }) => {
  const [
    board,
    setBoard,
    xIsNext,
    ,
    winner,
    ,
    boardHistory,
    setBoardHistory,
    step,
    setStep,
  ] = useContext(GameContext);

  const handleClick = (i) => {
    const newBoard = [...board];
    if (winner || newBoard[i]) return;

    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    // console.log('Square step, history.len', step,boardHistory.length )
    // if (step < boardHistory.length-1) {
    //   setBoardHistory(boardHistory.slice(0, step+1));
    // } else {
      setBoardHistory([...boardHistory.slice(0, step+1), newBoard]);
      setStep(step + 1);
    // }
    
  };
  return (
    <button className="square" data-testid={index} onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );
};
export default Square;
