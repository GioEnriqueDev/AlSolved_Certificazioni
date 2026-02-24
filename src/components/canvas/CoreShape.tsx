"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "@/lib/scrollState";

export default function CoreShape() {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<THREE.MeshStandardMaterial>(null);

    // Pre-instantiate colors for performance
    const white = new THREE.Color("#ffffff");
    const blue = new THREE.Color("#0ea5e9");
    const green = new THREE.Color("#10b981");

    useFrame((state, delta) => {
        const p = scrollState.progress;

        if (meshRef.current) {
            // Base passive rotation
            meshRef.current.rotation.y += delta * 0.1;
            meshRef.current.rotation.x += delta * 0.15;

            // Scroll-linked rotation addition
            meshRef.current.rotation.y = p * Math.PI * 4;

            // Pulse scaling base logic linked to scroll
            // Grows to 1.3 at halfway down the page
            const targetScale = 1.0 + Math.sin(p * Math.PI) * 0.3;
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        }

        if (materialRef.current) {
            let targetColor = white;
            let targetRoughness = 0.1;
            let targetMetalness = 0.9;
            let targetWireframe = false;

            // Scroll boundaries mapping
            if (p < 0.25) {
                // Hero & Quality (Clean metal/glass)
                targetColor = white;
            } else if (p < 0.6) {
                // Cyber mode (Blue tech)
                const subP = Math.min((p - 0.25) / 0.15, 1.0); // smooth transition window
                targetColor = white.clone().lerp(blue, subP);
                targetRoughness = 0.4;
                targetMetalness = 0.6;

                // Mid-cyber mode wireframe effect
                if (p > 0.4 && p < 0.5) {
                    targetWireframe = true;
                }
            } else {
                // ESG mode (Green organic)
                const subP = Math.min((p - 0.6) / 0.15, 1.0);
                targetColor = blue.clone().lerp(green, subP);
                targetRoughness = 0.2;
                targetMetalness = 0.3;
            }

            // Smoothly interpolate current material properties to target
            materialRef.current.color.lerp(targetColor, 0.1);
            materialRef.current.roughness = THREE.MathUtils.lerp(materialRef.current.roughness, targetRoughness, 0.1);
            materialRef.current.metalness = THREE.MathUtils.lerp(materialRef.current.metalness, targetMetalness, 0.1);
            materialRef.current.wireframe = targetWireframe;
        }
    });

    return (
        <mesh ref={meshRef}>
            {/* icosahedron with detail=1 creates a sleek multi-faceted gem */}
            <icosahedronGeometry args={[2.5, 1]} />
            <meshStandardMaterial
                ref={materialRef}
                color="#ffffff"
                roughness={0.1}
                metalness={0.9}
                transparent
                opacity={0.85}
                envMapIntensity={2.0}
            />
        </mesh>
    );
}
