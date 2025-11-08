import { useMemo, useState } from "react";
import { Plus, ChevronRight } from "lucide-react";

function Tag({ children, color = "teal" }) {
  const map = {
    teal: "bg-teal-50 text-teal-700 border-teal-200",
    red: "bg-rose-50 text-rose-700 border-rose-200",
    yellow: "bg-yellow-50 text-yellow-700 border-yellow-200",
    blue: "bg-sky-50 text-sky-700 border-sky-200",
  };
  return <span className={`px-2 py-0.5 rounded-full text-xs border ${map[color]}`}>{children}</span>;
}

function PatientRow({ p, onOpen }) {
  const color = p.condition === "Critical" ? "red" : p.condition === "Stable" ? "teal" : p.condition === "Observation" ? "yellow" : "blue";
  return (
    <tr className="hover:bg-sky-50/60 cursor-pointer" onClick={() => onOpen(p)}>
      <td className="px-4 py-3 text-slate-600">{p.id}</td>
      <td className="px-4 py-3 font-medium text-slate-800">{p.name}</td>
      <td className="px-4 py-3 text-slate-600">{p.room}</td>
      <td className="px-4 py-3"><Tag color={color}>{p.condition}</Tag></td>
      <td className="px-4 py-3 text-slate-600">{p.nextMed}</td>
      <td className="px-4 py-3 text-slate-600">{p.nurse}</td>
      <td className="px-4 py-3 text-right text-teal-600"><ChevronRight className="inline h-4 w-4" /></td>
    </tr>
  );
}

function Modal({ open, onClose, patient }) {
  if (!open || !patient) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/40" onClick={onClose} />
      <div className="relative w-[95vw] md:w-[800px] max-h-[85vh] overflow-auto bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-800">{patient.name} <span className="text-slate-400 font-normal">• {patient.id}</span></h3>
            <p className="text-sm text-slate-500">Age 64 • {patient.diagnosis}</p>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700">Close</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          <div className="md:col-span-2 p-4 rounded-xl border bg-sky-50/50 border-sky-100">
            <p className="text-sm font-medium text-slate-700 mb-3">Vitals (24h)</p>
            <svg viewBox="0 0 100 40" className="w-full h-36">
              <polyline fill="none" stroke="#0ea5a4" strokeWidth="1.5" points="0,25 10,18 20,22 30,15 40,20 50,12 60,14 70,10 80,12 90,9 100,11" />
              <polyline fill="none" stroke="#f43f5e" strokeWidth="1.5" points="0,28 10,26 20,27 30,24 40,26 50,23 60,24 70,21 80,22 90,20 100,21" />
            </svg>
            <p className="text-xs text-slate-500">Teal: SpO2 | Red: Temp trend</p>
          </div>
          <div className="space-y-3">
            <div className="p-3 rounded-xl border border-slate-200">
              <p className="text-sm font-medium text-slate-700">Risk Prediction</p>
              <p className="mt-1"><Tag color={patient.risk === "High" ? "red" : patient.risk === "Medium" ? "yellow" : "teal"}>{patient.risk}</Tag></p>
            </div>
            <div className="p-3 rounded-xl border border-slate-200">
              <p className="text-sm font-medium text-slate-700">Next Medication</p>
              <p className="text-sm text-slate-600 mt-1">{patient.nextMed}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div className="p-3 rounded-xl border border-slate-200">
            <p className="text-sm font-medium text-slate-700 mb-2">Medication Schedule</p>
            <ul className="space-y-1 text-sm text-slate-600">
              <li>09:00 • Metformin 500mg</li>
              <li>12:00 • Losartan 25mg</li>
              <li>18:00 • Atorvastatin 10mg</li>
            </ul>
          </div>
          <div className="p-3 rounded-xl border border-slate-200">
            <p className="text-sm font-medium text-slate-700 mb-2">Nurse Notes</p>
            <textarea className="w-full min-h-[100px] rounded-lg border border-slate-200 p-2 focus:outline-none focus:ring-2 focus:ring-teal-400" placeholder="Add observation…" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Patients() {
  const data = useMemo(
    () => [
      { id: "#102", name: "John Carter", room: "205", condition: "Critical", nextMed: "09:00 Metformin", nurse: "A. Rivera", diagnosis: "Pneumonia", risk: "High" },
      { id: "#118", name: "Priya Nair", room: "112", condition: "Stable", nextMed: "12:00 Losartan", nurse: "D. Chen", diagnosis: "Hypertension", risk: "Low" },
      { id: "#210", name: "Miguel Santos", room: "307", condition: "Observation", nextMed: "11:00 Insulin", nurse: "K. Rao", diagnosis: "Type 2 Diabetes", risk: "Medium" },
      { id: "#309", name: "Sara Ahmed", room: "413", condition: "Stable", nextMed: "14:00 Vitamin D", nurse: "A. Rivera", diagnosis: "Post-op Care", risk: "Low" },
    ],
    []
  );
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const [patient, setPatient] = useState(null);

  const filtered = data.filter((p) => (filter === "All" ? true : p.condition === filter));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {["All", "Critical", "Stable", "Observation"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-full text-sm border ${
                filter === f ? "bg-teal-600 text-white border-teal-600" : "bg-white text-slate-700 border-slate-200 hover:bg-sky-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-teal-600 text-white text-sm shadow hover:bg-teal-700">
          <Plus className="h-4 w-4" /> Add New Patient
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-sky-50 text-slate-600">
            <tr>
              <th className="text-left px-4 py-3 font-medium">Patient ID</th>
              <th className="text-left px-4 py-3 font-medium">Name</th>
              <th className="text-left px-4 py-3 font-medium">Room No.</th>
              <th className="text-left px-4 py-3 font-medium">Condition</th>
              <th className="text-left px-4 py-3 font-medium">Next Medication</th>
              <th className="text-left px-4 py-3 font-medium">Assigned Nurse</th>
              <th className="text-right px-4 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <PatientRow key={p.id} p={p} onOpen={(patient) => { setPatient(patient); setOpen(true); }} />
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} patient={patient} />
    </div>
  );
}
