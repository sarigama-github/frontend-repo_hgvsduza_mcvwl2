import { Bell, Search, Menu } from "lucide-react";

export default function Topbar({ onMenu, alerts = 2 }) {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-teal-100">
      <div className="h-16 flex items-center gap-3 px-4 md:px-8">
        <button onClick={onMenu} className="md:hidden p-2 rounded-lg hover:bg-sky-50 text-slate-600">
          <Menu className="h-5 w-5" />
        </button>
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search patient or task…"
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-white/70"
          />
        </div>
        <button className="relative p-2 rounded-lg hover:bg-sky-50 text-slate-600">
          <Bell className="h-5 w-5" />
          {alerts > 0 && (
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse"></span>
          )}
        </button>
        <div className="flex items-center gap-3 pl-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-teal-500 to-sky-500" />
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-slate-700 leading-tight">Alex Rivera</p>
            <p className="text-xs text-slate-500">Day Shift • Ward 3B</p>
          </div>
        </div>
      </div>
    </header>
  );
}
