import "./Die.css";

export default function Die({ handleClick, val, locked, idx }) {
  /* function dieClick() {
    handelClick(idx);
  } */
  return (
    <button
      className="Die"
      style={{ backgroundColor: locked ? "grey" : "black" }}
      onClick={handleClick}
    >
      {val}
    </button>
  );
}
