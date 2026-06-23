import { useState } from "react";
import { campaigns } from "../data";

const statusColors = {
  completed: "badge-sent",
  active: "badge-active",
  scheduled: "badge-scheduled",
  draft: "badge-draft",
};

export default function CampaignsPage() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all"
    ? campaigns
    : campaigns.filter((c) => c.status === filter);

  return (
    <>
      <header className="page-header">
        <h1>Campaigns</h1>
        <p className="page-subtitle">Track and manage your email campaigns</p>
      </header>

      <div className="campaigns-summary">
        <div className="campaign-stat">
          <span className="campaign-stat-value">{campaigns.length}</span>
          <span className="campaign-stat-label">Total Campaigns</span>
        </div>
        <div className="campaign-stat">
          <span className="campaign-stat-value">$49,210</span>
          <span className="campaign-stat-label">Total Revenue</span>
        </div>
        <div className="campaign-stat">
          <span className="campaign-stat-value">4.2%</span>
          <span className="campaign-stat-label">Avg Conversion Rate</span>
        </div>
        <div className="campaign-stat">
          <span className="campaign-stat-value">3</span>
          <span className="campaign-stat-label">Active Campaigns</span>
        </div>
      </div>

      <div className="table-container">
        <div className="table-toolbar">
          <h2>All Campaigns</h2>
          <div className="table-actions">
            <select
              className="search-input"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="scheduled">Scheduled</option>
              <option value="draft">Draft</option>
            </select>
            <button className="btn btn-outline" onClick={() => {}}>
              Export Report
            </button>
            <button className="btn btn-primary" onClick={() => {}}>
              + New Campaign
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Campaign</th>
              <th>Type</th>
              <th>Sent</th>
              <th>Recipients</th>
              <th>Opens</th>
              <th>Clicks</th>
              <th>Conversions</th>
              <th>Revenue</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id}>
                <td className="cell-bold">{c.name}</td>
                <td className="cell-muted">{c.type}</td>
                <td className="cell-muted">{c.sent}</td>
                <td>{c.recipients.toLocaleString()}</td>
                <td>{c.opens.toLocaleString()}</td>
                <td>{c.clicks.toLocaleString()}</td>
                <td>{c.conversions}</td>
                <td className="cell-bold">{c.revenue}</td>
                <td>
                  <span className={`badge ${statusColors[c.status]}`}>{c.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
