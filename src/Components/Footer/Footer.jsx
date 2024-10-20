import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left Section */}
        <div className={styles.footerSection}>
          <h1 className={styles.logo}>Cureit</h1>
        </div>

        {/* Services Section */}
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>Services</h2>
          <ul>
            <li>Book a doctor's appointment online</li>
            <li>Book a test online (Coming soon...)</li>
            <li>Buy medicine (Coming soon...)</li>
            <li>Buy health insurance (Coming soon...)</li>
            <li>Emergency (Coming soon...)</li>
          </ul>
        </div>

        {/* For Business Partners Section */}
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>For partners</h2>
          <ul>
            <li>Health insurer</li>
            <li>Pharmacy</li>
            <li>Practices and hospitals</li>
            <li>Emergency help providers</li>
          </ul>
        </div>

        {/* For Doctors Section */}
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>For doctors</h2>
          <ul>
            <li>Career</li>
            <li>Partner Network</li>
          </ul>
        </div>

        {/* About Us Section */}
        <div className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>About us</h2>
          <ul>
            <li>About Cureit</li>
            <li>Vacancies</li>
            <li>Media</li>
            <li>Our partners</li>
            <li>Insurance models</li>
            <li>Help & contact</li>
          </ul>
        </div>
      </div>

      {/* Centered Copyright Section */}
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>© Cureit 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
