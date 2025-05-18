// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import styles from './LabBookingDetails.module.css';
// import Navbar from '../../Components/Navbar/Navbar';
// import BottomBanner from '../../Components/BottomBanner/BottomBanner';
// import Footer from '../../Components/Footer/Footer';

// const LabBookingDetails = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const { lab, date, time, patientName, phoneNumber, fee } = location.state || {}; // Destructure fee

//     const handleConfirmBooking = () => {
//         alert(`Booking confirmed for ${lab.name} at ${time} on ${date}.`);
//     };

//     const handleCancel = () => {
//         navigate('/'); // Navigate to the home or labs page
//     };

//     if (!lab) {
//         return <div>No booking details found.</div>;
//     }

//     return (
//         <>
//             <Navbar />
//             <div className={styles.bookingDetails}>
//                 <div className={styles.header}>
//                     <h2>Confirm Your Lab Appointment</h2>
//                     <p>Your wellness journey starts here. Review your booking details below.</p>
//                 </div>
//                 <div className={styles.detailsContainer}>
//                     <div className={styles.labInfo}>
//                         <img src={lab.image} alt={lab.name} className={styles.labImage} />
//                         <h3>{lab.name}</h3>
//                         <p>{lab.test} - {lab.location}</p>
//                     </div>
//                     <div className={styles.bookingInfo}>
//                         <h4>Appointment Details</h4>
//                         <p><strong>Date:</strong> {date}</p>
//                         <p><strong>Time:</strong> {time}</p>
//                         {patientName && <p><strong>Patient Name:</strong> {patientName}</p>}
//                         {phoneNumber && <p><strong>Phone Number:</strong> {phoneNumber}</p>}
//                         <p><strong>Test Fee:</strong> ₹{fee}</p> {/* Display the fee */}
//                     </div>
//                 </div>
//                 <div className={styles.actions}>
//                     <button onClick={handleConfirmBooking} className={styles.confirmButton}>Confirm Booking</button>
//                     <button onClick={handleCancel} className={styles.cancelButton}>Cancel</button>
//                 </div>
//             </div>
//             <BottomBanner />
//             <Footer />
//         </>
//     );
// };

// export default LabBookingDetails;



import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './LabBookingDetails.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import BottomBanner from '../../Components/BottomBanner/BottomBanner';
import Footer from '../../Components/Footer/Footer';

const LabBookingDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { lab, date, time, patientName, phoneNumber, fee } = location.state || {}; // Destructure fee

    const handleProceedToPayment = () => {
        // Navigate to PaymentPage with necessary details
        navigate('/lab-payment', {
            state: {
                lab,
                date,
                time,
                patientName,
                phoneNumber,
                fee
            }
        });
    };

    const handleCancel = () => {
        navigate('/'); // Navigate to the home or labs page
    };

    if (!lab) {
        return <div>No booking details found.</div>;
    }

    return (
        <>
            <Navbar />
            <div className={styles.bookingDetails}>
                <div className={styles.header}>
                    <h2>Confirm Your Lab Appointment</h2>
                    <p>Your wellness journey starts here. Review your booking details below.</p>
                </div>
                <div className={styles.detailsContainer}>
                    <div className={styles.labInfo}>
                        <img src={lab.image} alt={lab.name} className={styles.labImage} />
                        <h3>{lab.name}</h3>
                        <p>{lab.test} - {lab.location}</p>
                    </div>
                    <div className={styles.bookingInfo}>
                        <h4>Appointment Details</h4>
                        <p><strong>Date:</strong> {date}</p>
                        <p><strong>Time:</strong> {time}</p>
                        {patientName && <p><strong>Patient Name:</strong> {patientName}</p>}
                        {phoneNumber && <p><strong>Phone Number:</strong> {phoneNumber}</p>}
                        <p><strong>Test Fee:</strong> ₹{fee}</p> {/* Display the fee */}
                    </div>
                </div>
                <div className={styles.actions}>
                    <button onClick={handleProceedToPayment} className={styles.confirmButton}>Proceed to Payment</button>
                    <button onClick={handleCancel} className={styles.cancelButton}>Cancel</button>
                </div>
            </div>
            <BottomBanner />
            <Footer />
        </>
    );
};

export default LabBookingDetails;
