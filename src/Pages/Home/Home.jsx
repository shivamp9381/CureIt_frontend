import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import BottomBanner from '../../Components/BottomBanner/BottomBanner'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <BottomBanner/>
        <Footer/>
    </div>
  )
}

export default Home
