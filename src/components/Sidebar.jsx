import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", icon: "📊", path: "/" },
  { label: "Campaigns", icon: "✉️", path: "/campaigns" },
  { label: "Subscribers", icon: "👥", path: "/subscribers" },
  { label: "Templates", icon: "🎨", path: "/templates" },
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
        {navItems.map((item) =>
          item.path ? (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? "nav-active" : ""}`
              }
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ) : (
            <a
              key={item.label}
              href="#"
              className="nav-item"
              onClick={(e) => e.preventDefault()}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          )
        )}
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
