import RuleRow from "./RuleRow";
import "./ScoreTable.css";
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance
} from "./Rules.js";

export default function ScoreTable({ doScore, scores, rolling }) {
  function displayScore() {
    let totalScore = 0;
    for (let key in scores) {
      if (scores[key]) totalScore += scores[key];
    }
    return totalScore;
  }
  return (
    <div className="ScoreTable">
      <section className="ScoreTable-section">
        <h2>Upper</h2>
        <table cellSpacing={"0"}>
          <tbody>
            <RuleRow
              name="Ones"
              score={scores.ones}
              description={ones.description}
              rolling={rolling}
              doScore={(evt) => doScore("ones", ones.evalRoll)}
            />
            <RuleRow
              name="Twos"
              score={scores.twos}
              description={twos.description}
              rolling={rolling}
              doScore={(evt) => doScore("twos", twos.evalRoll)}
            />
            <RuleRow
              name="Threes"
              score={scores.threes}
              description={threes.description}
              rolling={rolling}
              doScore={(evt) => doScore("threes", threes.evalRoll)}
            />
            <RuleRow
              name="Fours"
              score={scores.fours}
              description={fours.description}
              rolling={rolling}
              doScore={(evt) => doScore("fours", fours.evalRoll)}
            />
            <RuleRow
              name="Fives"
              score={scores.fives}
              description={fives.description}
              rolling={rolling}
              doScore={(evt) => doScore("fives", fives.evalRoll)}
            />
            <RuleRow
              name="Sixes"
              score={scores.sixes}
              description={sixes.description}
              rolling={rolling}
              doScore={(evt) => doScore("sixes", sixes.evalRoll)}
            />
          </tbody>
        </table>
      </section>
      <section className="ScoreTable-section ScoreTable-section-lower">
        <h2>Lower</h2>
        <table cellSpacing={"0"}>
          <tbody>
            <RuleRow
              name="Three of Kind"
              score={scores.threeOfKind}
              description={threeOfKind.description}
              rolling={rolling}
              doScore={(evt) => doScore("threeOfKind", threeOfKind.evalRoll)}
            />
            <RuleRow
              name="Four of Kind"
              score={scores.fourOfKind}
              description={fourOfKind.description}
              rolling={rolling}
              doScore={(evt) => doScore("fourOfKind", fourOfKind.evalRoll)}
            />
            <RuleRow
              name="Full House"
              score={scores.fullHouse}
              description={fullHouse.description}
              rolling={rolling}
              doScore={(evt) => doScore("fullHouse", fullHouse.evalRoll)}
            />
            <RuleRow
              name="Small Straight"
              score={scores.smallStraight}
              description={smallStraight.description}
              rolling={rolling}
              doScore={(evt) =>
                doScore("smallStraight", smallStraight.evalRoll)
              }
            />
            <RuleRow
              name="Large Straight"
              score={scores.largeStraight}
              description={largeStraight.description}
              rolling={rolling}
              doScore={(evt) =>
                doScore("largeStraight", largeStraight.evalRoll)
              }
            />
            <RuleRow
              name="Yahtzee"
              score={scores.yahtzee}
              description={yahtzee.description}
              rolling={rolling}
              doScore={(evt) => doScore("yahtzee", yahtzee.evalRoll)}
            />
            <RuleRow
              name="Chance"
              score={scores.chance}
              description={chance.description}
              rolling={rolling}
              doScore={(evt) => doScore("chance", chance.evalRoll)}
            />
          </tbody>
        </table>
      </section>
      <h2>Total Score: {displayScore()}</h2>
    </div>
  );
}
