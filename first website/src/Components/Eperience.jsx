import React from 'react'
import {OrbitControls} from '@react-three/drei'

function Eperience() {
  return (
    <>
        <OrbitControls />
        <mash>
            <boxGeometry attach="geometry" args={[1, 1, 1]} />
            <meshNormalMaterial attach="material" />
        </mash>
    </>
  )
}

export default Eperience;