import { Activity, ThermometerSun, Pill, CheckCircle2 } from "lucide-react";
import { useMemo } from "react";

function StatCard({ icon: Icon, title, value, accent = "teal" }) {
  const color = accent === "red" ? "from-rose-500 to-orange-500" : accent === "blue" ? "from-sky-500 to-indigo-500" : "from-teal-500 to-emerald-500";
  return (
    <div className="p-4 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{title}</p>
          <p className="text-2xl font-semibold text-slate-800 mt-1">{value}</p>
        </div>
        <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${color} text-white flex items-center justify-center shadow-lg shadow-teal-200/40`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

function MiniMedList() {
  const meds = useMemo(
    () => [
      { time: "09:00", name: "Metformin", patient: "#102" },
      { time: "10:30", name: "Atorvastatin", patient: "#210" },
      { time: "11:00", name: "Insulin", patient: "#210" },
      { time: "12:00", name: "Losartan", patient: "#118" },
    ],
    []
  );
  return (
    <div className="p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
      <p className="text-sm font-medium text-slate-700 mb-3">Upcoming Medications</p>
      <div className="space-y-2">
        {meds.map((m, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <span className="text-slate-500">{m.time}</span>
            <span className="text-slate-700 font-medium">{m.name}</span>
            <span className="text-teal-600">Patient {m.patient}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SimpleLine() {
  const points = Array.from({ length: 24 }, (_, i) => 50 + Math.round(Math.sin(i / 3) * 20) + (i % 5 === 0 ? 10 : 0));
  const d = points.map((y, i) => `${(i / 23) * 100},${100 - y}`).join(" ");
  return (
    <svg viewBox="0 0 100 100" className="w-full h-40">
      <defs>
        <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#00BFA6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#EAF6F9" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <polyline fill="none" stroke="#00BFA6" strokeWidth="2" points={d} />
      <polygon fill="url(#grad)" points={`0,100 ${d} 100,100`} />
    </svg>
  );
}

function SimpleBars() {
  const values = [65, 80, 55, 72, 90, 60];
  return (
    <div className="flex items-end gap-2 h-40">
      {values.map((v, i) => (
        <div key={i} className="flex-1 bg-sky-100 rounded-lg relative overflow-hidden">
          <div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-500 to-sky-400 rounded-lg"
            style={{ height: `${v}%` }}
          />
        </div>
      ))}
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Activity} title="Patients Assigned" value={14} />
        <StatCard icon={ThermometerSun} title="Critical Alerts" value={3} accent="red" />
        <StatCard icon={CheckCircle2} title="Tasks Completed" value="78%" accent="blue" />
        <MiniMedList />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
          <p className="text-sm font-medium text-slate-700 mb-3">Patient Vitals Stability</p>
          <SimpleLine />
        </div>
        <div className="p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
          <p className="text-sm font-medium text-slate-700 mb-3">Task Completion</p>
          <SimpleBars />
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-teal-50 border border-teal-100">
        <p className="text-sm text-slate-700">
          <span className="font-semibold">AI Insight:</span> 2 patients show abnormal temperature trends.
        </p>
      </div>
    </div>
  );
}
