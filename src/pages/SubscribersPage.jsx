import { useState } from "react";
import { subscribers } from "../data";

export default function SubscribersPage() {
  const [rows, setRows] = useState(subscribers);
  const [search, setSearch] = useState("");
  const [segment, setSegment] = useState("all");

  const filtered = rows.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase());
    const matchesSegment =
      segment === "all" || s.status === segment;
    return matchesSearch && matchesSegment;
  });

  const segments = [
    { key: "all", label: "All", count: rows.length },
    { key: "active", label: "Active", count: rows.filter((s) => s.status === "active").length },
    { key: "inactive", label: "Inactive", count: rows.filter((s) => s.status === "inactive").length },
    { key: "bounced", label: "Bounced", count: rows.filter((s) => s.status === "bounced").length },
  ];

  return (
    <>
      <header className="page-header">
        <h1>Subscribers</h1>
        <p className="page-subtitle">Manage your email list ({rows.length} total)</p>
      </header>

      <div className="segment-tabs">
        {segments.map((seg) => (
          <button
            key={seg.key}
            className={`segment-tab ${segment === seg.key ? "segment-active" : ""}`}
            onClick={() => setSegment(seg.key)}
          >
            {seg.label}
            <span className="segment-count">{seg.count}</span>
          </button>
        ))}
      </div>

      <div className="table-container">
        <div className="table-toolbar">
          <h2>Subscriber List</h2>
          <div className="table-actions">
            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
            <button className="btn btn-outline" onClick={() => {}}>
              Export CSV
            </button>
            <button className="btn btn-primary" onClick={() => {}}>
              + Add Subscriber
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Subscribed</th>
              <th>Opens</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td className="cell-muted">{s.email}</td>
                <td>
                  <span className={`badge badge-${s.status}`}>{s.status}</span>
                </td>
                <td className="cell-muted">{s.subscribed}</td>
                <td>{s.opens}</td>
                <td>
                  <button
                    className="btn btn-small btn-outline"
                    onClick={() => setRows((prev) => prev.filter((r) => r.id !== s.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
