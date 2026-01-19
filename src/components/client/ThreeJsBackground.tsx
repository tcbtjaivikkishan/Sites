'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Box, Torus } from '@react-three/drei'
import * as THREE from 'three'

function FloatingSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <Sphere ref={meshRef} args={[0.5, 32, 32]} position={position}>
      <meshStandardMaterial color="#10b981" wireframe />
    </Sphere>
  )
}

function FloatingBox({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.8) * 0.4
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.z += 0.005
    }
  })

  return (
    <Box ref={meshRef} args={[0.7, 0.7, 0.7]} position={position}>
      <meshStandardMaterial color="#059669" />
    </Box>
  )
}

function FloatingTorus({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2) * 0.2
      meshRef.current.rotation.x += 0.02
    }
  })

  return (
    <Torus ref={meshRef} args={[0.4, 0.15, 16, 100]} position={position}>
      <meshStandardMaterial color="#34d399" />
    </Torus>
  )
}

function Scene() {
  return (
    <>
      <FloatingSphere position={[-3, 2, -2]} />
      <FloatingBox position={[3, 1, -3]} />
      <FloatingTorus position={[0, 3, -2]} />
      <FloatingSphere position={[4, -1, -1]} />
      <FloatingBox position={[-4, 0, -2]} />
    </>
  )
}

export default function ThreeJsBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, -10, -10]} angle={0.3} penumbra={1} intensity={0.5} />
      <Scene />
    </Canvas>
  )
}