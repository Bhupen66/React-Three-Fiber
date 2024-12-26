import { Canvas } from '@react-three/fiber';
import React from 'react'
import Lilith from './Lilith';
import { OrbitControls } from '@react-three/drei';

function CanvasContainer() {
    return (
        <>

          
            <div className=' w-full h-screen'>
                <Canvas >
                    <OrbitControls />
                    <ambientLight />
                    <Lilith />
                </Canvas>
            </div>
        </>
    )
}

export default CanvasContainer;