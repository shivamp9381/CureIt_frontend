// // eslint-disable-next-line
// import React from 'react';
// import styles from './Physician.module.css';
// import { ReactComponent as DoctorIcon } from '../../icons/doctor.svg'; // Import your SVGs
// import { ReactComponent as LabTestIcon } from '../../icons/lab tests.svg'; // Import your SVGs
// import { ReactComponent as MedicineIcon } from '../../icons/medicin.svg'; // Import your SVGs
// import Navbar from '../../Components/Navbar/Navbar'
// import Footer from '../../Components/Footer/Footer'
// import { useNavigate } from 'react-router-dom';

// const Physician = () => {
//   const navigate = useNavigate();

//   const handleBookAppointment = () => {
//     navigate('/appointments?speciality=Physician');
//   };

//   const handleBookLabTest = () => {
//     navigate('/labssearch');
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className={styles.head}><h1>Need a Physician ?</h1></div>
//     <div className={styles.banner}>
//     <div className={styles.item} onClick={handleBookAppointment} role="button" tabIndex="0">
//   <DoctorIcon className={styles.icon} />
//   <h3 className={styles.title}>Book your appointment with a physician</h3>
// </div>
//       <div className={styles.item} onClick={handleBookLabTest}>
//         <LabTestIcon className={styles.icon} />
//         <h3 className={styles.title}>Book Lab tests at home</h3>
//       </div>
//       <div className={styles.item}>
//         <MedicineIcon className={styles.icon} />
//         <h3 className={styles.title}>Buy medicines</h3>
//       </div>
//     </div>
//     {/* <BottomBanner/> */}
//     <Footer/>
//     </>
//   );
// };

// export default Physician;



import React from 'react';
import styles from './Physician.module.css';
import { ReactComponent as DoctorIcon } from '../../icons/doctor.svg';
import { ReactComponent as LabTestIcon } from '../../icons/lab tests.svg'; 
import { ReactComponent as MedicineIcon } from '../../icons/medicin.svg'; 
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Physician = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/appointments?speciality=Physician');
  };

  const handleBookLabTest = () => {
    navigate('/labssearch');
  };

  return (
    <>
      <Navbar />
      <div className={styles.head}>
        <h1>Need a Physician?</h1>
      </div>
      <div className={styles.banner}>
        <div
          className={styles.item}
          onClick={handleBookAppointment}
          role="button"
          tabIndex="0"
        >
          <DoctorIcon className={styles.icon} />
          <h3 className={styles.title}>Book your appointment with a Physician</h3>
        </div>
        <div
          className={styles.item}
          onClick={handleBookLabTest}
          role="button"
          tabIndex="0"
        >
          <LabTestIcon className={styles.icon} />
          <h3 className={styles.title}>Book Lab Tests at Home</h3>
        </div>
        <div className={styles.item}>
          <MedicineIcon className={styles.icon} />
          <h3 className={styles.title}>Order Medicines Online</h3>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Physician;
