import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './BookingDetails.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import BottomBanner from '../../Components/BottomBanner/BottomBanner';
import Footer from '../../Components/Footer/Footer';

const BookingDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { doctor, date, time } = location.state || {};

    const handleConfirmBooking = () => {
        // Leave this empty for backend implementation later
        alert(`Booking confirmed.`);
    };

    const handleCancel = () => {
        navigate('/'); // Redirect back to the home page or another page
    };

    if (!doctor) {
        return <div>No booking details found.</div>;
    }

    return (
        <>
        <Navbar/>
        <div className={styles.bookingDetails}>
            <h2 className={styles.detail}>Booking Details</h2>
            <img src={doctor.image} alt={doctor.name} className={styles.doctorImage} />
            <h3 className={styles.name}>{doctor.name}</h3>
            <p>Speciality: {doctor.speciality}</p>
            <p>Clinic: {doctor.clinic}</p>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <button onClick={handleConfirmBooking} className={styles.confirmButton}>Confirm Booking</button>
            <button onClick={handleCancel} className={styles.cancelButton}>Cancel</button>
        </div>

        <BottomBanner/>
        <Footer/>
        </>
    );
};

export default BookingDetails;
