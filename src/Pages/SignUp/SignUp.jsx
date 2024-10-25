import React, { useEffect, useState } from "react";
import BottomBanner from "../../Components/BottomBanner/BottomBanner";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "../Login/Login.module.css";

const images = [
  {
    image: "https://i.ibb.co/2yj3S3t/Doctor-s-appointment.png",
    text: "Book appointments with your nearby doctors according to their specialization.",
  },
  {
    image: "https://i.ibb.co/Bn2d9Gm/Know-your-medicine.png",
    text: "View medicine information like dosage and side effects before you take them.",
  },
  {
    image: "https://i.ibb.co/BBhzByv/lab-tests-at-home.png",
    text: "Book any test from your nearby pathlabs.",
  },
  {
    image: "https://i.ibb.co/TPn4Bk3/Make-healthcare-simpler.png",
    text: "One stop solution for all your healthcare needs.",
  },
];

function SignUp() {
  const [currentImage, setCurrentImage] = useState(0);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isHealthcareProfessional, setIsHealthcareProfessional] =
    useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      name,
      mobileNumber,
      email,
      password,
      confirmPassword,
      isHealthcareProfessional,
    });
  };

  return (
    <>
      <Navbar />

      <div className={styles.loginContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.slider}>
            <img
              src={images[currentImage].image}
              alt="Slider"
              className={styles.sliderImage}
            />
            <p className={styles.sliderText}>{images[currentImage].text}</p>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <h2>Sign Up</h2>
          <br />
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Full Name"
            className={styles.inputField}
          />
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter Mobile Number"
            className={styles.inputField}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Id"
            className={styles.inputField}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create Password"
            className={styles.inputField}
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className={styles.inputField}
          />
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="healthcareProfessional"
              checked={isHealthcareProfessional}
              onChange={(e) => setIsHealthcareProfessional(e.target.checked)}
            />
            <label htmlFor="healthcareProfessional">
              Are you a healthcare professional?
            </label>
          </div>
          <br />
          <button className={styles.loginButton} onClick={handleSubmit}>
            CONTINUE
          </button>
          <p className={styles.signupPrompt}>
            Have an account?{" "}
            <a className={styles.signupLink} href="/login">
              Login
            </a>
          </p>
          <p>
            By signing up, you agree to our{" "}
            <a className={styles.termsLink} href="/terms">
              Terms and Conditions
            </a>{" "}
            &{" "}
            <a href="/privacy" className={styles.privacyLink}>
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

      <BottomBanner />
      <Footer />
    </>
  );
}

export default SignUp;
