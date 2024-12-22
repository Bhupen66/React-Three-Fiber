import React from 'react'
import {OrbitControls} from '@react-three/drei'
import Background from './Background';

const Eperience = () => {
  return (
    <>
        <OrbitControls />
        <Background />
        <mesh>
            <boxGeometry attach="geometry" args={[1, 1, 1]} />
            <meshNormalMaterial attach="material" />
        </mesh>
    </>
  )
}

export default Eperience;