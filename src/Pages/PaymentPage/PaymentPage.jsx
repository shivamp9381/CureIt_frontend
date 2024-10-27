import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './PaymentPage.module.css';
import Navbar from '../../Components/Navbar/Navbar'
import  Footer from '../../Components/Footer/Footer'
import BottomBanner from '../../Components/BottomBanner/BottomBanner'


const PaymentPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { fee, doctor, date, time, patientName, phoneNumber } = location.state || {};

    // State to store selected payment method
    const [paymentMethod, setPaymentMethod] = useState("");

    const handlePayment = () => {
        if (!paymentMethod) {
            alert("Please select a payment method.");
            return;
        }

        // Here, you would add your payment gateway integrations for each method
        switch (paymentMethod) {
            case "card":
                // Call function to handle debit/credit card payment
                console.log("Processing Card Payment...");
                break;
            case "upi":
                // Call function to handle UPI payment
                console.log("Processing UPI Payment...");
                break;
            case "paypal":
                // Call function to handle PayPal payment
                console.log("Processing PayPal Payment...");
                break;
            case "cod":
                console.log("Cash on Delivery selected.");
                break;
            default:
                console.error("Unknown payment method.");
        }

        // Simulate payment success and navigate to the success page
        navigate('/lab-payment-success', {
            state: { doctor, date, time, patientName, phoneNumber, fee }
        });
    };

    return (

        <>

        <Navbar/>
        <div className={style.paymentPage}>
            <h2>Complete Payment</h2>
            <p>Doctor: {doctor?.name}</p>
            <p>Speciality: {doctor?.speciality}</p>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Consultation Fee: ₹{fee}</p>

            <h3>Select Payment Method</h3>
            <div>
                <label>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                    />
                    Debit/Credit Card
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        checked={paymentMethod === "upi"}
                        onChange={() => setPaymentMethod("upi")}
                    />
                    UPI (Paytm, PhonePe, GPay, BHIM, etc.)
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={() => setPaymentMethod("paypal")}
                    />
                    PayPal
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                    />
                    Cash on Delivery
                </label>
            </div>

            <button onClick={handlePayment}>Pay ₹{fee}</button>
        </div>

        <BottomBanner/>
        <Footer/>
        </>
    );
};

export default PaymentPage;
