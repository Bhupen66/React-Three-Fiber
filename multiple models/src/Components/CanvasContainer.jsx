import { Canvas } from '@react-three/fiber';
import React from 'react'
import Lilith from './Lilith';
import { OrbitControls } from '@react-three/drei';
import Behemot from './Behemot';
import Joueney from './Joueney';

function CanvasContainer() {
    return (
        <>

          
            <div className=' w-full h-screen'>
                <Canvas >
                    <OrbitControls />
                    <ambientLight />
                    <Lilith />
                    <Joueney />
                    <Behemot />
                </Canvas>
            </div>
        </>
    )
}

export default CanvasContainer;