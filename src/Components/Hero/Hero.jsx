import React, { useState, useEffect, useCallback } from 'react';
import styles from './Hero.module.css';

const slides = [
  {
    id: 1,
    image: 'https://www.medgate.ch/Portals/0/Skins/Medgate/content/images/header/MDG_006586-00_Header_2000x1000_srgb-EN.jpg?ver=cJzr-7PO4vo9bcaLk1SU0g%3d%3d',
    title: 'Book an appointment',
    subtitle: 'Shop Get your appointment booked in 3 easy steps!',
    description: 'Explore now for more details',
    button: 'Book Now',
  },
  {
    id: 2,
    image: 'https://www.medgate.ch/Portals/0/Skins/Medgate/content/images/aerzte-bilder/MED_Hotlines-Notfalltelefone_Header_2000x1000px.jpg?ver=OGc_br0HGCm9nBfwU_Upqw%3d%3d',
    title: 'Emergency Services',
    subtitle: 'Emergency Services at your doorstep!',
    description: 'Coming Soon!',
    button: 'Explore Now',
  },
  {
    id: 3,
    image: 'https://www.medgate.ch/Portals/0/Skins/Medgate/content/images/header/Krankenversicherer_Header_2000x1000px.jpg?ver=pfwUHulIopbOPV1Ujh32aA%3d%3d',
    title: 'Health Insurance',
    subtitle: 'Buy Health Insurance and be assured!',
    description: 'Coming Soon!',
    button: 'Explore Now',
  }
];

const slides2 = [
  {
    id: 1,
    image: 'https://i.ibb.co/9h2kcvc/MDG-006586-00-Header-2000x1000-srgb-EN.jpg'
  },
  {
    id: 2,
    image: 'https://i.ibb.co/dkKWrWS/slide1.jpg', // Use direct image URLs
  },
  {
    id: 3,
    image: 'https://i.ibb.co/3Sg9Fjm/Krankenversicherer-Header-2000x1000px.jpg', // Use direct image URLs
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 570);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const moveSlide = useCallback((direction) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const slideArray = isMobile ? slides2 : slides;
    setCurrentSlide((prevSlide) => 
      (prevSlide + direction + slideArray.length) % slideArray.length
    );

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  }, [isMobile, isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 4000);

    return () => clearInterval(interval);
  }, [moveSlide]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slidesWrapper}>
        {(isMobile ? slides2 : slides).map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''} ${isTransitioning ? styles.transitioning : ''}`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
              zIndex: index === currentSlide ? 1 : 0
            }}
          >
            <img src={slide.image} alt={`slide-${slide.id}`} className={styles.slideImage} />
            {!isMobile && (
              <div className={styles.slideContent}>
                <h1>{slide.title}</h1>
                <h2>{slide.subtitle}</h2>
                <p>{slide.description}</p>
                <a href="#" className={styles.shopBtn}>
                  {slide.button}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className={`${styles.sliderBtn} ${styles.prevBtn}`} onClick={() => moveSlide(-1)} aria-label="Previous slide">
        &#10094;
      </button>
      <button className={`${styles.sliderBtn} ${styles.nextBtn}`} onClick={() => moveSlide(1)} aria-label="Next slide">
        &#10095;
      </button>

      <div className={styles.indicators}>
        {(isMobile ? slides2 : slides).map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
