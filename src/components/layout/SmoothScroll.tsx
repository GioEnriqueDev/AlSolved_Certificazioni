"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{
            lerp: 0.04,
            wheelMultiplier: 1.1,
            smoothWheel: true,
            syncTouch: true
        }}>
            {children}
        </ReactLenis>
    );
}
