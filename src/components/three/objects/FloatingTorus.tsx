'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function FloatingTorus({
  position,
}: {
  position: [number, number, number]
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  const geometry = useMemo(
    () => new THREE.TorusGeometry(0.4, 0.15, 12, 60),
    []
  )

  useFrame(({ clock }) => {
    if (!meshRef.current) return

    meshRef.current.position.y =
      position[1] + Math.sin(clock.elapsedTime * 1.2) * 0.2

    meshRef.current.rotation.x += 0.02
  })

  return (
    <mesh ref={meshRef} geometry={geometry} position={position}>
      <meshStandardMaterial color="#34d399" />
    </mesh>
  )
}
