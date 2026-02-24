"use client";

import dynamic from "next/dynamic";

// Dynamically import the Scene component with ssr: false
// This prevents hydration mismatches and avoids loading the heavy Canvas during SSR.
const Scene = dynamic(() => import("./Scene"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center bg-transparent">
            {/* Minimal CSS loader fallback before Canvas mounts */}
            <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin opacity-50"></div>
        </div>
    ),
});

export default function CanvasWrapper() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Scene />
        </div>
    );
}
