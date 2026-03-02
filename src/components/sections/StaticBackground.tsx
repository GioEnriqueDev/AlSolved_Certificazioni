export default function StaticBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f6f8fc]">
      {/* Rumore di fondo per dare texture */}
      <div className="absolute inset-0 hero-noise opacity-35 sm:opacity-50 mix-blend-overlay" />

      {/* Blob statici del Mesh */}
      <div className="absolute inset-0 opacity-55">
        <div className="absolute left-[-10%] top-[-5%] h-[50vw] w-[50vw] rounded-full bg-primary/10 blur-[80px] sm:blur-[140px]" />
        <div className="absolute right-[-10%] top-[10%] h-[40vw] w-[40vw] rounded-full bg-orange-300/12 blur-[80px] sm:blur-[120px]" />
        <div className="absolute left-[15%] bottom-[-10%] h-[55vw] w-[55vw] rounded-full bg-blue-300/10 blur-[90px] sm:blur-[140px]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[22vh] bg-gradient-to-t from-[#f6f8fc] to-transparent sm:h-[28vh]" />
    </div>
  );
}
