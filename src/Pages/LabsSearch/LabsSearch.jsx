import React from 'react'
import styles from './LabsSearch.module.css'
import Navbar from '../../Components/Navbar/Navbar'
import BottomBanner from '../../Components/BottomBanner/BottomBanner'
import Footer from '../../Components/Footer/Footer'

const LabsSearch = () => {
    const handleSearch = (event) => {
        // Handle search logic here
        console.log(event.target.value);
    };

    return (
        <>
            <Navbar />
            <div className={styles.searchLabsContainer}>
                <div className={styles.searchLabsinput}>
                    <div className={styles.inputLabsContainer}>
                        <input
                            type="text"
                            className={styles.searchLabs}
                            placeholder="Search labs, tests, or locations..."
                            onChange={handleSearch}
                            aria-label="Search labs"
                        />
                    </div>
                    <i className={`fas fa-search ${styles.searchIconLabs}`}></i>
                </div>
            </div>
            <BottomBanner />
            <Footer />
        </>
    )
}

export default LabsSearch;
