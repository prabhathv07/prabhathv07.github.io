"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particles({ count = 1800 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.4 + Math.random() * 0.15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (!points.current) return;
    points.current.rotation.y += delta * 0.12;
    points.current.rotation.x += delta * 0.04;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        sizeAttenuation
        color="#ffffff"
        transparent
        opacity={0.85}
        depthWrite={false}
      />
    </points>
  );
}

function Wireframe() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y -= delta * 0.08;
    mesh.current.rotation.z += delta * 0.03;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.3, 3]} />
      <meshBasicMaterial
        color="#7c3aed"
        wireframe
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

function InnerCore() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.25;
    mesh.current.rotation.x += delta * 0.1;
    const s = 0.9 + Math.sin(state.clock.elapsedTime * 1.4) * 0.05;
    mesh.current.scale.set(s, s, s);
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[0.85, 1]} />
      <meshBasicMaterial
        color="#06b6d4"
        wireframe
        transparent
        opacity={0.55}
      />
    </mesh>
  );
}

export default function NeuralSphere() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#f472b6" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#7c3aed" />
        <Particles />
        <Wireframe />
        <InnerCore />
      </Canvas>
    </div>
  );
}
