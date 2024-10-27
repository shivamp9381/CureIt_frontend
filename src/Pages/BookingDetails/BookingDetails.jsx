import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './BookingDetails.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import BottomBanner from '../../Components/BottomBanner/BottomBanner';
import Footer from '../../Components/Footer/Footer';

const BookingDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { doctor, date, time, patientName, phoneNumber, fee } = location.state || {};

    if (!doctor) {
        return <div>No booking details found.</div>;
    }
    const handleConfirmBooking = () => {
        navigate('/payment', {
            state: { doctor, date, time, patientName, phoneNumber, fee }
        });
    };
    

    return (
        <>
            <Navbar />
            <div className={styles.bookingDetails}>
                <div className={styles.header}>
                    <h2>Confirm Your Appointment</h2>
                    <p>Your wellness journey starts here. Review your booking details below.</p>
                </div>
                <div className={styles.detailsContainer}>
                    <div className={styles.doctorInfo}>
                        <img src={doctor.image} alt={doctor.name} className={styles.doctorImage} />
                        <h3>{doctor.name}</h3>
                        <p>{doctor.speciality} - {doctor.clinic}</p>
                    </div>
                    <div className={styles.bookingInfo}>
                        <h4>Appointment Details</h4>
                        <p><strong>Date:</strong> {date}</p>
                        <p><strong>Time:</strong> {time}</p>
                        {patientName && <p><strong>Patient Name:</strong> {patientName}</p>}
                        {phoneNumber && <p><strong>Phone Number:</strong> {phoneNumber}</p>}
                        <p><strong>Consultation Fee:</strong> ₹{fee}</p> {/* Display fee */}
                    </div>
                </div>
                <div className={styles.actions}>
                    <button onClick={handleConfirmBooking} className={styles.confirmButton}>
                        Confirm Booking
                    </button>
                    <button onClick={() => alert('Booking confirmed.')} className={styles.cancelButton}>
                        Cancel
                    </button>
                </div>
            </div>
            <BottomBanner />
            <Footer />
        </>
    );
};

export default BookingDetails;
