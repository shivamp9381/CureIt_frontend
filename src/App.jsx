// src/App.jsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointments from "./Pages/Appointments/Appointments";
import Ayurveda from "./Pages/Ayurveda/Ayurveda";
import Cardiologist from "./Pages/Cardiologist/Cardiologist";
import Dermatologist from "./Pages/Dermatologist/Dermatologist";
import ENT from "./Pages/ENT/ENT";
import Eyes from "./Pages/Eyes/Eyes";
import Gynaecologist from "./Pages/Gynaecologist/Gynaecologist";
import Home from "./Pages/Home/Home";
import Kidney from "./Pages/Kidney/Kidney";
import Login from "./Pages/Login/Login";
import Neurologist from "./Pages/Neurologist/Neurologist";
import Ortho from "./Pages/Ortho/Ortho";
import Pediatrician from "./Pages/Pediatrician/Pediatrician";
import Physician from "./Pages/Physician/Physician";
import ProtectedRoute from "./Pages/ProtectedRoute"; // Adjusted import path
import SignUp from "./Pages/SignUp/SignUp";
import Stomach from "./Pages/Stomach/Stomach";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/about" element={<About />} />

          <Route exact path="/login" element={<Login />} />

          <Route exact path="/signup" element={<SignUp />} />

          <Route
            exact
            path="/appointments"
            element={
              <ProtectedRoute>
                <Appointments />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/physician"
            element={
              <ProtectedRoute>
                <Physician />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/cardiologist"
            element={
              <ProtectedRoute>
                <Cardiologist />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/dermatologist"
            element={
              <ProtectedRoute>
                <Dermatologist />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/stomach"
            element={
              <ProtectedRoute>
                <Stomach />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/kidney"
            element={
              <ProtectedRoute>
                <Kidney />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/neurologist"
            element={
              <ProtectedRoute>
                <Neurologist />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/pediatrician"
            element={
              <ProtectedRoute>
                <Pediatrician />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/gynaecologist"
            element={
              <ProtectedRoute>
                <Gynaecologist />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/eyes"
            element={
              <ProtectedRoute>
                <Eyes />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/ent"
            element={
              <ProtectedRoute>
                <ENT />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/ortho"
            element={
              <ProtectedRoute>
                <Ortho />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/ayurveda"
            element={
              <ProtectedRoute>
                <Ayurveda />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
