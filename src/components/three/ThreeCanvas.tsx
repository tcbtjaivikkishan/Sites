'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import Scene from './Scene3D'

export default function ThreeCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />

          <Scene />

          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  )
}
