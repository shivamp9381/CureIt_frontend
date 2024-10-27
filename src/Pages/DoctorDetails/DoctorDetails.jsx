// DoctorDetail.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import BottomBanner from "../../Components/BottomBanner/BottomBanner";
import Footer from "../../Components/Footer/Footer";
import styles from "./DoctorDetails.module.css";

const DoctorDetail = () => {
  const location = useLocation();
  const appointmentsData = location.state || {};

  // Safely access properties and provide fallback values in the JSX itself
  return (
    <>
      <Navbar />
      <div className={styles.doctorDetailContainer}>
        <img
          src={
            appointmentsData.doctor?.image ||
            "https://i.ibb.co/QYH37gg/doctor-profile.png"
          }
          alt={`${appointmentsData.doctor?.name || "Doctor"} Profile`}
          className={styles.doctorImage}
        />
        <div className={styles.doctorName}>
          <h1>{appointmentsData.doctor?.name || "Doctor's Name"}</h1>
          <h3>{appointmentsData.doctor?.speciality || "Speciality not available"}</h3>
          <div className={styles.doctorInfo}>
          <p>
            <strong>Clinic:</strong>{" "}
            {appointmentsData.doctor?.clinic || "Clinic not available"}
          </p>
          <p>
            <strong>Location:</strong>{" "}
            {appointmentsData.location || "Location not available"}
          </p>
          <p>
            <strong>Experience:</strong>{" "}
            {appointmentsData.experience
              ? `${appointmentsData.experience} years`
              : "Experience not available"}
          </p>
          <p>
            <strong>Consultation Fee:</strong> ₹
            {appointmentsData.fee || "Fee not available"}
          </p>
          <p>
            <strong>Rating:</strong>{" "}
            {appointmentsData.rating
              ? `${appointmentsData.rating}%`
              : "Rating not available"}
          </p>
          <p>
            <strong>Availability:</strong>{" "}
            {appointmentsData.available ? "Available Today" : "Not Available"}
          </p>
          </div>
        </div>
      </div>
      <BottomBanner />
      <Footer />
    </>
  );
};

export default DoctorDetail;
