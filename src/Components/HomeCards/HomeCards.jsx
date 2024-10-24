import React, { useRef } from 'react';
import styles from './HomeCards.module.css';

const HomeCards = () => {
  const sliderRef = useRef(null);

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

  const cards = [
    { title: 'Contact a physician', img: 'https://i.ibb.co/LkrpZDP/Contact-a-physician.png' },
    { title: 'Care for your heart', img: 'https://i.ibb.co/r0bjYhm/heart-care.png' },
    { title: 'Care for your skin', img: 'https://i.ibb.co/LNyBdsr/Skin-care.png' },
    { title: 'Care for your stomach', img: 'https://i.ibb.co/fvXP01B/Stomach-care.png' },
    { title: 'Care for your kidney', img: 'https://i.ibb.co/Lr7Pc9f/Kidney-care.png' },
    { title: 'Having issues with your nervous system?', img: 'https://i.ibb.co/wQQYVQv/nervous-system-care.png' },
    { title: 'Child having some health issues?', img: 'https://i.ibb.co/xJnLZHp/pediatrics.png' },
    { title: 'Ladies problem?', img: 'https://i.ibb.co/LnJbCk4/gynaecologist.png' },
    { title: 'Want an Ayurvedic solution?', img: 'https://i.ibb.co/ZSfGWDD/Ayurveda.png' }
  ];

  return (
    <>
    <div className={styles.head}><h1>Browse by category</h1></div>
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <button className={styles.navButton} onClick={scrollLeft}>{'<'}</button>
        <div className={styles.slider} ref={sliderRef}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
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
