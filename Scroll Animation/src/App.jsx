import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import Office from '../public/WawaOffice'
import "./App.css";
import Exprience from "./Components/Exprience";

function App() {  

  return (
    <Canvas>
      <Exprience  />
    </Canvas>
  );

}

export default App; 