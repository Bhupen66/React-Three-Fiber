import React from 'react'
import {OrbitControls} from '@react-three/drei'

const Eperience = () => {
  return (
    <>
        <OrbitControls />
        <mesh>
            <boxGeometry attach="geometry" args={[1, 1, 1]} />
            <meshNormalMaterial attach="material" />
        </mesh>
    </>
  )
}

export default Eperience;