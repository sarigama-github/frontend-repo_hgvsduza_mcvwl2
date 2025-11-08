import Spline from "@splinetool/react-spline";

export default function HeroSpline() {
  return (
    <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden border border-sky-100 shadow-inner">
      <Spline
        scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-900/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
      <div className="absolute left-6 top-6 text-white drop-shadow-lg">
        <p className="text-xs uppercase tracking-widest text-white/80">NurseMate AI</p>
        <h2 className="text-2xl md:text-3xl font-semibold">Calm, Clinical, Intelligent</h2>
        <p className="text-sm text-white/80">AI assistance for every shift, every patient</p>
      </div>
    </div>
  );
}
