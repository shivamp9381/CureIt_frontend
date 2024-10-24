import React from 'react';
import styles from './Benefits.module.css';

const Benefits = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.icon}></div>
                <h1 className={styles.textHead}>Your benefits with Cureit</h1>
            </div>
            <ul className={styles.benefitsList}>
                <li className={styles.text}>✅ Competent and faster treatment by experienced doctors, even in an emergency</li>
                <li className={styles.text}>✅ 24/7 digital, simple and quick access</li>
                <li className={styles.text}>✅ Highest quality, thanks to doctors trained in telemedicine and recognized medical guidelines</li>
                <li className={styles.text}>✅ 95% patient satisfaction</li>
                <li className={styles.text}>✅ Offsetting through health insurance</li>
                <li className={styles.text}>✅ Costs and time savings (no directions or waiting times on site)</li>
                <li className={styles.text}>✅ Secured user data</li>
            </ul>
        </div>
    );
};

export default Benefits;
