// Profile.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import BottomBanner from "../../Components/BottomBanner/BottomBanner";
import Footer from "../../Components/Footer/Footer";
import styles from "./Profile.module.css";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    location: "New York, NY",
    profilePic: "https://i.ibb.co/QYH37gg/doctor-profile.png",
  });

  const handleEditProfile = () => {
    // Add functionality for editing profile, e.g., open modal
    alert("Edit profile functionality coming soon!");
  };

  const handleViewAppointments = () => {
    navigate("/appointments");
  };

  return (
    <>
      <Navbar />
      <div className={styles.profileContainer}>
        <div className={styles.profileHeader}>
          <img src={user.profilePic} alt="Profile" className={styles.profileImage} />
          <h2>{user.name}</h2>
          <p>{user.location}</p>
        </div>

        <div className={styles.profileDetails}>
          <div className={styles.detailItem}>
            <label>Email:</label>
            <p>{user.email}</p>
          </div>
          <div className={styles.detailItem}>
            <label>Phone:</label>
            <p>{user.phone}</p>
          </div>
          <div className={styles.detailItem}>
            <label>Location:</label>
            <p>{user.location}</p>
          </div>
        </div>

        <div className={styles.profileActions}>
          <button onClick={handleEditProfile} className={styles.editButton}>
            Edit Profile
          </button>
          <button onClick={handleViewAppointments} className={styles.appointmentsButton}>
            View Appointments
          </button>
        </div>
      </div>

      <BottomBanner />
      <Footer />
    </>
  );
};

export default Profile;
