import "./RuleRow.css";

export default function RuleRow({ ruleName, score, doScore }) {
  return (
    <tr className="RuleRow RuleRow-active" onClick={doScore}>
      <td className="RuleRow-name">{ruleName}</td>
      <td className="RuleRow-score">{score}</td>
    </tr>
  );
}
