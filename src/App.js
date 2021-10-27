import { useEffect, useState } from 'react';
import Table from './components/Table';
import './styles/App.scss';

export default function App() {
  const [currentPlayer, setCurrentPlayer] = useState('x')
  const [winner, setWinner] = useState('')
  const [gameGrid, setGameGrid] = useState([
    '', '', '',
    '', '', '',
    '', '', ''
  ])

  console.log(winner);

  useEffect(() => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < winPatterns.length; i++) {
      const [a, b, c] = winPatterns[i]
      
      if(gameGrid[a] && gameGrid[a] === gameGrid[b] && gameGrid[b] === gameGrid[c]) {
        setWinner({player: gameGrid[a], winPattern: winPatterns[i]})
      }
    }
  }, [gameGrid])

  function handleReset() {
    setGameGrid(gameGrid.map(() => ''))
    setCurrentPlayer('x')
    setWinner('')
  }

  return (
    <div className="tic-tac-toe__wrapper">
      <div className="current-player">
        {currentPlayer}
      </div>
      <Table
        gameGrid={gameGrid}
        setGameGrid={setGameGrid}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        winner={winner}
      />
      {winner !== '' && <h1>Winner is: {winner.player}</h1>}
      <button
        onClick={handleReset}
      >
        Play again
      </button>
    </div>
  );
}