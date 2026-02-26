import Image from "next/image";
import abstractGlassImg from "@/assets/images/abstract_3d_glass.png";

export default function StaticBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[linear-gradient(180deg,#fbfbfd,#f6f8fc)]">
      <div className="absolute inset-0 opacity-18 mix-blend-multiply sm:opacity-22">
        <Image
          src={abstractGlassImg}
          alt=""
          aria-hidden="true"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center scale-[1.02] sm:scale-100"
        />
      </div>

      <div className="absolute inset-0 hero-noise opacity-35 sm:opacity-55" />

      <div className="absolute inset-0">
        <div className="absolute left-[-5%] top-[-5%] h-[18rem] w-[18rem] rounded-full bg-primary/7 blur-[60px] sm:left-[0%] sm:top-[-8%] sm:h-[36rem] sm:w-[36rem] sm:bg-primary/8 sm:blur-[110px]" />
        <div className="absolute right-[-6%] top-[0%] h-[17rem] w-[17rem] rounded-full bg-orange-300/8 blur-[66px] sm:right-[0%] sm:h-[34rem] sm:w-[34rem] sm:bg-orange-300/10 sm:blur-[120px]" />
        <div className="absolute left-1/2 top-[26%] h-[10rem] w-[24rem] max-w-[92vw] -translate-x-1/2 rounded-full bg-white/80 blur-[48px] sm:top-[28%] sm:h-[22rem] sm:w-[70rem] sm:max-w-[90vw] sm:bg-white/85 sm:blur-[80px]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[22vh] bg-gradient-to-t from-[#f6f8fc] to-transparent sm:h-[28vh]" />
    </div>
  );
}
