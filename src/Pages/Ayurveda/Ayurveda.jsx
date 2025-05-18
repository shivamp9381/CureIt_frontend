import React from 'react';
import styles from './Ayurveda.module.css';
import { ReactComponent as DoctorIcon } from '../../icons/doctor.svg';
import { ReactComponent as MedicineIcon } from '../../icons/medicin.svg';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Ayurveda = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/appointments?speciality=Ayurveda');
  };

  return (
    <>
      <Navbar />
      <div className={styles.head}>
        <h1>Need an Ayurvedic solution to your health issues?</h1>
      </div>

      <div className={styles.banner}>
        <div className={styles.item} onClick={handleBookAppointment}>
          <DoctorIcon className={styles.icon} />
          <h3 className={styles.title}>Book your appointment with an ayurveda doctor</h3>
        </div>
        <div className={styles.item}>
          <MedicineIcon className={styles.icon} />
          <h3 className={styles.title}>Buy medicines</h3>
        </div>
      </div>
      {/* <BottomBanner/> */}
      <Footer />
    </>
  );
};

export default Ayurveda;
