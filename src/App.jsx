import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import  React from 'react';
import Home from   './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from  './Pages/SignUp/SignUp';

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
