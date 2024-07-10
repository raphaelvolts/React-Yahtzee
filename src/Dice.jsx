import Die from "./Die";
import "./Dice.css";

export default function Dice({ dice, locked, handleClick }) {
  return (
    <div className="Dice">
      {dice.map((d, idx) => {
        let key = `die-${idx}`;
        let islocked = locked[idx];
        <Die
          handleClick={handleClick}
          val={d}
          locked={islocked}
          idx={idx}
          key={key}
        />;
      })}
    </div>
  );
}
