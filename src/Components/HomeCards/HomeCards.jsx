import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomeCards.module.css';

const HomeCards = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();  // Ensure that useNavigate is used properly

  // Scroll functions for navigating the slider
  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      top: 0,
      left: -sliderRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      top: 0,
      left: sliderRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  // Card click handlers for navigation
  const handleCardClick = (path) => {
    navigate(path); // Navigate to respective paths based on card clicked
  };

  // Define cards with titles, images, and their respective navigation paths
  const cards = [
    { title: 'Contact a physician', img: 'https://i.ibb.co/LkrpZDP/Contact-a-physician.png', path: '/physician' },
    { title: 'Care for your heart', img: 'https://i.ibb.co/r0bjYhm/heart-care.png', path: '/cardiologist' },
    { title: 'Care for your skin', img: 'https://i.ibb.co/LNyBdsr/Skin-care.png', path: '/dermatologist' },
    { title: 'Care for your stomach', img: 'https://i.ibb.co/fvXP01B/Stomach-care.png', path: '/stomach' },
    { title: 'Care for your kidney', img: 'https://i.ibb.co/Lr7Pc9f/Kidney-care.png', path: '/kidney' },
    { title: 'Having problems in your head?', img: 'https://i.ibb.co/wQQYVQv/nervous-system-care.png', path: '/neurologist' },
    { title: 'Child having some health issues?', img: 'https://i.ibb.co/xJnLZHp/pediatrics.png', path: '/pediatrician' },
    { title: 'Ladies problem?', img: 'https://i.ibb.co/LnJbCk4/gynaecologist.png', path: '/gynaecologist' },
    { title: 'Problem in your Eyes?', img: 'https://i.ibb.co/6FY6FDq/eyes.png', path: '/eyes' },
    { title: 'Facing problems in your Ears, Nose or Throat?', img: 'https://i.ibb.co/YpMMYm3/ENT.png', path: '/ent' },
    { title: 'Problem in your Bones or Muscles?', img: 'https://i.ibb.co/z7YRsKH/ortho.png', path: '/ortho' },
    { title: 'Want an Ayurvedic solution?', img: 'https://i.ibb.co/ZSfGWDD/Ayurveda.png', path: '/ayurveda' },
  ];

  return (
    <>
      <div className={styles.head}><h1>Browse by category</h1></div>
      <div className={styles.container}>
        <div className={styles.sliderContainer}>
          <button className={styles.navButton} onClick={scrollLeft}>{'<'}</button>
          <div className={styles.slider} ref={sliderRef}>
            {cards.map((card, index) => (
              <div key={index} className={styles.card} onClick={() => handleCardClick(card.path)}>
                <img src={card.img} alt={card.title} className={styles.cardImage} />
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>
            ))}
          </div>
          <button className={styles.navButton} onClick={scrollRight}>{'>'}</button>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
