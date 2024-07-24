import { useEffect, useState } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;
const gameParameters = {
  gameStart: false,
  dice: Array.from({ length: NUM_DICE }, (_, i) => i + 1),
  locked: Array(NUM_DICE).fill(false),
  rollsLeft: NUM_ROLLS,
  rolling: false,
  scores: {
    ones: undefined,
    twos: undefined,
    threes: undefined,
    fours: undefined,
    fives: undefined,
    sixes: undefined,
    threeOfKind: undefined,
    fourOfKind: undefined,
    fullHouse: undefined,
    smallStraight: undefined,
    largeStraight: undefined,
    yahtzee: undefined,
    chance: undefined
  }
};

export default function Game() {
  const [gameState, setGameState] = useState(gameParameters);
  console.log(gameState.dice);
  if (!gameState.gameStart) {
    setGameState((gs) => ({ ...gs, gameStart: true }));
    animateRoll();
  }

  function animateRoll() {
    setGameState((gs) => ({
      ...gs,
      rolling: true
    }));
    setTimeout(roll, 1000);
  }
  function roll() {
    setGameState((gs) => ({
      ...gs,
      dice: gs.dice.map((d, i) =>
        gs.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: gs.rollsLeft > 1 ? gs.locked : Array(NUM_DICE).fill(true),
      rollsLeft: gs.rollsLeft - 1,
      rolling: false
    }));
  }

  function toggleLocked(idx) {
    if (gameState.rollsLeft > 0) {
      setGameState((gs) => ({
        ...gs,
        locked: [
          ...gs.locked.slice(0, idx),
          !gs.locked[idx],
          ...gs.locked.slice(idx + 1)
        ]
      }));
    }
  }

  function doScore(ruleName, ruleFn) {
    setGameState((gs) => ({
      ...gs,
      scores: { ...gs.scores, [ruleName]: ruleFn(gs.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false)
    }));
    animateRoll();
  }

  function rollsInfo() {
    const message = [
      "0 Rolls Left",
      "1 Roll Left",
      "2 Rolls Left",
      "Starting Round"
    ];
    return message[gameState.rollsLeft];
  }
  const isRollPossible =
    gameState.rolling ||
    gameState.rollsLeft <= 0 ||
    gameState.locked.every((c) => c)
      ? true
      : false;
  return (
    <div className="Game">
      <header className="Game-Header">
        <h1 className="App-Title">Yahtzee!!</h1>
        <section className="Game-DiceSection">
          <Dice
            dice={gameState.dice}
            locked={gameState.locked}
            handleClick={toggleLocked}
            disabled={isRollPossible}
            rolling={gameState.rolling}
          />
          <div className="Game-ButtonWrapper">
            <button
              className="Game-Reroll"
              disabled={isRollPossible}
              onClick={animateRoll}
            >
              {rollsInfo()}
            </button>
          </div>
        </section>
      </header>
      <ScoreTable
        doScore={doScore}
        scores={gameState.scores}
        rolling={gameState.rolling}
      />
    </div>
  );
}
