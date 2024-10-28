import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../PaymentSuccess/PaymentSuccess.module.css';

const LabPaymentSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();


    
    // const { lab, date, time, patientName, phoneNumber, fee } = location.state || {};
    const { lab = {}, date, time, patientName, phoneNumber, fee } = location.state || {};


    const handleGoHome = () => {
        navigate('/');
    };


    return (
        <div className={styles.paymentSuccess}>
            <h2>Payment Successful!</h2>
            <p>Thank you, {patientName}, for booking with {lab?.name}.</p>
            <p>Your appointment is confirmed for {date} at {time}.</p>
            <p>Total Paid: ₹{fee}</p>
            <button onClick={handleGoHome} className={styles.homeButton}>Go to Home</button>
        </div>
    );
};

export default LabPaymentSuccess;
