import React from 'react';
import Experience from './Components/Eperience';
import { Canvas } from '@react-three/fiber';

function App() {

  return (
    <>
    <div className='bg-gray-200 h-screen flex items-center justify-center'>
      <Canvas className='canvas w-full h-screen'> 
        <color attach="gackground" args={["#ececec"]} />
        <Experience />
      </Canvas>
      </div>
    </>
  )
}

export default App;
