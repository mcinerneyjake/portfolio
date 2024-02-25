import { useState } from 'react';

import { buttonContainer } from './sharedConstants.ts';
import Button from './sharedUI/Button.tsx';

const TicTacToe = () => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [tiles, setTiles] = useState<string[]>(Array(9).fill(null));
  const [status, setStatus] = useState<string>('');
  const [resetButtonIsPressed, setResetButtonIsPressed] = useState<boolean>(false);

  const resetButtonBackground = resetButtonIsPressed ? 'bg-violet-700' : 'bg-violet-500';

  function handleGameReset(isPressed: boolean) {
    setResetButtonIsPressed(isPressed);
    setXIsNext(true);
    setTiles(Array(9).fill(null));
    setStatus(`Next player: ${xIsNext ? 'X' : 'O'}`);
  }

  /** Types */
  type TileType = {
    onTileClick: () => void,
    value: string,
  }

  /** Components */
  const Tile = ({ onTileClick, value }: TileType) => (
    <Button
      className='h-20 w-20 border border-slate-600'
      onPress={onTileClick}
    >
      {value}
    </Button>
  );

  const Board = () => {
    function calculateWinner() {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
          return tiles[a];
        }
      }
      return null;
    }

    function handleClick(i: number) {
      if (tiles[i] || calculateWinner()) {
        return;
      }

      const nextSquares = tiles.slice();
      if (xIsNext) {
        nextSquares[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }
      setTiles(nextSquares);
      setXIsNext(!xIsNext);
    }

    const winner = calculateWinner();
    if (winner) {
      setStatus(`${winner} is the winner!`);
    } else {
      setStatus(`Next player: ${xIsNext ? 'X' : 'O'}`);
    }

    return (
      <>
        <Tile value={tiles[0]} onTileClick={() => handleClick(0)} />
        <Tile value={tiles[1]} onTileClick={() => handleClick(1)} />
        <Tile value={tiles[2]} onTileClick={() => handleClick(2)} />
        <Tile value={tiles[3]} onTileClick={() => handleClick(3)} />
        <Tile value={tiles[4]} onTileClick={() => handleClick(4)} />
        <Tile value={tiles[5]} onTileClick={() => handleClick(5)} />
        <Tile value={tiles[6]} onTileClick={() => handleClick(6)} />
        <Tile value={tiles[7]} onTileClick={() => handleClick(7)} />
        <Tile value={tiles[8]} onTileClick={() => handleClick(8)} />
      </>
    );
  };

  return (
    <>
      <div>{status}</div>
      <div className='grid grid-cols-3 h-60 w-60 bg-slate-50'>
       <Board />
      </div>
      <div className={`mt-3 ${buttonContainer} ${resetButtonBackground}`}>
        <Button
          className='text-xl font-medium text-white'
          onPressChange={(isPressed) => handleGameReset(isPressed)}
        >
          Restart Game
        </Button>
      </div>
    </>
  );
};

export default TicTacToe;
