export default function StatsCard({ label, value, change, color: _color }) {
  const isPositive = change.startsWith("+");
  return (
    <div className="stats-card">
      <div className="stats-card-header">
        <span className="stats-label">{label}</span>
      </div>
      <div className="stats-value">{value}</div>
      <span
        className="stats-change"
        style={{ color: isPositive ? "#16a34a" : "#dc2626" }}
      >
        {change} from last month
      </span>
    </div>
  );
}
