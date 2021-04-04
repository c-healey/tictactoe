import React, { useState } from "react";

export const GameContext = React.createContext();

export const GameProvider = (props) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);
    const [boardHistory, setBoardHistory] = useState([board]);
    const [step, setStep] = useState(0);

  return (
    <GameContext.Provider
      value={[board, setBoard, xIsNext, setXIsNext,winner, setWinner, boardHistory, setBoardHistory, step, setStep]}
    >
      {props.children}
    </GameContext.Provider>
  );
};