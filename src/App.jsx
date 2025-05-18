import './App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home/Home';
import Profile from "./Pages/Profile/Profile"; 
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Physician from './Pages/Physician/Physician'
import Cardiologist from './Pages/Cardiologist/Cardiologist'
import Dermatologist from './Pages/Dermatologist/Dermatologist'
import Stomach from './Pages/Stomach/Stomach'
import Kidney from './Pages/Kidney/Kidney'
import Neurologist from './Pages/Neurologist/Neurologist'
import Pediatrician from './Pages/Pediatrician/Pediatrician'
import Gynaecologist from './Pages/Gynaecologist/Gynaecologist'
import Ayurveda from './Pages/Ayurveda/Ayurveda'
import Eyes from './Pages/Eyes/Eyes';
import ENT from './Pages/ENT/ENT';
import Ortho from './Pages/Ortho/Ortho';
import Appointments from './Pages/Appointments/Appointments';
import BookingDetails from './Pages/BookingDetails/BookingDetails'
import About from './Pages/About/About'
import LabsSearch from './Pages/LabsSearch/LabsSearch'
import Labs from './Pages/Labs/Labs'
import LabBookingDetails from './Pages/LabBookingDetails/LabBookingDetails';
import PaymentPage from './Pages/PaymentPage/PaymentPage'
import  PaymentSuccess from './Pages/PaymentSuccess/PaymentSuccess'
import DoctorDetails from './Pages/DoctorDetails/DoctorDetails'


function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route
            exact path="/" element={<Home />}
          />

          <Route
            exact path="/about" element={<About />}
          />

          <Route
            exact path="/login" element={<Login />}
          />

          <Route
            exact path="/profile" element={<Profile />}
          />

          <Route
            exact path="/signup" element={<SignUp />}
          />

          <Route
            exact path="/physician" element={<Physician />}
          />
          <Route
            exact path="/cardiologist" element={<Cardiologist />}
          />
          <Route
            exact path="/dermatologist" element={<Dermatologist />}
          />
          <Route
            exact path="/stomach" element={<Stomach />}
          />
          <Route
            exact path="/kidney" element={<Kidney />}
          />
          <Route
            exact path="/neurologist" element={<Neurologist />}
          />
          <Route
            exact path="/pediatrician" element={<Pediatrician />}
          />
          <Route
            exact path="/gynaecologist" element={<Gynaecologist />}
          />
          <Route
            exact path="/eyes" element={<Eyes />}
          />
          <Route
            exact path="/ent" element={<ENT />}
          />
          <Route
            exact path="/ortho" element={<Ortho />}
          />
          <Route
            exact path="/ayurveda" element={<Ayurveda />}
          />

          <Route
            exact path="/appointments" element={<Appointments />}
          />
          <Route
            exact path="/bookingdetails" element={<BookingDetails />}
          />
          <Route
            exact path="/labssearch" element={<LabsSearch />}
          />
          <Route
            exact path="/labs" element={<Labs />}
          />
          <Route
            exact path="/labbookingdetails" element={<LabBookingDetails />}
          />
          <Route
            exact path="/doctordetails" element={<DoctorDetails />}
          />

          <Route 
            exact path="/payment" element={<PaymentPage />} 
          />

          <Route 
            exact path="/payment-success" element={<PaymentSuccess />}
          />
          <Route 
            exact path="/lab-payment" element={<PaymentPage />} 
          />

          <Route 
            exact path="/lab-payment-success" element={<PaymentSuccess />}
          />

        </Routes>
      </Router>
    </>
  );
}

export default App;
