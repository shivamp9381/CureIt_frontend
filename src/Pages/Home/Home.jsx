import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import BottomBanner from '../../Components/BottomBanner/BottomBanner'
import HomeCards from '../../Components/HomeCards/HomeCards'
import Benefits from '../../Components/Benefits/Benefits'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeCards/>
        <Benefits/>
        <BottomBanner/>
        <Footer/>
    </div>
  )
}

export default Home
