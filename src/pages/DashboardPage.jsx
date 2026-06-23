import { stats } from "../data";
import StatsCard from "../components/StatsCard";
import SubscriberTable from "../components/SubscriberTable";
import BroadcastTable from "../components/BroadcastTable";

export default function DashboardPage() {
  return (
    <>
      <header className="page-header">
        <h1>Email Campaign Dashboard</h1>
        <p className="page-subtitle">Monitor your email performance at a glance</p>
      </header>

      <section className="stats-grid">
        {stats.map((s) => (
          <StatsCard key={s.label} {...s} />
        ))}
      </section>

      <section className="tables-section">
        <SubscriberTable />
        <BroadcastTable />
      </section>
    </>
  );
}
