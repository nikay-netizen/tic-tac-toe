
'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WINNING_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

const calculateWinner = (squares: string[]) => {
  for (let [a, b, c] of WINNING_COMBOS) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);

  const handleClick = (i: number) => {
    if (squares[i] || winner) return;
    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(""));
    setXIsNext(true);
  };

  return (
    <Card className="max-w-sm mx-auto mt-10 p-4 text-center shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Tic-Tac-Toe</h2>
      <p className="mb-4">{winner ? `🎉 Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`}</p>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {squares.map((value, index) => (
          <Button key={index} variant="outline" className="h-16 text-xl font-bold" onClick={() => handleClick(index)}>
            {value}
          </Button>
        ))}
      </div>
      <Button variant="default" onClick={resetGame}>Reset Game</Button>
    </Card>
  );
}
