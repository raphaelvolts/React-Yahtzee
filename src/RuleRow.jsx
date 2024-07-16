import "./RuleRow.css";

export default function RuleRow({ name, score, doScore }) {
  return (
    <tr
      className="RuleRow RuleRow-active"
      onClick={score ? "" : doScore}
      disabled={score >= 0}
    >
      <td
        className="RuleRow-name"
        style={{ textDecoration: score ? "line-through" : "" }}
      >
        {name}
      </td>
      <td className="RuleRow-score">{score}</td>
    </tr>
  );
}
