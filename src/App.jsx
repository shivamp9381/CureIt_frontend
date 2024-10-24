import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home/Home';
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

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route
            exact path="/" element={<Home />}
          />

          <Route
            exact path="/login" element={<Login />}
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
            exact path="/ayurveda" element={<Ayurveda />}
          />

        </Routes>
      </Router>
    </>
  );
}

export default App;
