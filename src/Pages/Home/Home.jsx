import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import BottomBanner from '../../Components/BottomBanner/BottomBanner'
import Hero from '../../Components/Hero/Hero'
import HomeCards from '../../Components/HomeCards/HomeCards'
import Benefits from '../../Components/Benefits/Benefits'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <HomeCards/>
        <Benefits/>
        <BottomBanner/>
        <Footer/>
    </div>
  )
}

export default Home
