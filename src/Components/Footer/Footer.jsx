import React, { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Issue submitted successfully!');

    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      issue: ''
    });
  };

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
            <li>Book a test online</li>
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
          </ul>
        </div>
      </div>
      {/* Facing Issues */}
      <div className={`${styles.footer_section} ${styles.complaint_form}`}>
        <h3>Facing Issues?</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="issue"
            placeholder="Describe your issue..."
            rows="4"
            value={formData.issue}
            onChange={handleChange}
            required
          />
          <button className={styles.submitissues} type="submit">Submit</button>
        </form>
      </div>
      {/* Centered Copyright Section */}
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>© Cureit 2024</p>
        <div className={`${styles.social_icons}`}>
            <a href="https://Linkedin.com"><i className="fab fa-linkedin"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://gmail.com"><i className="fas fa-envelope"></i></a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
