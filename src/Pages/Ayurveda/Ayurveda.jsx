// eslint-disable-next-line
import React from 'react';
import styles from './Ayurveda.module.css';
import { ReactComponent as DoctorIcon } from '../../icons/doctor.svg'; // Import your SVGs
import { ReactComponent as MedicineIcon } from '../../icons/medicin.svg'; // Import your SVGs
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Ayurveda = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.head}><h1>Need an Ayurvedic solution to your health issues?</h1></div>

    <div className={styles.banner}>
      <div className={styles.item}>
        <DoctorIcon className={styles.icon} /> {/* Use SVG component */}
        <h3 className={styles.title}>Book your appointment with a doctor</h3>
      </div>
      <div className={styles.item}>
        <MedicineIcon className={styles.icon} />
        <h3 className={styles.title}>Buy medicines</h3>
      </div>
    </div>
    {/* <BottomBanner/> */}
    <Footer/>
    </>
  );
};

export default Ayurveda;
