import { Canvas } from '@react-three/fiber';
import React from 'react'
import Lilith from './Lilith';
import { Environment, OrbitControls } from '@react-three/drei';
import Behemot from './Behemot';
import Joueney from './Joueney';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function CanvasContainer() {
    return (
        <>
            <div className=' w-full h-screen'>
                <Canvas camera={{
                    position:[ 
                        -7.013131774130275,1.0225948681149972,5.200194472
                    ],
                }} >
                    <OrbitControls enableZoom={false} />
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
