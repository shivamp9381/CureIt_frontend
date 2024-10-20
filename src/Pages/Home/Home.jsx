import React from 'react'
import styles from './Home.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import About from '../../Components/About/About'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home
