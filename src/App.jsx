import { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import HeroSpline from "./components/HeroSpline.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Patients from "./components/Patients.jsx";
import { AIInsights, TasksAndMeds, Alerts, ShiftSummary } from "./components/InsightsAndOthers.jsx";

const PAGES = [
  "Dashboard",
  "Patients",
  "Tasks & Medications",
  "AI Insights",
  "Shift Summary",
  "Alerts & Notifications",
  "Analytics",
  "Settings",
];

export default function App() {
  const [active, setActive] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  const page = useMemo(() => {
    switch (active) {
      case "Dashboard":
        return (
          <div className="space-y-6">
            <HeroSpline />
            <Dashboard />
          </div>
        );
      case "Patients":
        return <Patients />;
      case "Tasks & Medications":
        return <TasksAndMeds />;
      case "AI Insights":
        return <AIInsights />;
      case "Shift Summary":
        return <ShiftSummary />;
      case "Alerts & Notifications":
        return <Alerts />;
      case "Analytics":
        return (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700">
            Analytics coming soon with trends, charts, and AI commentary.
          </div>
        );
      case "Settings":
        return (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 space-y-4">
            <div>
              <p className="text-sm text-slate-500">Personal Info</p>
              <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                <input className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Name" />
                <input className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Shift Timing" />
                <input className="px-3 py-2 rounded-xl border border-slate-200" placeholder="Department" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button className="px-3 py-2 rounded-xl bg-slate-800 text-white">Toggle Dark/Light</button>
              <select className="px-3 py-2 rounded-xl border border-slate-200">
                <option>English</option>
                <option>Hindi</option>
                <option>Kannada</option>
              </select>
              <button className="px-3 py-2 rounded-xl bg-rose-100 text-rose-700 border border-rose-200">Logout</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  }, [active]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-slate-900">
      <Sidebar active={active} onSelect={(k) => { setActive(k); setMenuOpen(false); }} open={menuOpen} />
      <div className="md:pl-72">
        <Topbar onMenu={() => setMenuOpen((v) => !v)} />
        <main className="px-4 md:px-8 py-6">{page}</main>
      </div>
    </div>
  );
}
