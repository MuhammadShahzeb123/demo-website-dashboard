import { useState } from "react";
import { templates } from "../data";

export default function TemplatesPage() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <header className="page-header">
        <h1>Email Templates</h1>
        <p className="page-subtitle">Choose a template to start creating your campaign</p>
      </header>

      <div className="template-grid">
        {templates.map((t) => (
          <div
            key={t.id}
            className={`template-card ${selected === t.id ? "template-selected" : ""}`}
            onClick={() => setSelected(t.id)}
          >
            <div className="template-preview" style={{ background: t.preview }}>
              <div className="template-preview-overlay">
                <div className="template-preview-bar" />
                <div className="template-preview-bar short" />
              </div>
            </div>
            <div className="template-info">
              <h3>{t.name}</h3>
              <p>{t.description}</p>
              <div className="template-meta">
                <span className="badge badge-active">{t.category}</span>
                <span className="cell-muted">Used {t.used} times</span>
              </div>
            </div>
            <div className="template-actions">
              <button className="btn btn-outline btn-small" onClick={() => {}}>
                Preview
              </button>
              <button className="btn btn-primary btn-small" onClick={() => {}}>
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
