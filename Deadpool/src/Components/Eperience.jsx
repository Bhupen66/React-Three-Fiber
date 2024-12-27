import React from 'react'
import {OrbitControls} from '@react-three/drei'
import Background from './Background';
import Deadpool from '../models/Deadpool';

const Eperience = () => {
  return (
    <>
        <OrbitControls />
        <Background />
        <Deadpool />
    </>
  )
}

export default Eperience;