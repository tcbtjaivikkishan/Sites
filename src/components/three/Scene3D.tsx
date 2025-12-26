'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'
import FloatingElements from './FloatingElements'
import { Suspense } from 'react'

export default function Scene3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight position={[-10, -10, -10]} angle={0.3} penumbra={1} intensity={0.5} />
          
          <FloatingElements />
          
          <Environment preset="sunset" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}
