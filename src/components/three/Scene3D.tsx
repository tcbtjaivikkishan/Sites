'use client'

import { useFrame } from '@react-three/fiber'
import FloatingElements from './objects/FloatingElements'

export default function Scene() {
  // subtle camera movement instead of OrbitControls
  useFrame(({ camera, clock }) => {
    camera.rotation.y = Math.sin(clock.elapsedTime * 0.1) * 0.05
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight
        position={[-10, -10, -10]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
      />

      <FloatingElements />
    </>
  )
}
