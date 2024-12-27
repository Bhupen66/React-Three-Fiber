/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Legend (https://sketchfab.com/Legend_01)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/deadpool-marvel-free-00b3f2ac5dac4e448ff73f0991ecb660
Title: DEADPOOL MARVEL (FREE)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import Deadpool from '../assets/models/Deadpool.glb'



const Deadpool = (props) => {
  const { nodes, materials } = useGLTF('Deadpool')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.material_0}
      />
    </group>
  )
}

useGLTF.preload('Deadpool')

export default Deadpool