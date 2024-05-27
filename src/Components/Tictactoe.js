import React, { useState } from "react";
import "./tictactoe.css";

const Tictactoe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [move, setMove] = useState("X");
  const [winner, setWinner] = useState(null);

  const click = (n) => {
    if (board[n] !== "" || winner) {
      alert("Invalid move");
      return;
    }

    let newBoard = [...board];
    newBoard[n] = move;
    setBoard(newBoard);

    if (checkWin(newBoard)) {
      setWinner(move);
      alert(`Player ${move} wins!`);
    } else if (checkDraw(newBoard)) {
      alert("Match Draw");
      setBoard(Array(9).fill(""));
    } else {
      setMove(move === "X" ? "O" : "X");
    }
  };

  const checkDraw = (board) => {
    return board.every((cell) => cell !== "");
  };

  const checkWin = (board) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winConditions.some((condition) => {
      const [a, b, c] = condition;
      return board[a] && board[a] === board[b] && board[a] === board[c];
    });
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setMove("X");
    setWinner(null);
  };

  return (
    <>
      <h1 className="text-center">TIC TAC TOE</h1>
      <table>
        <tbody>
          <tr>
            <td onClick={() => click(0)}><div>{board[0]}</div></td>
            <td onClick={() => click(1)}><div>{board[1]}</div></td>
            <td onClick={() => click(2)}><div>{board[2]}</div></td>
          </tr>
          <tr>
            <td onClick={() => click(3)}><div>{board[3]}</div></td>
            <td onClick={() => click(4)}><div>{board[4]}</div></td>
            <td onClick={() => click(5)}><div>{board[5]}</div></td>
          </tr>
          <tr>
            <td onClick={() => click(6)}><div>{board[6]}</div></td>
            <td onClick={() => click(7)}><div>{board[7]}</div></td>
            <td onClick={() => click(8)}><div>{board[8]}</div></td>
          </tr>
        </tbody>
      </table>
      {winner && <h2 className="winner-text">Winner: {winner}</h2>}
      <button onClick={resetGame}>Reset Game</button>
    </>
  );
};

export default Tictactoe;
