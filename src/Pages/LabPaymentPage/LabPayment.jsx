import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../PaymentPage/PaymentPage.module.css';

const LabPaymentPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { fee, lab, date, time, patientName, phoneNumber } = location.state || {};

    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePayment = () => {
        if (!paymentMethod) {
            alert('Please select a payment method.');
            return;
        }

        // Proceed to PaymentSuccess after simulated payment
        // navigate('/lab-payment-success', {
        //     state: { lab, date, time, patientName, phoneNumber, fee }
        // });

        navigate('/lab-payment-success', {
            state: { lab, date, time, patientName, phoneNumber, fee }
        });
        
    };

    return (
        <div className={styles.paymentPage}>
            <h2>Complete Payment</h2>
            <p>Lab: {lab?.name}</p>
            <p>Test: {lab?.test}</p>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Consultation Fee: ₹{fee}</p>

            <h3>Select Payment Method</h3>
            <div className={styles.paymentOptions}>
                <label>
                    <input type="radio" name="paymentMethod" value="card" onChange={() => setPaymentMethod('card')} />
                    Debit/Credit Card
                </label>
                <label>
                    <input type="radio" name="paymentMethod" value="upi" onChange={() => setPaymentMethod('upi')} />
                    UPI
                </label>
                <label>
                    <input type="radio" name="paymentMethod" value="paypal" onChange={() => setPaymentMethod('paypal')} />
                    PayPal
                </label>
            </div>
            <button onClick={handlePayment} className={styles.payButton}>Pay ₹{fee}</button>
        </div>
    );
};

export default LabPaymentPage;
