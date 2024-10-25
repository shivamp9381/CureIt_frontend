import React from 'react';
import { useNavigate } from 'react-router-dom';
import DateSlider from '../DateSlider/DateSlider';
import styles from './SlotModal.module.css';

const SlotModal = ({ isOpen, onClose, doctor }) => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = React.useState(0);

    const dates = [
        { label: 'Today', slots: doctor?.slots || [] },
        { label: 'Tomorrow', slots: ['9:00 AM', '10:30 AM', '1:00 PM'] },
        { label: 'Sun, 27 Oct', slots: ['9:00 AM', '2:30 PM', '5:00 PM'] },
    ];

    const handleSlotClick = (slot) => {
        navigate('/bookingdetails', { 
            state: { 
                doctor, 
                date: dates[selectedDate].label, 
                time: slot 
            } 
        });
        onClose(); // Close the modal after navigating
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <h2>Select a Date</h2>
                <DateSlider 
                    dates={dates} 
                    selectedDate={selectedDate} 
                    onSelectDate={setSelectedDate} 
                />

                <h3>Select a Slot</h3>
                <div className={styles.slots}>
                    {dates[selectedDate]?.slots.map((slot, index) => (
                        <button 
                            key={index} 
                            className={styles.slotButton} 
                            onClick={() => handleSlotClick(slot)}
                        >
                            {slot}
                        </button>
                    ))}
                </div>

                <button className={styles.closeButton} onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default SlotModal;
