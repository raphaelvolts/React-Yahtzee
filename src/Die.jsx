import "./Die.css";

export default function Die({ handelClick, val, locked, idx }) {
  function dieClick() {
    handelClick(idx);
  }
  return (
    <button
      className="Die"
      style={{ backgroundColor: locked ? "grey" : "black" }}
      onClick={dieClick}
    >
      {val}
    </button>
  );
}
