import React from 'react'
import {Environment, Sphere} from '@react-three/drei'
import * as THREE from 'three'
import {LayerMaterial, Gradient} from '@react-three/drei'

function Background() {
  return (
    <>
        <Environment />
        <Sphere args={[100, 100, 100]} rotation-y={Math.PI / 2}>
            <LayerMaterial 
            lighting="physical"
            tranmission={1}
            side={THREE.BackSide}
            >
                <Gradient 
                colorA={"blue"} 
                coloeB={"red"}   
                
                />
            </LayerMaterial>
        </Sphere>
    </>
  )
}

export default Background