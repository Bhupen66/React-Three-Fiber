import { OrbitControls } from '@react-three/drei'
import React from 'react'
import Ofiice from './Office'

function Exprience() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <OrbitControls />
            <Ofiice />
        </>
    )
}

export default Exprience