import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import BottomBanner from '../../Components/BottomBanner/BottomBanner'
import Benefits from '../../Components/Benefits/Benefits'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Benefits/>
        <BottomBanner/>
        <Footer/>
    </div>
  )
}

export default Home
