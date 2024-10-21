import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false); // Close dropdown when an item is clicked
  };

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={style.navContainer}>
        <div className={style.navBox}>
          {/* Hamburger button for small screens */}
          <div className={style.hamburger} onClick={toggleNav}>
            <i className={`fas fa-bars ${style.hamburgerIcon}`}></i>
          </div>

          <div className={style.logo}>
            <Link to="/">
              <img
                src="https://i.ibb.co/LSRkDjv/cureit-logo.jpg"
                alt="Logo"
                className={style.logoImage}
              />
            </Link>
          </div>

          <div className={style.navButtons}>
            <div className={style.navButton} onClick={toggleDropdown}>
              Services
              <i className={`fas fa-caret-down ${style.dropdownArrow} ${isDropdownOpen ? style.rotate : ''}`}></i>
            </div>
            <Link to="/partners"><button className={style.navButton}>For Partners</button></Link>
            <Link to="/doctors"><button className={style.navButton}>For Doctors</button></Link>
            <button className={style.navButton}>About Us</button>
          </div>

          <div className={style.rightSection}>
            <div className={style.search}>
              <input
                type="text"
                className={style.searchInput}
                placeholder="Search..."
              />
              <i className={`fas fa-search ${style.searchIcon}`}></i>
            </div>
          </div>
        </div>

        {/* Single Dropdown for Services */}
        {isDropdownOpen && (
          <div className={style.verticalList}>
            <Link to="/book-appointment" onClick={handleDropdownItemClick}>
              <div>Book a doctor's appointment</div>
            </Link>
            <Link to="/book-test" onClick={handleDropdownItemClick}>
              <div>Book a test online</div>
            </Link>
            <Link to="/buy-medicine" onClick={handleDropdownItemClick}>
              <div>Buy Medicine</div>
            </Link>
            <Link to="/buy-insurance" onClick={handleDropdownItemClick}>
              <div>Buy health insurance</div>
            </Link>
            <Link to="/emergency" onClick={handleDropdownItemClick}>
              <div>Emergency</div>
            </Link>
          </div>
        )}
      </div>

      {/* Hamburger Menu */}
      <div
        className={`${style.hamburgerMenu} ${isNavOpen ? style.hamburgerActive : ''}`}
        ref={navRef}
      >
        <button onClick={toggleNav} className={style.closeHamburger}>
          <i className="fas fa-times"></i>
        </button>

        {/* Move the same dropdown here if needed */}
        <div className={style.hamBtn} onClick={toggleDropdown}>
          Services
          <i className={`fas fa-caret-down ${style.dropdownArrow} ${isDropdownOpen ? style.rotate : ''}`}></i>
        </div>
        
        {isDropdownOpen && (
          <div className={style.vertiList}>
            <Link to="/book-appointment" onClick={handleDropdownItemClick}>
              <div>Book a doctor's appointment</div>
            </Link>
            <Link to="/book-test" onClick={handleDropdownItemClick}>
              <div>Book a test online</div>
            </Link>
            <Link to="/buy-medicine" onClick={handleDropdownItemClick}>
              <div>Buy Medicine</div>
            </Link>
            <Link to="/buy-insurance" onClick={handleDropdownItemClick}>
              <div>Buy health insurance</div>
            </Link>
            <Link to="/emergency" onClick={handleDropdownItemClick}>
              <div>Emergency</div>
            </Link>
          </div>
        )}

        <Link to="/partners"><div className={style.hamBtn}>For Partners</div></Link>
        <Link to="/doctors"><div className={style.hamBtn}>For Doctors</div></Link>
        <div className={style.hamBtn}>About Us</div>
      </div>
    </>
  );
};

export default Navbar;
