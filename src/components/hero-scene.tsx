"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Mesh, Points } from "three";
import { AdditiveBlending, Color, Float32BufferAttribute } from "three";

function seededRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

const particlePositions = (() => {
  const positions: number[] = [];

  for (let index = 0; index < 360; index += 1) {
    const radius = 2.2 + seededRandom(index + 1) * 3.8;
    const angle = seededRandom(index + 401) * Math.PI * 2;
    const depth = (seededRandom(index + 801) - 0.5) * 3.4;
    const height = (seededRandom(index + 1201) - 0.5) * 3.2;
    positions.push(Math.cos(angle) * radius, height, Math.sin(angle) * radius + depth);
  }

  return new Float32BufferAttribute(positions, 3);
})();

function CoreKnot() {
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.18;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.24;
  });

  return (
    <mesh ref={mesh} position={[1.35, 0.05, 0]} scale={1.45}>
      <torusKnotGeometry args={[0.82, 0.24, 180, 18]} />
      <meshStandardMaterial color="#f8fbff" roughness={0.18} metalness={0.72} emissive="#3073ff" emissiveIntensity={0.16} />
    </mesh>
  );
}

function ParticleField() {
  const points = useRef<Points>(null);
  const particles = useMemo(() => particlePositions, []);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.035;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles.array, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color={new Color("#3073ff")} transparent opacity={0.55} blending={AdditiveBlending} depthWrite={false} />
    </points>
  );
}

export function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.6]} gl={{ antialias: true, powerPreference: "high-performance" }}>
        <color attach="background" args={["#f7f8f5"]} />
        <ambientLight intensity={0.85} />
        <directionalLight position={[-3, 4, 5]} intensity={1.6} />
        <pointLight position={[3, -2, 2]} intensity={2.5} color="#3073ff" />
        <CoreKnot />
        <ParticleField />
      </Canvas>
    </div>
  );
}
