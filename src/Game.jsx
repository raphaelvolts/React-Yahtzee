import { useState } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";

const NUM_DICE = 5;
const NUM_ROLLS = 3;
const gameParameters = {
  dice: Array.from({ length: NUM_DICE }),
  locked: Array(NUM_DICE).fill(false),
  rollsLeft: NUM_ROLLS,
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

  function roll() {
    setGameState((gs) => ({
      ...gs,
      dice: gs.dice.map((d, i) =>
        gs.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: gs.rollsLeft > 1 ? gs.locked : Array(NUM_DICE).fill(true),
      rollsLeft: gs.rollsLeft - 1
    }));
  }

  function toggleLocked(idx) {
    setGameState((gs) => ({
      ...gs,
      locked: [
        ...gs.locked.slice(0, idx),
        !gs.locked[idx],
        ...gs.locked.slice(idx + 1)
      ]
    }));
  }

  function doScore(ruleName, ruleFn) {
    setGameState((gs) => ({
      ...gs,
      scores: { ...gs.scores, [ruleName]: ruleFn(gs.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false)
    }));
    roll();
  }

  return (
    <div className="Game">
      <header className="Game-Header">
        <h1 className="App-Title">Yahtzee!!</h1>
        <section className="Game-DiceSection">
          <Dice
            dice={gameState.dice}
            locked={gameState.locked}
            handleClick={toggleLocked}
          />
          <div className="Game-ButtonWrapper">
            <button
              className="Game-Reroll"
              disabled={gameState.locked.every((x) => x)}
              onClick={roll}
            >
              {gameState.rollsLeft} Rerolls left
            </button>
          </div>
        </section>
      </header>
      <ScoreTable doScore={doScore} scores={gameState.scores} />
    </div>
  );
}
