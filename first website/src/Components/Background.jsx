import React from 'react'
import {Environment, Sphere} from '@react-three/drei'

function Background() {
  return (
    <>
        <Environment />
        <Sphere args={[100, 100, 100]} >
            <layerMaterial 
            lighting="physical"
            tranmission={1}
            side={THREE.BackSide}
            >
                <Gradient 
                colorA={"blue"} 
                coloeB={"red"}   
                
                />
            </layerMaterial>
        </Sphere>
    </>
  )
}

export default Background