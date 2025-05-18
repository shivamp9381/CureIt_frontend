import React from 'react';
import styles from './DateSlider.module.css';

const DateSlider = ({ dates, selectedDate, onSelectDate }) => {
    return (
        <div className={styles.dateSlider}>
            <button onClick={() => onSelectDate(selectedDate - 1)} disabled={selectedDate === 0} className={styles.arrow}>
                &lt;
            </button>
            {dates.map((date, index) => (
                <div
                    key={index}
                    className={`${styles.dateItem} ${selectedDate === index ? styles.selected : ''}`}
                    onClick={() => onSelectDate(index)}
                >
                    <div className={styles.dateLabel}>{date.label}</div>
                </div>
            ))}
            <button onClick={() => onSelectDate(selectedDate + 1)} disabled={selectedDate === dates.length - 1} className={styles.arrow}>
                &gt;
            </button>
        </div>
    );
};

export default DateSlider;




