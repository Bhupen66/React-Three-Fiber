/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 santa.gltf 
Author: Mateusz Woliński (https://sketchfab.com/jeandiz)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/santa-muerte-requiem-for-the-sketchfab-3fa36f79496a454995c64ca65b5d52b0
Title: Santa Muerte & Requiem for the Sketchfab
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/santa.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[7.739, 135.292, 16.018]}>
          <mesh geometry={nodes.Rosary_CROSS_METAL_0.geometry} material={materials.CROSS_METAL} />
          <mesh geometry={nodes.Rosary_TWINE_0.geometry} material={materials.TWINE} />
          <mesh geometry={nodes.Rosary_WOOD_0.geometry} material={materials.WOOD} />
        </group>
        <mesh geometry={nodes.Robe_Robe_0.geometry} material={materials.Robe} />
        <mesh geometry={nodes.Skull_SkeletonSkull_0.geometry} material={materials.SkeletonSkull} position={[3.127, 185.035, 3.095]} />
        <mesh geometry={nodes.RightHand_SkeletonLimb_0.geometry} material={materials.SkeletonLimb} position={[1.208, 138.276, 19.734]} />
        <mesh geometry={nodes.LeftHand_SkeletonLimb_0.geometry} material={materials.SkeletonLimb} position={[5.614, 138.16, 19.762]} />
        <mesh geometry={nodes.SpineAndChest_SkeletonBody_0.geometry} material={materials.SkeletonBody} position={[0.991, 163.041, -7.709]} />
        <mesh geometry={nodes.CollarBone_SkeletonLimb_0.geometry} material={materials.SkeletonLimb} position={[1.568, 164.413, -4.896]} />
        <mesh geometry={nodes.HaloRed_HaloRed_0.geometry} material={materials.HaloRed} position={[2.872, 188.249, -2.59]} />
        <mesh geometry={nodes.HaloWhite_HaloWhite_0.geometry} material={materials.HaloWhite} position={[2.872, 188.249, -2.59]} />
      </group>
    </group>
  )
}

useGLTF.preload('/santa.gltf')
