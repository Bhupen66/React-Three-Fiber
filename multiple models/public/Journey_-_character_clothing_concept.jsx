/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 journey_-_character_clothing_concept.glb 
Author: David Young (https://sketchfab.com/David_Young)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/journey-character-clothing-concept-147b14b62268478da7e59fa36c949bae
Title: Journey - character clothing concept
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/journey_-_character_clothing_concept.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 94.99]} scale={[0.901, 1, 1]}>
        <mesh geometry={nodes.polySurface1_lambert4_0.geometry} material={materials.lambert4} position={[9.871, 145.702, -37.437]} rotation={[0.642, -0.478, 0.756]} scale={11.004} />
        <mesh geometry={nodes.polySurface2_lambert4_0.geometry} material={materials.lambert4} position={[9.871, 145.701, -37.437]} rotation={[0.641, -0.527, -0.152]} scale={11.004} />
      </group>
      <group position={[63.752, 195, 44.357]} rotation={[0.659, 0.553, 1.583]} scale={0.604}>
        <group position={[0, 0, 94.99]} scale={[0.901, 1, 1]}>
          <mesh geometry={nodes.pasted__polySurface1_lambert6_0.geometry} material={materials.lambert6} position={[6.708, 145.702, -37.437]} rotation={[0.642, -0.478, 0.756]} scale={14.827} />
          <mesh geometry={nodes.pasted__polySurface2_lambert6_0.geometry} material={materials.lambert6} position={[6.708, 145.701, -37.437]} rotation={[0.641, -0.527, -0.152]} scale={14.827} />
        </group>
      </group>
      <group position={[-194.069, 200.537, 122.202]} rotation={[0.299, 0.833, -1.966]}>
        <group position={[63.752, 195, 44.357]} rotation={[0.659, 0.553, 1.583]} scale={0.604}>
          <group position={[0, 0, 94.99]} scale={[0.901, 1, 1]}>
            <mesh geometry={nodes.pasted__pasted__polySurface1_lambert7_0.geometry} material={materials.lambert7} position={[17.434, 114.041, -15.405]} rotation={[0.702, -0.504, -0.09]} scale={12.87} />
            <mesh geometry={nodes.pasted__pasted__polySurface2_lambert7_0.geometry} material={materials.lambert7} position={[17.434, 114.04, -15.405]} rotation={[0.641, -0.527, 1.593]} scale={12.87} />
          </group>
        </group>
      </group>
      <group position={[55.562, 19.773, 63.677]} rotation={[0, -1.396, 0]}>
        <group position={[-194.069, 200.537, 122.202]} rotation={[0.299, 0.833, -1.966]}>
          <group position={[63.752, 195, 44.357]} rotation={[0.659, 0.553, 1.583]} scale={0.604}>
            <group position={[0, 0, 94.99]} scale={[0.901, 1, 1]}>
              <mesh geometry={nodes.pasted__pasted__pasted__polySurface1_lambert3_0.geometry} material={materials.lambert3} position={[6.708, 145.702, -37.437]} rotation={[0.642, -0.478, 0.756]} scale={12.87} />
              <mesh geometry={nodes.pasted__pasted__pasted__polySurface2_lambert3_0.geometry} material={materials.lambert3} position={[6.708, 145.701, -37.437]} rotation={[0.641, -0.527, -0.152]} scale={12.87} />
            </group>
          </group>
        </group>
      </group>
      <group position={[-29.146, 0, 104.876]} rotation={[-Math.PI, 0.873, -Math.PI]}>
        <group position={[-194.069, 200.537, 122.202]} rotation={[0.299, 0.833, -1.966]}>
          <group position={[63.752, 195, 44.357]} rotation={[0.659, 0.553, 1.583]} scale={0.604}>
            <group position={[0, 0, 94.99]} scale={[0.901, 1, 1]}>
              <mesh geometry={nodes.pasted__pasted__pasted__polySurface1_lambert5_0.geometry} material={materials.lambert5} position={[17.434, 114.041, -15.405]} rotation={[0.711, -0.417, 0.612]} scale={12.87} />
              <mesh geometry={nodes.pasted__pasted__pasted__polySurface2_lambert5_0.geometry} material={materials.lambert5} position={[17.434, 114.04, -15.405]} rotation={[0.734, -0.493, 0.417]} scale={12.87} />
            </group>
          </group>
        </group>
      </group>
      <mesh geometry={nodes.Cloth_and_Cloth_v5Group25600_lambert1_0.geometry} material={materials.lambert1} />
      <mesh geometry={nodes.Cloth_and_Cloth_v5Group7207_lambert1_0.geometry} material={materials.lambert1} />
      <mesh geometry={nodes.Cloth_and_Cloth_v5Group19069_lambert1_0.geometry} material={materials.lambert1} />
      <mesh geometry={nodes.Cloth_and_Cloth_v5Group48776_lambert1_0.geometry} material={materials.lambert1} />
      <mesh geometry={nodes.Cloth_and_Cloth_v5Group36839_lambert1_0.geometry} material={materials.lambert1} />
      <mesh geometry={nodes.Cloth_and_Cloth_v5Group29646_lambert1_0.geometry} material={materials.lambert1} />
      <mesh geometry={nodes.Cloth_and_Cloth_v5Group6155_lambert1_0.geometry} material={materials.lambert1} />
      <mesh geometry={nodes.polySurface4_lambert1_0.geometry} material={materials.lambert1} />
    </group>
  )
}

useGLTF.preload('/journey_-_character_clothing_concept.glb')