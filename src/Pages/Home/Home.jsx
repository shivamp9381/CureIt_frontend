import React from 'react'
import styles from './Home.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import About from '../../Components/About/About'
import BottomBanner from '../../Components/BottomBanner/BottomBanner'
import Hero from '../../Components/Hero/Hero'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <BottomBanner/>
        <Footer/>
    </div>
  )
}

export default Home
