import { OrbitControls, ScrollControls } from '@react-three/drei'
import React from 'react'
import Ofiice from './Office'

function Exprience() {
    return (
        <>
            <ambientLight intensity={1} />
            <OrbitControls />
            <ScrollControls  pages={3}>
                <Ofiice />
            </ScrollControls>
        </>
    )
}

export default Exprience