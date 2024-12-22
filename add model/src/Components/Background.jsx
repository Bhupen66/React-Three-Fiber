import React from 'react'
import {Environment, Sphere} from '@react-three/drei'
import * as THREE from 'three'
import { LayerMaterial, Gradient } from "lamina"

function Background() {
  return (
    <>
        <Environment preset="sunset" />
        <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
            <LayerMaterial 
            lighting="physical"
            tranmission={1}
            side={THREE.BackSide}
            >
                <Gradient 
                colorA={"blue"}
                colorB={"red"}
                axes={"x"}
                start={0}
                end={-0.5}
                />
            </LayerMaterial>
        </Sphere>
    </>
  )
}

export default Background