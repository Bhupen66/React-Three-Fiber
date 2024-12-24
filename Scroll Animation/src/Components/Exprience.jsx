import { OrbitControls } from '@react-three/drei'
import React from 'react'

function Exprience() {
    return (
        <>
            <OrbitControls />
            <mesh>

                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </>
    )
}

export default Exprience