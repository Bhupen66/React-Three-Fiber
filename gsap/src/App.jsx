import React from 'react'
import './App.css'
import Headers from './Components/Header'
import Main from './Components/main'
import Footer from './Components/Footer'
import Gallery from './Components/Gallery/Gallery'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Headers />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
