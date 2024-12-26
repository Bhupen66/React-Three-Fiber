import { Canvas } from '@react-three/fiber';
import React from 'react'

function CanvasContainer() {
    return (
        <div className='canvas-container w-full h-screen'> 

            <Canvas>
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color='hotpink' />
                </mesh>
            </Canvas>
        </div>
    )
}

export default CanvasContainer;