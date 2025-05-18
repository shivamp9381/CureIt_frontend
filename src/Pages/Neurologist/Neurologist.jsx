// eslint-disable-next-line
import React from 'react';
import styles from '../Physician/Physician.module.css';
import { ReactComponent as DoctorIcon } from '../../icons/doctor.svg'; // Import your SVGs
import { ReactComponent as LabTestIcon } from '../../icons/lab tests.svg'; // Import your SVGs
import { ReactComponent as MedicineIcon } from '../../icons/medicin.svg'; // Import your SVGs
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { useNavigate } from 'react-router-dom';

const Neurologist = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/appointments?speciality=Neuro');
  };

  const handleBookLabTest = () => {
    navigate('/labssearch');
  };


  return (
    <>
    <Navbar/>
    <div className={styles.head}><h1>Head in a Spin? Let's Set Things Straight.</h1></div>
    <div className={styles.banner}>
      <div className={styles.item} onClick={handleBookAppointment}>
        <DoctorIcon className={styles.icon} /> {/* Use SVG component */}
        <h3 className={styles.title}>Book your appointment with a neurologist</h3>
      </div>
      <div className={styles.item} onClick={handleBookLabTest}>
        <LabTestIcon className={styles.icon} />
        <h3 className={styles.title}>Book Lab tests at home</h3>
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

export default Neurologist;
