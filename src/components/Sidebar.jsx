import { Home, Users, ClipboardList, Brain, FileText, Bell, BarChart3, Settings } from "lucide-react";

const NAV_ITEMS = [
  { key: "Dashboard", icon: Home },
  { key: "Patients", icon: Users },
  { key: "Tasks & Medications", icon: ClipboardList },
  { key: "AI Insights", icon: Brain },
  { key: "Shift Summary", icon: FileText },
  { key: "Alerts & Notifications", icon: Bell },
  { key: "Analytics", icon: BarChart3 },
  { key: "Settings", icon: Settings },
];

export default function Sidebar({ active, onSelect, open }) {
  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-white/90 backdrop-blur-xl border-r border-teal-100 transition-transform duration-300 ease-out z-40 ${
        open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      } w-72`}
    >
      <div className="px-6 py-5 flex items-center gap-3 border-b border-teal-100">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-500 to-sky-500 shadow-lg shadow-teal-200/50 flex items-center justify-center text-white font-bold">NM</div>
        <div>
          <p className="text-lg font-semibold text-slate-800 leading-tight">NurseMate AI</p>
          <p className="text-xs text-slate-500">Clinical Assistant</p>
        </div>
      </div>
      <nav className="py-4">
        {NAV_ITEMS.map(({ key, icon: Icon }) => {
          const isActive = active === key;
          return (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className={`w-full flex items-center gap-3 px-5 py-3.5 text-sm transition-colors group ${
                isActive
                  ? "text-teal-700 bg-teal-50 border-l-4 border-teal-500"
                  : "text-slate-600 hover:text-teal-700 hover:bg-sky-50"
              }`}
            >
              <Icon
                className={`h-5 w-5 ${isActive ? "text-teal-600" : "text-slate-500 group-hover:text-teal-600"}`}
              />
              <span className="font-medium">{key}</span>
            </button>
          );
        })}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-teal-100">
        <div className="text-xs text-slate-500">
          Shift: <span className="text-slate-700 font-medium">07:00 – 15:00</span>
        </div>
        <div className="text-xs text-slate-500">Ward: General Medicine</div>
      </div>
    </aside>
  );
}
