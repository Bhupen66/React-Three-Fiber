import { Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Santa from '../public/Santa'

function App() {
  return (
    <div className="bg-gradient-to-t from-pink-500 to-red-600 h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold bg-transparent underline">
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
  )
}

export default App
