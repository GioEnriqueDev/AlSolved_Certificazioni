"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Ring, Sphere, RoundedBox, Environment, Lightformer } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// A floating glass monolith
function Monolith({ position, rotation, scale, color }: { position: [number, number, number], rotation: [number, number, number], scale: [number, number, number], color: string }) {
    const mesh = useRef<THREE.Mesh>(null);
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
            <RoundedBox ref={mesh} position={position} rotation={rotation} scale={scale} args={[1, 1.4, 0.1]} radius={0.05} smoothness={4}>
                <MeshTransmissionMaterial
                    backside
                    samples={4}
                    thickness={0.5}
                    chromaticAberration={0.05}
                    anisotropy={0.1}
                    distortion={0.1}
                    distortionScale={0.5}
                    temporalDistortion={0.1}
                    color={color}
                    resolution={512}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    roughness={0.1}
                    transmission={0.9}
                    ior={1.5}
                />
            </RoundedBox>
        </Float>
    )
}

function GlowingOrb({ position, color, size, speed }: { position: [number, number, number], color: string, size: number, speed: number }) {
    const mesh = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (mesh.current) {
            mesh.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.005;
        }
    });

    return (
        <Sphere ref={mesh} args={[size, 32, 32]} position={position}>
            <meshBasicMaterial color={color} transparent opacity={0.6} fog={false} />
        </Sphere>
    )
}

function Particles() {
    const mesh = useRef<THREE.InstancedMesh>(null);
    const count = 30;
    const dummy = new THREE.Object3D();

    useFrame((state) => {
        if (mesh.current) {
            for (let i = 0; i < count; i++) {
                const t = state.clock.elapsedTime + i * 100;
                dummy.position.set(
                    (Math.sin(t * 0.1) * 10) % 20 - 10,
                    (Math.cos(t * 0.2) * 10) % 20 - 5,
                    (Math.sin(t * 0.15) * 5) - 5
                );
                dummy.scale.setScalar(Math.sin(t) * 0.05 + 0.05);
                dummy.updateMatrix();
                mesh.current.setMatrixAt(i, dummy.matrix);
            }
            mesh.current.instanceMatrix.needsUpdate = true;
        }
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#aaaaaa" transparent opacity={0.3} />
        </instancedMesh>
    );
}

// 3D Grid moving slowly
function InfiniteGrid() {
    const gridRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (gridRef.current) {
            // Slight movement of the grid texturing
            gridRef.current.position.z = (state.clock.elapsedTime * 0.2) % 1;
        }
    });

    return (
        <mesh ref={gridRef} position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial
                color="#e5e7eb"
                wireframe
                transparent
                opacity={0.15}
                fog={true}
            />
        </mesh>
    );
}

export default function Scene3D() {
    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
            className="pointer-events-none"
        >
            <fog attach="fog" args={['#fafafa', 5, 20]} />
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
            <pointLight position={[-10, -10, -5]} intensity={1} color="#fce7f3" />

            {/* The Main Props */}
            <Monolith position={[3, 0, -2]} rotation={[0.2, -0.4, 0]} scale={[2.5, 3.5, 1]} color="#ffffff" />
            <Monolith position={[-4, 1, -4]} rotation={[-0.1, 0.3, 0]} scale={[2, 2.5, 1]} color="#fdf2f8" />

            {/* Background Halo Ring */}
            <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
                <Ring args={[3.8, 4, 64]} position={[4, 2, -6]} rotation={[0.2, -0.2, 0]}>
                    <meshBasicMaterial color="#fca5a5" transparent opacity={0.1} />
                </Ring>
                <Ring args={[3.5, 3.55, 64]} position={[4, 2, -6.1]} rotation={[0.2, -0.2, 0]}>
                    <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
                </Ring>
            </Float>

            {/* Glowing Orbs representing the floating Shield Seal / lights */}
            <GlowingOrb position={[3, -1, -1]} color="#f43f5e" size={0.3} speed={2} />
            <GlowingOrb position={[-3, 0, -3]} color="#fbbf24" size={0.4} speed={1.5} />

            <Particles />
            <InfiniteGrid />

            {/* Environment lighting to make glass look premium */}
            <Environment resolution={256}>
                <group rotation={[-Math.PI / 3, 0, 0]}>
                    <Lightformer intensity={1} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color="#ffffff" />
                    <Lightformer intensity={0.5} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} color="#fecdd3" />
                </group>
            </Environment>
        </Canvas>
    );
}
