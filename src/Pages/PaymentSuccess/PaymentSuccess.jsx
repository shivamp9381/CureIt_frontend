import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './PaymentSuccess.module.css'
import Navbar from '../../Components/Navbar/Navbar';
import BottomBanner from '../../Components/BottomBanner/BottomBanner';
import  Footer from '../../Components/Footer/Footer';


const PaymentSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Declare navigate here

    const { doctor, date, time, patientName, phoneNumber, fee } = location.state || {};

    return (
        <>
        <Navbar/>
        <div className={style.whole}>
        <div className={style.paymentSuccess}>
            <h2>Payment Successful!</h2>
            <p>Thank you, {patientName}, for booking with {doctor.name}.</p>
            <p>Your appointment is confirmed for {date} at {time}.</p>
            <p>Total Paid: ₹{fee}</p>
            <button onClick={() => navigate('/')}>Go to Home</button>
        </div>
        </div>

        <BottomBanner/>
        <Footer/>
        </>
    );
};

export default PaymentSuccess;
