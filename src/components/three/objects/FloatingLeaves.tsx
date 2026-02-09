"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";


function Leaf({ position, scale, rotationSpeed }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.elapsedTime;


    meshRef.current.position.y =
      position[1] + Math.sin(t * rotationSpeed) * 0.6;

    meshRef.current.rotation.z =
      Math.sin(t * rotationSpeed * 0.6) * 0.3;

    meshRef.current.rotation.x =
      Math.cos(t * rotationSpeed * 0.4) * 0.25;

    meshRef.current.rotation.y += rotationSpeed * 0.01;
  });


  const leafShape = useMemo(() => {
    const shape = new THREE.Shape();


    shape.moveTo(0, 0);


    shape.bezierCurveTo(
      -0.25, 0.25,
      -0.45, 0.7,
      -0.25, 1.25
    );


    shape.bezierCurveTo(
      -0.1, 1.55,
      0.1, 1.55,
      0.25, 1.25
    );


    shape.bezierCurveTo(
      0.45, 0.7,
      0.25, 0.25,
      0, 0
    );

    return shape;
  }, []);

  const extrudeSettings = {
    depth: 0.025,
    bevelEnabled: true,
    bevelThickness: 0.015,
    bevelSize: 0.015,
    bevelSegments: 4,
  };

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <extrudeGeometry args={[leafShape, extrudeSettings]} />
      <meshStandardMaterial
        color="#22c55e"
        roughness={0.65}
        metalness={0.1}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}


function Leaves() {
  const leaves = useMemo(() => {
    return Array.from({ length: 15 }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        Math.random() * 15 - 5,
        (Math.random() - 0.5) * 10 - 5,
      ] as [number, number, number],
      scale: Math.random() * 0.5 + 0.3,
      rotationSpeed: Math.random() * 0.6 + 0.3,
    }));
  }, []);

  return (
    <>
      {leaves.map((leaf, i) => (
        <Leaf key={i} {...leaf} />
      ))}
    </>
  );
}


export default function FloatingLeaves() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <Leaves />
      </Canvas>
    </div>
  );
}