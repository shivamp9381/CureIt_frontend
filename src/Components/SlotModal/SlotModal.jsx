import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DateSlider from '../DateSlider/DateSlider';
import styles from './SlotModal.module.css';

const SlotModal = ({ isOpen, onClose, doctor, fee }) => { // Add fee as a prop
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(0);
    const [showForm, setShowForm] = useState(false); // Toggle for form visibility
    const [patientName, setPatientName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState(''); // State for error message

    const dates = [
        { label: 'Today', slots: doctor?.slots || [] },
        { label: 'Tomorrow', slots: ['9:00 AM', '10:30 AM', '1:00 PM'] },
        { label: 'Sun, 27 Oct', slots: ['9:00 AM', '2:30 PM', '5:00 PM'] },
    ];

    const handleSlotClick = (slot) => {
        setShowForm(true); // Show form when a slot is selected
        setError(''); // Clear error when selecting a slot
    };

    const handleFormSubmit = () => {
        if (!patientName || !phoneNumber) {
            setError('Please enter both name and phone number.');
            return;
        }
    
        navigate('/bookingdetails', {
            state: {
                doctor,
                date: dates[selectedDate].label,
                time: dates[selectedDate].slots[0], // Pass selected slot
                patientName,
                phoneNumber,
                fee, // Include consultation fee
            }
        });
        onClose(); // Close the modal
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <h2>Select a Date</h2>
                <DateSlider dates={dates} selectedDate={selectedDate} onSelectDate={setSelectedDate} />

                {!showForm ? (
                    <>
                        <h3>Select a Slot</h3>
                        <div className={styles.slots}>
                            {dates[selectedDate]?.slots.map((slot, index) => (
                                <button key={index} className={styles.slotButton} onClick={() => handleSlotClick(slot)}>
                                    {slot}
                                </button>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className={styles.formContainer}>
                        <h3>Enter Patient Details</h3>
                        {error && <p className={styles.error}>{error}</p>}
                        <input
                            type="text"
                            placeholder="Enter Name"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            className={styles.formInput}
                        />
                        <input
                            type="tel"
                            placeholder="Enter Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className={styles.formInput}
                        />
                        <button onClick={handleFormSubmit} className={styles.submitButton}>
                            Confirm
                        </button>
                    </div>
                )}

                <button className={styles.closeButton} onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SlotModal;
