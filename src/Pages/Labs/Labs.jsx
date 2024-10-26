import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import style from './Labs.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import LabCards from '../../Components/LabCards/LabCards';

const Labs = () => {
    const [searchQuery, setSearchQuery] = useState('');
    
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        setSearchQuery(queryParams.get('query') || '');
    }, [location]);

    const labsData = [
        {
            lab: {
                name: "Lab A",
                test: "CBC",
                image: 'https://i.ibb.co/zGBc7W5/Lab.png',
            },
            location: 'Patna, Bihar',
            fee: 750,
            rating: 90,
        },
        {
            lab: {
                name: "Lab B",
                test:  "LFT",
                image: 'https://i.ibb.co/zGBc7W5/Lab.png',
            },
            location: 'Bhubaneswar, Odisha',
            fee: 750,
            rating: 85,
        },
        {
            lab: {
                name: "Lab B",
                test:  "KFT",
                image: 'https://i.ibb.co/zGBc7W5/Lab.png',
            },
            location: 'Bhubaneswar, Odisha',
            fee: 750,
            rating: 85,
        },
        {
            lab: {
                name: "Lab A",
                test:  "CBC",
                image: 'https://i.ibb.co/zGBc7W5/Lab.png',
            },
            location: 'Bhubaneswar, Odisha',
            fee: 750,
            rating: 85,
        },
        {
            lab: {
                name: "Lab C",
                test:  "CBC",
                image: 'https://i.ibb.co/zGBc7W5/Lab.png',
            },
            location: 'Varanasi, Uttar Pradesh',
            fee: 750,
            rating: 85,
        },
        {
            lab: {
                name: "Lab D",
                test:  "Blood sugar",
                image: 'https://i.ibb.co/zGBc7W5/Lab.png',
            },
            location: 'Bangalore, Karnataka',
            fee: 750,
            rating: 85,
        },
        {
            lab: {
                name: "Lab B",
                test:  "Blood sugar",
                image: 'https://i.ibb.co/zGBc7W5/Lab.png',
            },
            location: 'Bangalore, Karnataka',
            fee: 750,
            rating: 85,
        },
        {
            lab: {
                name: "Lab A",
                test:  "Blood sugar",
                image: 'https://i.ibb.co/zGBc7W5/Lab.png',
            },
            location: 'Varanasi, Uttar Pradesh',
            fee: 750,
            rating: 85,
        },
        {
            lab: {
                name: "Lab D",
                test:  "Blood sugar",
                image: 'https://i.ibb.co/zGBc7W5/Lab.png',
            },
            location: 'Mumbai, Maharashtra',
            fee: 750,
            rating: 85,
        },
        {
            lab: {
                name: "Lab C",
                test:  "CBC",
                image: 'https://i.ibb.co/zGBc7W5/Lab.png',
            },
            location: 'Mumbai, Maharshtra',
            fee: 750,
            rating: 85,
        },
        {
            lab: {
                name: "Lab C",
                test:  "Test name",
                image: 'https://i.ibb.co/zGBc7W5/Lab.png',
            },
            location: 'Varanasi, Uttar Pradesh',
            fee: 750,
            rating: 85,
        },
        {
            lab: {
                name: "Lab C",
                test:  "Test name",
                image: 'https://i.ibb.co/zGBc7W5/Lab.png',
            },
            location: 'Varanasi, Uttar Pradesh',
            fee: 750,
            rating: 85,
        },

    ];

    const handleBook = (labName) => {
        console.log(`Booking appointment at ${labName}`);
    };

    // Filter labs based on the search query
    const filteredLabs = labsData.filter(item => {
        const labName = item.lab.name.toLowerCase();
        const location = item.location.toLowerCase();
        const testName = item.lab.test.toLowerCase();
        const query = searchQuery.toLowerCase();

        return labName.includes(query) || location.includes(query) || testName.includes(query);
    });

    return (
        <>
            <Navbar />
            <div className={style.labsContainer}>
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {filteredLabs.length > 0 ? (
                        filteredLabs.map((item, index) => (
                            <LabCards 
                                key={index}
                                lab={item.lab}
                                location={item.location}
                                fee={item.fee}
                                rating={item.rating}
                                onClickBook={() => handleBook(item.lab.name)}
                            />
                        ))
                    ) : (
                        <p>No labs found matching your search.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Labs;
