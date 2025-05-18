import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LabsSearch.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import BottomBanner from '../../Components/BottomBanner/BottomBanner';
import Footer from '../../Components/Footer/Footer';

const LabsSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/labs?query=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <>
            <Navbar />
            <div className={styles.searchLabsContainer}>
                <form onSubmit={handleSubmit} className={styles.inputLabsContainer}>
                    <input
                        type="text"
                        className={styles.searchLabs}
                        placeholder="Search labs, tests, or locations..."
                        value={searchQuery}
                        onChange={handleSearch}
                        aria-label="Search labs"
                    />
                    <button type="submit" className={styles.searchButton}>
                        <i className={`fas fa-search ${styles.searchIconLabs}`}></i>
                    </button>
                </form>
            </div>
            <BottomBanner />
            <Footer />
        </>
    );
};

export default LabsSearch;
