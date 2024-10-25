import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import BottomBanner from '../../Components/BottomBanner/BottomBanner';
import Footer from '../../Components/Footer/Footer';
import AppointmentCard from '../../Components/AppointtmentCard/AppointmentCard';
import styles from './Appointments.module.css';

const Appointments = () => {
    const appointmentsData = [
        {
            doctor: {
                name: "Doctor's Name",
                image: 'https://i.ibb.co/QYH37gg/doctor-profile.png', // Placeholder doctor image
                speciality: 'Speciality',
                clinic: 'Clinic Name',
            },
            experience: 15,
            location: 'Varanasi, Uttar Pradesh',
            fee: 750,
            rating: 90,
            available: true,
        },
        {
            doctor: {
                name: "Doctor's Name",
                image: 'https://i.ibb.co/QYH37gg/doctor-profile.png', // Placeholder doctor image
                speciality: 'Speciality',
                clinic: 'Clinic Name',
            },
            experience: 15,
            location: 'Varanasi, Uttar Pradesh',
            fee: 750,
            rating: 90,
            available: true,
        },
        {
            doctor: {
                name: "Doctor's Name",
                image: 'https://i.ibb.co/QYH37gg/doctor-profile.png', // Placeholder doctor image
                speciality: 'Speciality',
                clinic: 'Clinic Name',
            },
            experience: 15,
            location: 'Varanasi, Uttar Pradesh',
            fee: 750,
            rating: 90,
            available: true,
        },
        {
            doctor: {
                name: "Doctor's Name",
                image: 'https://i.ibb.co/QYH37gg/doctor-profile.png', // Placeholder doctor image
                speciality: 'Speciality',
                clinic: 'Clinic Name',
            },
            experience: 15,
            location: 'Varanasi, Uttar Pradesh',
            fee: 750,
            rating: 90,
            available: true,
        },
        {
            doctor: {
                name: "Doctor's Name",
                image: 'https://i.ibb.co/QYH37gg/doctor-profile.png', // Placeholder doctor image
                speciality: 'Speciality',
                clinic: 'Clinic Name',
            },
            experience: 15,
            location: 'Varanasi, Uttar Pradesh',
            fee: 750,
            rating: 90,
            available: true,
        },
        {
            doctor: {
                name: "Doctor's Name",
                image: 'https://i.ibb.co/QYH37gg/doctor-profile.png', // Placeholder doctor image
                speciality: 'Speciality',
                clinic: 'Clinic Name',
            },
            experience: 15,
            location: 'Varanasi, Uttar Pradesh',
            fee: 750,
            rating: 90,
            available: true,
        },
    ];

    const [location, setLocation] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [filteredAppointments, setFilteredAppointments] = useState(appointmentsData);

    const handleSearch = () => {
        const filtered = appointmentsData.filter(appointment =>
            (!location || appointment.location.toLowerCase().includes(location.toLowerCase())) &&
            (!speciality || appointment.doctor.speciality.toLowerCase().includes(speciality.toLowerCase()))
        );
        setFilteredAppointments(filtered);
    };

    return (
        <>
            <Navbar />

            <div className={styles.pageHead}>
                <div className={styles.headText}>Schedule Your Wellness Journey: Find Your Local Doctor Today!</div>
                <p className={styles.headPara}>Ready to take charge of your health? Let us connect you with top-notch doctors right in your neighborhood! Whether you need a routine check-up or specialized care, we’ve got you covered.</p>
            </div>
            {/* Search Filter Section */}
            <div className={styles.searchFilter}>
                <input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter speciality"
                    value={speciality}
                    onChange={(e) => setSpeciality(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            <div className={styles.appointmentsContainer}>
                {filteredAppointments.length > 0 ? (
                    filteredAppointments.map((appointment, index) => (
                        <AppointmentCard key={index} {...appointment} />
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
            <BottomBanner />
            <Footer />
        </>
    );
};

export default Appointments;
