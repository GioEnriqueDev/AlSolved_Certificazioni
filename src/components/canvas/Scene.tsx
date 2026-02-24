"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import CoreShape from "./CoreShape";

export default function Scene() {
    return (
        <Canvas
            dpr={[1, 2]} // Capping dpr to 2 for performance on Retina displays
            camera={{ position: [0, 0, 8], fov: 45 }}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
            {/* 
        Suspense ensures the UI doesn't block while waiting for 3D assets to load. 
        A minimal HTML fallback could be provided here if needed.
      */}
            <Suspense fallback={null}>
                {/* Baked environment map to provide cheap and realistic reflections without complex lights */}
                <Environment preset="city" />

                {/* The abstract 3D object */}
                <CoreShape />
            </Suspense>
        </Canvas>
    );
}
