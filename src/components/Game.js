import React, { useContext, useEffect, useState } from "react";
import Board from "./Board";
import { GameContext } from "./context/GameContext";
import { calculateWinner } from "../helper";
import './style.css';

const Game = () => {
  const [board, setBoard, xIsNext, setXIsNext,winner, setWinner, boardHistory, setBoardHistory, step, setStep] = useContext(GameContext);
// const winner = calculateWinner(board);

  
  useEffect(() => {
      setWinner(calculateWinner(board));
      console.log('!winner', !winner)
    if (!winner){
        console.log('ste step%2', step, step%2)
        setXIsNext(step%2?false:true);
        
    }
        
  }, [board]);

  const renderHistory = ()=>{
    return boardHistory.map((step, index)=>{
        return <button key={index} className='step' onClick={()=>jumpTo(index)}>Move {index}</button>
    })
  }

  const jumpTo = (index) => {
      console.log(index)
    setBoard(boardHistory[index])
    setStep(index);
  };
  const renderGameStatus= ()=>{
      if (winner){
          return `Winner ${winner[0]}`
      } else if(step >=9){
          return 'Game is a Draw'
      }

    return `NextPlayer ${xIsNext ? "X" : "O"}`
  }
  return (
    <div className='game'>
      <Board squares={board}  />
      <div className='history'>
        <p>{renderGameStatus()}</p>
        {renderHistory()}
      </div>
      
    </div>
  );
};
export default Game;
