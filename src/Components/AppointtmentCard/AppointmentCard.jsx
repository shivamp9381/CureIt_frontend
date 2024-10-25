import React from 'react';
import styles from './Appointmentcard.module.css';

const AppointmentCard = ({ doctor, experience, location, fee, rating, available, onBookClick }) => {
    return (
        <div className={styles.appointmentCard}>
            <div className={styles.doctorInfo}>
                <img src={doctor.image} alt={doctor.name} className={styles.doctorImage} />
                <div>
                    <h3>{doctor.name}</h3>
                    <p>{doctor.speciality}</p>
                    <p>{doctor.clinic}</p>
                    <p>{experience} years experience overall</p>
                    <p>{location}</p>
                    <p>₹{fee} Consultation Fee at clinic</p>
                    <div className={styles.ratingStories}>
                        <span className={styles.rating}>Likes: {rating}%</span>
                    </div>
                    {available && <div className={styles.availableStatus}>Available Today</div>}
                </div>
            </div>
            <button className={styles.bookBtn} onClick={onBookClick}>
                Book Clinic Visit
            </button>
            <button className={styles.docProfile}>View Doctor's Profile</button>
        </div>
    );
};

export default AppointmentCard;
