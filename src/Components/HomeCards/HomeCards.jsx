import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HomeCards.module.css';

const HomeCards = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

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

  const handleCardClick = (path) => {
    navigate(path);
  };

  const cards = [
    { title: 'Contact a Physician', img: 'https://i.ibb.co/LkrpZDP/Contact-a-physician.png', path: '/physician' },
    { title: 'Heart Care', img: 'https://i.ibb.co/r0bjYhm/heart-care.png', path: '/cardiologist' },
    { title: 'Skin Care', img: 'https://i.ibb.co/LNyBdsr/Skin-care.png', path: '/dermatologist' },
    { title: 'Digestive Health', img: 'https://i.ibb.co/fvXP01B/Stomach-care.png', path: '/stomach' },
    { title: 'Kidney Health', img: 'https://i.ibb.co/Lr7Pc9f/Kidney-care.png', path: '/kidney' },
    { title: 'Neurological Care', img: 'https://i.ibb.co/wQQYVQv/nervous-system-care.png', path: '/neurologist' },
    { title: 'Pediatric Care', img: 'https://i.ibb.co/xJnLZHp/pediatrics.png', path: '/pediatrician' },
    { title: 'Gynecologist', img: 'https://i.ibb.co/LnJbCk4/gynaecologist.png', path: '/gynaecologist' },
    { title: 'Eye Health', img: 'https://i.ibb.co/6FY6FDq/eyes.png', path: '/eyes' },
    { title: 'ENT Care', img: 'https://i.ibb.co/YpMMYm3/ENT.png', path: '/ent' },
    { title: 'Orthopedic Care', img: 'https://i.ibb.co/z7YRsKH/ortho.png', path: '/ortho' },
    { title: 'Ayurvedic Remedies', img: 'https://i.ibb.co/ZSfGWDD/Ayurveda.png', path: '/ayurveda' },
  ];

  return (
    <>
      <div className={styles.head}><h1>Explore Healthcare Categories</h1></div>
      <div className={styles.container}>
        <div className={styles.sliderContainer}>
          <button className={styles.navButton} onClick={scrollLeft}>&lt;</button>
          <div className={styles.slider} ref={sliderRef}>
            {cards.map((card, index) => (
              <div key={index} className={styles.card} onClick={() => handleCardClick(card.path)}>
                <img src={card.img} alt={card.title} className={styles.cardImage} />
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>
            ))}
          </div>
          <button className={styles.navButton} onClick={scrollRight}>&gt;</button>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
