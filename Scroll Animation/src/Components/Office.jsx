/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 WawaOffice.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

function Ofiice(props) {
  const { nodes, materials } = useGLTF('../../public/models/WawaOffice.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['01_office'].geometry} material={materials['01']} />
      <mesh geometry={nodes['02_library'].geometry} material={materials['02']} position={[0, 2.114, -2.23]} />
      <mesh geometry={nodes['03_attic'].geometry} material={materials['03']} position={[-1.97, 4.227, -2.199]} />
    </group>
  )
}

useGLTF.preload('../../public/models/WawaOffice.glb')

export default Ofiice;