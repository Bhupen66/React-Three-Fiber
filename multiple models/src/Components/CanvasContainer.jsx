import { Canvas } from '@react-three/fiber';
import React from 'react'
import Lilith from './Lilith';
import { Environment, OrbitControls } from '@react-three/drei';
import Behemot from './Behemot';
import Joueney from './Joueney';

function CanvasContainer() {
    return (
        <>

          
            <div className=' w-full bg-gradient-to-tr bg-black to-pink-400 h-screen'>
                <Canvas >
                    <OrbitControls />
                    <ambientLight />
                    <Lilith />
                    {/* <Joueney /> */}
                    {/* <Behemot /> */}
                    <Environment preset="dawn" />
                </Canvas>
            </div>
        </>
    )
}

export default CanvasContainer;