import Image from "next/image";
import abstractGlassImg from "@/assets/images/abstract_3d_glass.png";

export default function StaticBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[linear-gradient(180deg,#fbfbfd,#f6f8fc)]">
      <div className="absolute inset-0 opacity-22 mix-blend-multiply">
        <Image
          src={abstractGlassImg}
          alt=""
          aria-hidden="true"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 hero-noise opacity-55" />

      <div className="absolute inset-0">
        <div className="absolute left-[0%] top-[-8%] h-[36rem] w-[36rem] rounded-full bg-primary/8 blur-[110px]" />
        <div className="absolute right-[0%] top-[0%] h-[34rem] w-[34rem] rounded-full bg-orange-300/10 blur-[120px]" />
        <div className="absolute left-1/2 top-[28%] h-[22rem] w-[70rem] max-w-[90vw] -translate-x-1/2 rounded-full bg-white/85 blur-[80px]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[28vh] bg-gradient-to-t from-[#f6f8fc] to-transparent" />
    </div>
  );
}
