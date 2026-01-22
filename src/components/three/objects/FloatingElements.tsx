'use client'

import FloatingSphere from './FloatingSphere'
import FloatingBox from './FloatingBox'
import FloatingTorus from './FloatingTorus'

export default function FloatingElements() {
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
