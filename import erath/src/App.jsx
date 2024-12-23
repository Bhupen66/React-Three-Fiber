import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Stars } from '@react-three/drei'
import Earth from '../public/Earth'

function App() {

  return (
    <>
      <Canvas>
        <ambientLight intensity={1.5} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  )
}

export default App
