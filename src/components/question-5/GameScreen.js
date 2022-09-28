import React, { useState } from "react";
import "./GameScreen.css";
import Tile from "./Tile";
const GameScreen = () => {
  const [gameNumbers, setGameNumbers] = useState([]);
  const [isWinner, setIsWinner] = useState(false);
  const [isSelectionCompleted, setIsSelectionCompleted] = useState(false);

  const handleStart = () => {
    let randomNumberArr = [];
    for (let i = 0; i < 18; i++) {
      randomNumberArr[i] = i;
    }
    randomNumberArr = [...randomNumberArr, ...randomNumberArr];
    randomNumberArr = shuffleArray(randomNumberArr);

    const gameArray = randomNumberArr.map((e, index) => {
      return {
        number: e,
        id: index,
        isEliminated: false,
        isSelected: false,
      };
    });
    setGameNumbers(gameArray);
  };

  const handleSelection = (id) => {
    let newGameState = [...gameNumbers];
    newGameState.forEach((e) => {
      if (e.id === id) e.isSelected = true;
    });

    setGameNumbers(newGameState);

    const selectedTiles = gameNumbers.filter((e) => e.isSelected === true);
    if (selectedTiles.length === 2) {
      setIsSelectionCompleted(true);
      setTimeout(() => {
        const eliminateTiles = checkTilesForElimination(
          gameNumbers,
          selectedTiles
        );
        if (eliminateTiles) eliminateTilesFromBoard(gameNumbers, selectedTiles);
        else resetBoardAfterSelection(gameNumbers);

        if (checkWinner(gameNumbers)) {
          setIsWinner(true);
        }
      }, 1000);
    }
  };

  const checkWinner = (gameNumbers) => {
    let isWinner = false;
    gameNumbers.forEach((e) => {
      e.isEliminated === true ? (isWinner = true) : (isWinner = false);
    });
    return isWinner;
  };

  const checkTilesForElimination = (gameNumbers, selectedTiles) => {
    let eliminateSelectedTiles = false;
    if (selectedTiles[0].number === selectedTiles[1].number) {
      eliminateSelectedTiles = true;
    }

    return eliminateSelectedTiles;
  };

  const eliminateTilesFromBoard = (gameNumbers, selectedTiles) => {
    let newGameState = gameNumbers.map((e) => {
      if (e.id === selectedTiles[0].id || e.id === selectedTiles[1].id) {
        e.isEliminated = true;
        e.isSelected = false;
      }
      return e;
    });
    setGameNumbers(newGameState);
  };
  const resetBoardAfterSelection = (gameNumbers) => {
    let newGameState = gameNumbers.map((e) => {
      if (e.isSelected === true) {
        e.isSelected = false;
      }
      return e;
    });
    setGameNumbers(newGameState);
    setIsSelectionCompleted(false);
  };
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div>
      {isWinner ? (
        <div>Congrats you won</div>
      ) : (
        <div
          className={
            isSelectionCompleted
              ? "container-disallow-user container"
              : "container"
          }>
          <div className="parent">
            {gameNumbers.map((e) => {
              return (
                <Tile
                  key={e.id}
                  number={e.number}
                  handleSelection={handleSelection}
                  id={e.id}
                  isEliminated={e.isEliminated}
                  isSelected={e.isSelected}
                />
              );
            })}
          </div>
          <div>
            <button onClick={() => handleStart()}>Start Game</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameScreen;
