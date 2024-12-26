import React from 'react'
import CanvasContainer from './Components/CanvasContainer'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Aboutus from './Components/Aboutus'
import Contactus from './Components/Contactus'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <div className=''>

        <Navbar />
        <div className='w-full h-screen fixed top-1 left-0 z-0'>
          <CanvasContainer />
        </div>
        <Hero />
        <Aboutus />
        <Contactus />
        <Footer />

      </div>

    </>
  )
}

export default App
