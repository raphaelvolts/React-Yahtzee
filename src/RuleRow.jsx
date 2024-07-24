import "./RuleRow.css";

export default function RuleRow({
  name,
  score,
  doScore,
  description,
  rolling
}) {
  return (
    <tr
      className={`RuleRow RuleRow-${
        score === undefined ? "active" : "disabled"
      }`}
      onClick={score !== undefined || rolling ? "" : doScore}
      disabled={score >= 0}
    >
      <td className="RuleRow-name">{name}</td>
      <td className="RuleRow-score">
        {score === undefined ? description : score}
      </td>
    </tr>
  );
}
