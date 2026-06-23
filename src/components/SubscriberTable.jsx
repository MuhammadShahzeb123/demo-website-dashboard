import { useState } from "react";
import { subscribers } from "../data";

export default function SubscriberTable() {
  const [search, setSearch] = useState("");
  const [deleting, setDeleting] = useState(null);
  const [rows, setRows] = useState(subscribers);

  const filtered = rows.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
  );

  function handleDelete(id) {
    setDeleting(id);
  }

  function confirmDelete(id) {
    setRows((prev) => prev.filter((s) => s.id !== id));
    setDeleting(null);
  }

  function cancelDelete() {
    setDeleting(null);
  }

  return (
    <div className="table-container">
      <div className="table-toolbar">
        <h2>Subscribers</h2>
        <div className="table-actions">
          <input
            type="text"
            placeholder="Search subscribers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          {/* BROKEN BUTTON 1: does nothing on click */}
          <button className="btn btn-outline" onClick={() => {}}>
            Export CSV
          </button>
          <button className="btn btn-primary" onClick={() => alert("New subscriber form would open!")}>
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
                {deleting === s.id ? (
                  <span className="confirm-actions">
                    Remove?
                    <button className="btn btn-small btn-danger" onClick={() => confirmDelete(s.id)}>
                      Yes
                    </button>
                    <button className="btn btn-small btn-outline" onClick={cancelDelete}>
                      No
                    </button>
                  </span>
                ) : (
                  <button className="btn btn-small btn-outline" onClick={() => handleDelete(s.id)}>
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
