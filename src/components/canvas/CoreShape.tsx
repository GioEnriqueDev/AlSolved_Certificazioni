"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "@/lib/scrollState";

export default function CoreShape() {
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);

    // Light theme elegant colors (matching the brand #f24e6b and clean aesthetics)
    const pearlWhite = new THREE.Color("#ffffff");
    const brandPrimary = new THREE.Color("#f24e6b");
    const brandOrange = new THREE.Color("#fb923c");

    useFrame((state, delta) => {
        const p = scrollState.progress;

        if (meshRef.current) {
            // Elegant passive rotation
            meshRef.current.rotation.y += delta * 0.1;
            meshRef.current.rotation.x += delta * 0.15;

            // Scroll-linked rotation addition
            meshRef.current.rotation.y = p * Math.PI * 2;

            // Pulse scaling base logic linked to scroll
            const targetScale = 1.0 + Math.sin(p * Math.PI) * 0.2;
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        }

        if (materialRef.current) {
            let targetColor = pearlWhite;
            let targetTransmission = 0.9;
            let targetRoughness = 0.1;
            let targetThickness = 2.0;

            // Light Theme Scroll boundaries mapping
            if (p < 0.3) {
                // Hero: Pure clean pearl glass
                targetColor = pearlWhite;
            } else if (p < 0.7) {
                // Mid Page (MacroAreas / Process): Morph to brand primary/orange gradient feel
                const subP = Math.min((p - 0.3) / 0.4, 1.0);
                targetColor = pearlWhite.clone().lerp(brandPrimary, subP * 0.5); // Soft tint
                targetTransmission = 0.7 - (subP * 0.3); // Gets slightly more solid
                targetRoughness = 0.1 + (subP * 0.2); // Frosted glass effect
            } else {
                // CTA Footer: Warm orange glow
                const subP = Math.min((p - 0.7) / 0.3, 1.0);
                targetColor = brandPrimary.clone().lerp(brandOrange, subP * 0.5);
                targetTransmission = 0.4;
                targetRoughness = 0.3;
            }

            // Smoothly interpolate current material properties to target
            materialRef.current.color.lerp(targetColor, 0.05);
            materialRef.current.transmission = THREE.MathUtils.lerp(materialRef.current.transmission, targetTransmission, 0.05);
            materialRef.current.roughness = THREE.MathUtils.lerp(materialRef.current.roughness, targetRoughness, 0.05);
            materialRef.current.thickness = THREE.MathUtils.lerp(materialRef.current.thickness, targetThickness, 0.05);
        }
    });

    return (
        <mesh ref={meshRef}>
            {/* Using an Icosahedron for a sleek geometric "core" feeling */}
            <icosahedronGeometry args={[2.5, 1]} />

            {/* Using MeshPhysicalMaterial for beautiful glassmorphism/refraction in the 3D view */}
            <meshPhysicalMaterial
                ref={materialRef}
                color="#ffffff"
                metalness={0.1}
                roughness={0.1}
                transmission={0.9} // Glass effect
                thickness={2.0} // Refraction thickness
                ior={1.5} // Index of refraction
                transparent
                opacity={1}
                envMapIntensity={1.5}
            />
        </mesh>
    );
}
