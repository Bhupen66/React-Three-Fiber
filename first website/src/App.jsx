import React from 'react';
import Experience from './Components/Eperience';
import { Canvas } from '@react-three/fiber';

function App() {

  return (
    <>
      <Canvas className='canvas w-full h-screen'> 
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </>
  )
}

export default App;
