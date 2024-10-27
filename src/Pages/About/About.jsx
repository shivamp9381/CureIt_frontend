import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import BottomBanner from '../../Components/BottomBanner/BottomBanner';
import style from './About.module.css'; // Import your custom CSS for styling the sections

const About = () => {
  return (
    <div>
      <Navbar />

      {/* Header Section */}
      <header className={style.aboutHeader}>
      <div className={style.logo}>
            <Link to="/">
              <img
                src="https://i.ibb.co/LSRkDjv/cureit-logo.jpg"
                alt="Logo"
                className={style.logoImage}
              />
            </Link>
          </div>
        <h1>About Us</h1>
        <p>
        At CureIt, we believe that accessing quality healthcare should be simple, efficient, and stress-free. Our mission is to bridge the gap between patients and healthcare providers, offering seamless, technology-driven solutions to meet your healthcare needs.

Founded with the vision to revolutionize the way healthcare services are delivered, CureIt offers a range of essential services tailored to make your healthcare journey easier. From booking doctor’s appointments to managing emergency services, we’re here to support you every step of the way.
        </p>
      </header>

      {/* Image Gallery Section */}
      <section className={style.imageGallery}>
        <div className={style.galleryItem}><img src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-glove_23-2149611205.jpg?t=st=1729873803~exp=1729877403~hmac=7ba51793737006b3705b9bc870d12bfee48e6416dfe0e4a67402c167af76d9bb&w=1060" alt="" /></div>
        <div className={style.galleryItem}><img src="https://img.freepik.com/free-photo/black-male-tablet-asian-graphic_1134-1419.jpg?t=st=1729873377~exp=1729876977~hmac=64d1f28a3399cc1e73120fc704a4b267927c8f42cfbb9f36de08e0333f42d567&w=996" alt="" /></div>
        <div className={style.galleryItem}><img src="https://img.freepik.com/free-photo/healthcare-wellness-wellbeing-first-aid-box-word-graphic_53876-132151.jpg?t=st=1729873672~exp=1729877272~hmac=b9542fe2499d52b5168edf5ee38cd2cca5aef5e0f146b1ee419dcba5231317bf&w=996" alt="" /></div>
        <div className={style.galleryItem}><img src="https://img.freepik.com/free-photo/close-up-specialist-using-tablet_1232-649.jpg?t=st=1729873716~exp=1729877316~hmac=e874f5877194946df0c25e17370ad12fb90902b461c36d40961a9839667dac20&w=996" alt="" /></div>
      </section>

      {/* Mission Statement Section */}
      <section className={style.missionStatement}>
        <h2 >We're not just another pharma company!.</h2>
        <p>
        Our platform is designed to provide you with instant access to healthcare professionals, emergency support, and other critical medical services—all at your fingertips. Whether you need to consult with a doctor, book diagnostic tests, or get health insurance, we ensure you receive timely and reliable care, anytime, anywhere.
        </p>
        <p>
        We understand that healthcare can sometimes feel overwhelming. That's why we are here to make it as easy and accessible as possible. At CureIt, your health is our priority, and we are dedicated to delivering exceptional care with empathy, efficiency, and innovation.
       
        </p>
      </section>

      {/* Stats Section */}
      <section className={style.stats}>
        <div className={style.stat}>
          <h3>95%</h3>
          <p>Patient Satisfaction</p>
        </div>
        <div className={style.stat}>
          <h3>24/7</h3>
          <p>Digital Services</p>
        </div>
        <div className={style.stat}>
          <h3>50+</h3>
          <p>Clients Served</p>
        </div>
      </section>

      <section className={style.successAlliesSection}>
      
      <div className={style.alliesContainer}>
        <div className={style.ally}>
          <img src="https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ally 1" className={style.allyImage} />
        </div>
        <div className={style.ally}>
          <img src="https://plus.unsplash.com/premium_photo-1689562473471-6e736b8afe15?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ally 2" className={style.allyImage} />
        </div>
        <div className={style.ally}>
          <img src="https://plus.unsplash.com/premium_photo-1689551671548-79ff30459d2a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Ally 3" className={style.allyImage} />
        </div>
      </div>
      <h2>Your Health Allies!</h2>
    </section>

      {/* Footer and other Components */}
      <BottomBanner />
      <Footer />
    </div>
  );
};

export default About;
