<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import BottomBanner from '../../Components/BottomBanner/BottomBanner';
import Footer from '../../Components/Footer/Footer';
import AppointmentCard from '../../Components/AppointtmentCard/AppointmentCard';
import SlotModal from '../../Components/SlotModal/SlotModal';
import styles from './Appointments.module.css';
=======
import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import BottomBanner from "../../Components/BottomBanner/BottomBanner";
import Footer from "../../Components/Footer/Footer";
import AppointmentCard from "../../Components/AppointtmentCard/AppointmentCard";
import SlotModal from "../../Components/SlotModal/SlotModal"; // Import the SlotModal component
import styles from "./Appointments.module.css";
>>>>>>> 09971dcddca084bb98120972c4683e4a41074d70

const Appointments = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [speciality, setSpeciality] = useState(
    searchParams.get("speciality") || ""
  );
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [selectedDoctor, setSelectedDoctor] = useState(null); // Store the selected doctor details

  const appointmentsData = [
    {
      doctor: {
        name: "Doctor's Name",
        image: "https://i.ibb.co/QYH37gg/doctor-profile.png",
        speciality: "Physician",
        clinic: "Clinic's Name",
      },
      experience: 15,
      location: "Varanasi, Uttar Pradesh",
      fee: 750,
      rating: 90,
      available: true,
      slots: [
        "11:00 AM",
        "11:20 AM",
        "11:50 AM",
        "12:10 PM",
        "12:40 PM",
        "01:00 PM",
      ],
    },
    {
      doctor: {
        name: "2Name",
        image: "https://i.ibb.co/QYH37gg/doctor-profile.png",
        speciality: "Dermat",
        clinic: " Name",
      },
      experience: 10,
      location: "Lucknow, Uttar Pradesh",
      fee: 850,
      rating: 94,
      available: true,
      slots: [
        "11:00 AM",
        "11:20 AM",
        "11:50 AM",
        "12:10 PM",
        "12:40 PM",
        "01:00 PM",
      ],
    },
    // Add more doctor data as needed...
  ];

  const [filteredAppointments, setFilteredAppointments] =
    useState(appointmentsData);

  useEffect(() => {
    handleSearch();
  }, [location, speciality]);

<<<<<<< HEAD
    useEffect(() => {
        handleSearch();
    }, [location, speciality]);

    const handleSearch = () => {
        const filtered = appointmentsData.filter(appointment =>
            (!location || appointment.location.toLowerCase().includes(location.toLowerCase())) &&
            (!speciality || appointment.doctor.speciality.toLowerCase().includes(speciality.toLowerCase()))
        );
        setFilteredAppointments(filtered);
    };

    const handleBookClick = (appointment) => {
        setSelectedDoctor(appointment); // Pass the whole appointment, including fee
        setShowModal(true); // Show the modal
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedDoctor(null); // Clear the selected doctor
    };

    return (
        <>
            <Navbar />
            <div className={styles.pageHead}>
                <div className={styles.headText}>Schedule Your Wellness Journey: Find Your Local Doctor Today!</div>
                <p className={styles.headPara}>Ready to take charge of your health? Let us connect you with top-notch doctors right in your neighborhood!</p>
            </div>

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
                        <AppointmentCard
                            key={index}
                            {...appointment}
                            onBookClick={() => handleBookClick(appointment)} // Pass full appointment details
                        />
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>

            {showModal && selectedDoctor && (
                <SlotModal
                    isOpen={showModal}
                    onClose={closeModal}
                    doctor={selectedDoctor.doctor} // Pass doctor details
                    fee={selectedDoctor.fee} // Pass the consultation fee
                />
            )}

            <BottomBanner />
            <Footer />
        </>
=======
  const handleSearch = () => {
    const filtered = appointmentsData.filter(
      (appointment) =>
        (!location ||
          appointment.location
            .toLowerCase()
            .includes(location.toLowerCase())) &&
        (!speciality ||
          appointment.doctor.speciality
            .toLowerCase()
            .includes(speciality.toLowerCase()))
>>>>>>> 09971dcddca084bb98120972c4683e4a41074d70
    );
    setFilteredAppointments(filtered);
  };

  const handleBookClick = (doctor) => {
    setSelectedDoctor(doctor); // Store the selected doctor details
    setShowModal(true); // Show the modal when "Book Clinic Visit" is clicked
  };

  const handleDocProfileClick = (appointment) => {
    navigate("/doctordetails", { state: appointment }); // Pass doctor details
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDoctor(null); // Clear the selected doctor
  };

  return (
    <>
      <Navbar />
      <div className={styles.pageHead}>
        <div className={styles.headText}>
          Schedule Your Wellness Journey: Find Your Local Doctor Today!
        </div>
        <p className={styles.headPara}>
          Ready to take charge of your health? Let us connect you with top-notch
          doctors right in your neighborhood!
        </p>
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

      {/* Appointments Listing */}
      <div className={styles.appointmentsContainer}>
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appointment, index) => (
            <AppointmentCard
              key={index}
              {...appointment}
              onBookClick={() => handleBookClick(appointment.doctor)}
              onDocProfileClick={() => handleDocProfileClick(appointment)}
            />
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>

      {/* Modal for Slot Selection */}
      {showModal && selectedDoctor && (
        <SlotModal
          isOpen={showModal}
          onClose={closeModal}
          doctor={selectedDoctor}
        />
      )}

      <BottomBanner />
      <Footer />
    </>
  );
};

export default Appointments;
