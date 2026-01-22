'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function FloatingSphere({
  position,
}: {
  position: [number, number, number]
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  const geometry = useMemo(
    () => new THREE.SphereGeometry(0.5, 16, 16),
    []
  )

  useFrame(({ clock }) => {
    if (!meshRef.current) return

    meshRef.current.position.y =
      position[1] + Math.sin(clock.elapsedTime) * 0.3

    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={meshRef} geometry={geometry} position={position}>
      <meshStandardMaterial color="#10b981" wireframe />
    </mesh>
  )
}
