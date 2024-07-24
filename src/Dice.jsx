import Die from "./Die";
import "./Dice.css";

export default function Dice({ dice, locked, handleClick, disabled, rolling }) {
  return (
    <div className="Dice">
      {dice.map((d, idx) => {
        let key = `die-${idx}`;
        let islocked = locked[idx];
        return (
          <Die
            handleClick={() => handleClick(idx)}
            val={d}
            locked={islocked}
            idx={idx}
            key={key}
            disabled={disabled}
            rolling={rolling}
          />
        );
      })}
    </div>
  );
}
