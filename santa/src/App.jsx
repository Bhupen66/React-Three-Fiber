import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Stars } from '@react-three/drei'
import Santa from '../public/Santa'

function App() {

  return (
    <>
    <div className="bg-gradient-to-t from-red-600 to-pink-500 h-screen flex flex-col justify-center items-center">
    <h1 className="text-3xl font-bold =underline">
      Hello world!
    </h1>
      <Canvas>
        <ambientLight intensity={1.5} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Santa />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
    </>
  )
}

export default App
