import React, { useState, useEffect } from 'react';
import styles from './Login.module.css';
import Footer from '../../Components/Footer/Footer';
import LoginModal from '../../Components/LoginModal/LoginModal';

const images = [
    {
      image: 'https://i.ibb.co/2yj3S3t/Doctor-s-appointment.png',
      text: 'Book appointments with your nearby doctors according to their specialization.',
    },
    {
      image: 'https://i.ibb.co/Bn2d9Gm/Know-your-medicine.png',
      text: 'View medicine information like dosage and side effects before you take them.',
    },
    {
      image: 'https://i.ibb.co/BBhzByv/lab-tests-at-home.png',
      text: 'Book any test from your nearby pathlabs.',
    },
    {
      image: 'https://i.ibb.co/TPn4Bk3/Make-healthcare-simpler.png',
      text: 'One stop solution for all your healthcare needs.',
    },
  ];
  
function Login() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setResetPasswordModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSendOtp = () => {
    if (!phoneNumber) {
      alert("Please enter your phone number.");
      return;
    }

    // Logic to send OTP goes here
    setResetPasswordModalOpen(true);
    setForgotPasswordModalOpen(false);
  };

  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.slider}>
            <img src={images[currentSlide].image} alt="Healthcare" className={styles.sliderImage} />
            <p className={styles.sliderText}>{images[currentSlide].text}</p>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <h2>Login</h2>
          <p>Get access to your orders, lab tests & doctor consultations</p>
          <input type="text" placeholder="Enter Email ID or Mobile Number" className={styles.inputField} />
          <input type="password" placeholder="Enter Password" className={styles.inputField} />
          <button className={styles.loginButton}>LOGIN</button>
          <p className={styles.signupPrompt}>
            New on our platform? <a href="/signup" className={styles.signupLink}>Sign Up</a>
          </p>
          <p>
            By logging in, you agree to our{' '}
            <a href="/terms" className={styles.termsLink}>Terms and Conditions</a> &{' '}
            <a href="/privacy" className={styles.privacyLink}>Privacy Policy</a>
          </p>
          <p className={styles.forgotPassword} onClick={() => setForgotPasswordModalOpen(true)}>
            Forgot Password?
          </p>
        </div>
      </div>

      <Footer />

      {/* Forgot Password Modal */}
      <LoginModal isOpen={isForgotPasswordModalOpen} onClose={() => setForgotPasswordModalOpen(false)}>
        <h2>Forgot Password</h2>
        <br/>
        <br/>
        <input
        className={styles.ph}
          type="text"
          placeholder="Enter Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br/>
        <br/>
        <button className={styles.otp} onClick={handleSendOtp}>Send OTP</button>
      </LoginModal>

      {/* Reset Password Modal */}
      <LoginModal isOpen={isResetPasswordModalOpen} onClose={() => setResetPasswordModalOpen(false)}>
        <h2>Reset Password</h2>
        <br/>
        <br/>
        <input className={styles.ph} type="text" placeholder="Enter OTP" />
        <br/>
        <br/>
        <input className={styles.ph}  type="password" placeholder="Enter New Password" />
        <br/>
        <br/>
        <input className={styles.ph}  type="password" placeholder="Confirm New Password" />
        <br/>
        <br/>
        <button className={styles.reset} onClick={() => { /* Logic to reset password */ }}>Reset Password</button>
      </LoginModal>
    </>
  );
}

export default Login;
