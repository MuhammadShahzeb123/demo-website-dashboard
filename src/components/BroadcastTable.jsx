import { useState } from "react";
import { broadcasts } from "../data";

export default function BroadcastTable() {
  const [syncing, setSyncing] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSync() {
    setSyncing(true);
  }

  function handleSendTest() {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    }, 1500);
  }

  return (
    <div className="table-container">
      <div className="table-toolbar">
        <h2>Broadcasts</h2>
        <div className="table-actions">
          <button className={`btn btn-outline ${syncing ? "btn-loading" : ""}`} onClick={handleSync}>
            {syncing ? (
              <>
                <span className="spinner" /> Syncing...
              </>
            ) : (
              "Sync with Mailchimp"
            )}
          </button>
          <div className="send-test-wrapper">
            <button className={`btn btn-outline ${sending ? "btn-loading" : ""}`} onClick={handleSendTest}>
              {sending ? (
                <>
                  <span className="spinner" /> Sending...
                </>
              ) : (
                "Send Test Email"
              )}
            </button>
            {sent && <span className="sent-feedback">Test sent!</span>}
          </div>
          <button className="btn btn-primary" onClick={() => {}}>
            + New Broadcast
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Date</th>
            <th>Recipients</th>
            <th>Opens</th>
            <th>Clicks</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {broadcasts.map((b) => (
            <tr key={b.id}>
              <td className="cell-bold">{b.subject}</td>
              <td className="cell-muted">{b.sent}</td>
              <td>{b.recipients.toLocaleString()}</td>
              <td>{b.opens.toLocaleString()}</td>
              <td>{b.clicks.toLocaleString()}</td>
              <td>
                <span className={`badge badge-${b.status}`}>{b.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
