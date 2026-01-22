'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function FloatingBox({
  position,
}: {
  position: [number, number, number]
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  const geometry = useMemo(
    () => new THREE.BoxGeometry(0.7, 0.7, 0.7),
    []
  )

  useFrame(({ clock }) => {
    if (!meshRef.current) return

    meshRef.current.position.y =
      position[1] + Math.cos(clock.elapsedTime * 0.8) * 0.4

    meshRef.current.rotation.x += 0.005
    meshRef.current.rotation.z += 0.005
  })

  return (
    <mesh ref={meshRef} geometry={geometry} position={position}>
      <meshStandardMaterial color="#059669" />
    </mesh>
  )
}
