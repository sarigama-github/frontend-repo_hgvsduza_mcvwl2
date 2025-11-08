import { Brain, AlertTriangle, Clock, FileText, CheckCircle2 } from "lucide-react";

export function AIInsights() {
  const cards = [
    {
      title: "Critical Patient Forecast",
      desc: "3 patients may need priority attention in the next 6 hours.",
      icon: AlertTriangle,
    },
    {
      title: "Task Optimization",
      desc: "Shift tasks reordered to reduce walking time by 12%.",
      icon: Clock,
    },
    {
      title: "Care Summary Generator",
      desc: "Auto-drafted summaries ready for your review.",
      icon: FileText,
    },
  ];
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2"><Brain className="h-5 w-5 text-teal-600" /> AI-Powered Nursing Intelligence</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map(({ title, desc, icon: Icon }) => (
          <div key={title} className="rounded-2xl p-4 bg-white border border-sky-100 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-sky-50 to-white pointer-events-none" />
            <div className="relative">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-teal-500 to-sky-500 text-white flex items-center justify-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-3 font-medium text-slate-800">{title}</p>
              <p className="text-sm text-slate-600">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TasksAndMeds() {
  const tasks = [
    { time: "08:30", type: "Vitals", label: "Room 205", color: "sky" },
    { time: "09:00", type: "Meds", label: "#102 Metformin", color: "teal" },
    { time: "10:30", type: "Report", label: "Ward 3B update", color: "violet" },
    { time: "11:00", type: "Meds", label: "#210 Insulin", color: "teal" },
  ];
  const colorMap = {
    sky: "bg-sky-100 text-sky-700",
    teal: "bg-teal-100 text-teal-700",
    violet: "bg-violet-100 text-violet-700",
  };
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold text-slate-800">Tasks & Medications</p>
        <button className="px-3 py-1.5 rounded-xl bg-teal-600 text-white text-sm">Add Task</button>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="grid grid-cols-4 gap-4">
          {tasks.map((t) => (
            <div key={t.time} className="p-3 rounded-xl border border-slate-200">
              <p className="text-xs text-slate-500">{t.time}</p>
              <p className="text-sm font-medium text-slate-800">{t.type}</p>
              <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs ${colorMap[t.color]}`}>{t.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-teal-50 to-sky-50 border border-teal-100 text-sm text-slate-700">
          AI Suggestion: Patient #210 missed insulin dose yesterday — verify next check-in.
        </div>
      </div>
    </div>
  );
}

export function Alerts() {
  const items = [
    { id: 1, text: "Patient #102 — Missed 9 AM medication.", level: "red", time: "09:15" },
    { id: 2, text: "High BP detected — Room 205.", level: "yellow", time: "09:22" },
    { id: 3, text: "Temp check due — #309.", level: "blue", time: "09:40" },
  ];
  const map = {
    red: "bg-rose-50 text-rose-700 border-rose-200",
    yellow: "bg-amber-50 text-amber-700 border-amber-200",
    blue: "bg-sky-50 text-sky-700 border-sky-200",
  };
  return (
    <div className="space-y-3">
      {items.map((i) => (
        <div key={i.id} className={`rounded-xl border p-3 flex items-center justify-between ${map[i.level]}`}>
          <span className="text-sm">{i.text}</span>
          <div className="flex items-center gap-2">
            <span className="text-xs opacity-70">{i.time}</span>
            <button className="px-2 py-1 rounded-lg bg-white/70 text-slate-700 text-xs border">Mark as Seen</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ShiftSummary() {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="font-medium text-slate-800">Shift Summary</p>
        <ul className="mt-2 text-sm text-slate-600 list-disc list-inside">
          <li>Patients monitored: 14</li>
          <li>Missed/Delayed tasks: 2</li>
        </ul>
        <div className="mt-3 p-3 rounded-xl bg-sky-50 border border-sky-100 text-sm text-slate-700">
          AI Summary: Patient #102 stabilized after antipyretic; monitor SpO2 trends in #210.
        </div>
        <div className="mt-3 flex gap-2">
          <button className="px-3 py-1.5 rounded-xl bg-slate-800 text-white text-sm">Export PDF</button>
          <button className="px-3 py-1.5 rounded-xl bg-teal-600 text-white text-sm">Send to Supervisor</button>
        </div>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-sm text-slate-600">Care Efficiency %</p>
        <div className="mt-2 h-32 bg-gradient-to-t from-teal-200 to-sky-200 rounded-xl relative overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-teal-600" style={{ width: "80%" }} />
        </div>
      </div>
    </div>
  );
}
