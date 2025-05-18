import React from 'react';
import styles from './BottomBanner.module.css';
import { ReactComponent as ReliableIcon } from './reliable.svg'; // Import your SVGs
import { ReactComponent as SecureIcon } from './secure.svg';
import { ReactComponent as AffordableIcon } from './affordable.svg';

const BottomBanner = () => {



  return (
    <div className={styles.banner}>
      <div className={styles.item}>
        <ReliableIcon className={styles.icon} /> {/* Use SVG component */}
        <h3 className={styles.title}>Reliable</h3>
        <p>All products displayed on CureIt are procured from verified and licensed pharmacies. All labs listed on the platform are accredited.</p>
      </div>
      <div className={styles.item}>
        <SecureIcon className={styles.icon} />
        <h3 className={styles.title}>Secure</h3>
        <p>CureIt uses Secure Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry Data Security Standard (PCI DSS) compliant.</p>
      </div>
      <div className={styles.item}>
        <AffordableIcon className={styles.icon} />
        <h3 className={styles.title}>Affordable</h3>
        <p>Find affordable medicine substitutes, save up to 50% on health products, up to 80% off on lab tests, and get free doctor consultations.</p>
      </div>
    </div>
  );
};

export default BottomBanner;
