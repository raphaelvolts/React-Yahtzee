import "./Die.css";

export default function Die({
  handleClick,
  val,
  locked,
  idx,
  disabled,
  rolling
}) {
  /* function dieClick() {
    handelClick(idx);
  } */
  const dieFace = ["one", "two", "three", "four", "five", "six"];
  let classes = `Die fa-solid fa-dice-${dieFace[val - 1]} fa-5x `;
  if (locked) classes += "Die-locked";
  if (!locked && rolling) classes += "Die-rolling";

  return <i className={classes} onClick={handleClick} disabled={disabled}></i>;
}
