import { Canvas } from '@react-three/fiber';
import React from 'react'
import Lilith from './Lilith';
import { OrbitControls } from '@react-three/drei';

function CanvasContainer() {
    return (
        <>
            <div className='text-center text-3xl w-full h-screen font-bold mt-4'>Lilith 3D Model

          
            <div className=''>
                <Canvas>
                    <OrbitControls />
                    <ambientLight />
                    <Lilith />
                </Canvas>
            </div>
            </div>
        </>
    )
}

export default CanvasContainer;