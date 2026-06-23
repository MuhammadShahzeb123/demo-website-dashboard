const navItems = [
  { label: "Dashboard", icon: "📊", active: true },
  { label: "Campaigns", icon: "✉️" },
  { label: "Subscribers", icon: "👥" },
  { label: "Templates", icon: "🎨" },
  { label: "Analytics", icon: "📈" },
  { label: "Settings", icon: "⚙️" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="brand-icon">📧</span>
        <span className="brand-text">MailDash</span>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`nav-item ${item.active ? "nav-active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              if (item.label !== "Dashboard") {
                alert(`Navigating to ${item.label}... (demo only)`);
              }
            }}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="user-avatar">JD</div>
          <div className="user-info">
            <span className="user-name">John Doe</span>
            <span className="user-role">Admin</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
