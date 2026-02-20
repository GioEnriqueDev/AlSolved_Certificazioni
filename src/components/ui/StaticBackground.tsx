import Image from "next/image";
import abstractGlassImg from "@/assets/images/abstract_3d_glass.png";

export default function StaticBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none bg-[#FAFAFA] z-[-1]">
            {/* Base Image with high transparency and no movement */}
            <div className="absolute inset-0 z-[-1] opacity-20 mix-blend-multiply">
                <Image
                    src={abstractGlassImg}
                    alt="Abstract Background"
                    fill
                    className="object-cover object-center"
                    priority
                    unoptimized
                />
            </div>

            {/* Static Light Blooms for readability */}
            <div className="absolute inset-x-0 top-0 h-[60vh]">
                <div className="absolute top-[-20%] left-[0%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] mix-blend-multiply opacity-50" />
                <div className="absolute top-[10%] right-[0%] w-[800px] h-[800px] bg-orange-200/10 rounded-full blur-[160px] mix-blend-multiply opacity-40" />
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-white/90 blur-[100px] rounded-full z-10" />
            </div>

            {/* Subtle bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-[#FAFAFA] to-transparent z-10" />

            {/* Global grain texture for filmic look */}
            <div
                className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.85\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}
            ></div>
        </div>
    );
}
