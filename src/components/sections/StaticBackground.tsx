export default function StaticBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f3f7fc]">
      <div className="absolute inset-0 hero-noise opacity-40 mix-blend-overlay" />

      <div className="absolute inset-0 opacity-75">
        <div className="absolute left-[-12%] top-[-4%] h-[52vw] w-[52vw] rounded-full bg-sky-300/12 blur-[96px] sm:blur-[150px]" />
        <div className="absolute right-[-12%] top-[8%] h-[42vw] w-[42vw] rounded-full bg-blue-400/12 blur-[92px] sm:blur-[140px]" />
        <div className="absolute left-[22%] bottom-[-10%] h-[54vw] w-[54vw] rounded-full bg-amber-300/10 blur-[96px] sm:blur-[138px]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[24vh] bg-gradient-to-t from-[#f3f7fc] to-transparent sm:h-[30vh]" />
    </div>
  );
}
