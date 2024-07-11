import "./RuleRow.css";

export default function RuleRow({ name, score, doScore }) {
  return (
    <tr className="RuleRow RuleRow-active" onClick={doScore}>
      <td className="RuleRow-name">{name}</td>
      <td className="RuleRow-score">{score}</td>
    </tr>
  );
}
