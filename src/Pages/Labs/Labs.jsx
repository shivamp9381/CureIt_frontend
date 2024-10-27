// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import style from './Labs.module.css';
// import Navbar from '../../Components/Navbar/Navbar';
// import Footer from '../../Components/Footer/Footer';
// import LabCards from '../../Components/LabCards/LabCards';
// import LabSlotModal from '../../Components/LabSlotModal/LabSlotModal'; // Import the LabSlotModal component
// import BottomBanner from '../../Components/BottomBanner/BottomBanner';

// const Labs = () => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [showModal, setShowModal] = useState(false);
//     const [selectedLab, setSelectedLab] = useState(null); // State for selected lab
//     const location = useLocation();

//     useEffect(() => {
//         const queryParams = new URLSearchParams(location.search);
//         setSearchQuery(queryParams.get('query') || '');
//     }, [location]);

    // const labsData = [
    //     {
    //         lab: {
    //             name: "Lab A",
    //             test: "CBC",
    //             image: 'https://i.ibb.co/zGBc7W5/Lab.png',
    //         },
    //         location: 'Patna, Bihar',
    //         fee: 750,
    //         rating: 90,
    //     },
    //     {
    //         lab: {
    //             name: "Lab B",
    //             test:  "LFT",
    //             image: 'https://i.ibb.co/zGBc7W5/Lab.png',
    //         },
    //         location: 'Bhubaneswar, Odisha',
    //         fee: 750,
    //         rating: 85,
    //     },
    //     {
    //         lab: {
    //             name: "Lab B",
    //             test:  "KFT",
    //             image: 'https://i.ibb.co/zGBc7W5/Lab.png',
    //         },
    //         location: 'Bhubaneswar, Odisha',
    //         fee: 750,
    //         rating: 85,
    //     },
    //     {
    //         lab: {
    //             name: "Lab A",
    //             test:  "CBC",
    //             image: 'https://i.ibb.co/zGBc7W5/Lab.png',
    //         },
    //         location: 'Bhubaneswar, Odisha',
    //         fee: 750,
    //         rating: 85,
    //     },
    //     {
    //         lab: {
    //             name: "Lab C",
    //             test:  "CBC",
    //             image: 'https://i.ibb.co/zGBc7W5/Lab.png',
    //         },
    //         location: 'Varanasi, Uttar Pradesh',
    //         fee: 750,
    //         rating: 85,
    //     },
    //     {
    //         lab: {
    //             name: "Lab D",
    //             test:  "Blood sugar",
    //             image: 'https://i.ibb.co/zGBc7W5/Lab.png',
    //         },
    //         location: 'Bangalore, Karnataka',
    //         fee: 750,
    //         rating: 85,
    //     },
    //     {
    //         lab: {
    //             name: "Lab B",
    //             test:  "Blood sugar",
    //             image: 'https://i.ibb.co/zGBc7W5/Lab.png',
    //         },
    //         location: 'Bangalore, Karnataka',
    //         fee: 750,
    //         rating: 85,
    //     },
    //     {
    //         lab: {
    //             name: "Lab A",
    //             test:  "Blood sugar",
    //             image: 'https://i.ibb.co/zGBc7W5/Lab.png',
    //         },
    //         location: 'Varanasi, Uttar Pradesh',
    //         fee: 750,
    //         rating: 85,
    //     },
    //     {
    //         lab: {
    //             name: "Lab D",
    //             test:  "Blood sugar",
    //             image: 'https://i.ibb.co/zGBc7W5/Lab.png',
    //         },
    //         location: 'Mumbai, Maharashtra',
    //         fee: 750,
    //         rating: 85,
    //     },
    //     {
    //         lab: {
    //             name: "Lab C",
    //             test:  "CBC",
    //             image: 'https://i.ibb.co/zGBc7W5/Lab.png',
    //         },
    //         location: 'Mumbai, Maharshtra',
    //         fee: 750,
    //         rating: 85,
    //     },
    //     {
    //         lab: {
    //             name: "Lab C",
    //             test:  "Test name",
    //             image: 'https://i.ibb.co/zGBc7W5/Lab.png',
    //         },
    //         location: 'Varanasi, Uttar Pradesh',
    //         fee: 750,
    //         rating: 85,
    //     },
    //     {
    //         lab: {
    //             name: "Lab C",
    //             test:  "Test name",
    //             image: 'https://i.ibb.co/zGBc7W5/Lab.png',
    //         },
    //         location: 'Varanasi, Uttar Pradesh',
    //         fee: 750,
    //         rating: 85,
    //     },

    // ];

//     const handleBook = (lab) => {
//         setSelectedLab(lab); // Store the selected lab details
//         setShowModal(true); // Show the modal when "Book Clinic Visit" is clicked
//     };

//     const filteredLabs = labsData.filter(item => {
//         const labName = item.lab.name.toLowerCase();
//         const location = item.location.toLowerCase();
//         const testName = item.lab.test.toLowerCase();
//         const query = searchQuery.toLowerCase();

//         return labName.includes(query) || location.includes(query) || testName.includes(query);
//     });

//     const closeModal = () => {
//         setShowModal(false);
//         setSelectedLab(null); // Clear the selected lab
//     };

//     return (
//         <>
//             <Navbar />
//             <div className={style.labsContainer}>
//                 <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                     {filteredLabs.length > 0 ? (
//                         filteredLabs.map((item, index) => (
//                             <LabCards 
//                                 key={index}
//                                 lab={item.lab}
//                                 location={item.location}
//                                 fee={item.fee}
//                                 rating={item.rating}
//                                 onClickBook={() => handleBook(item)} // Pass the entire lab object
//                             />
//                         ))
//                     ) : (
//                         <p>No labs found matching your search.</p>
//                     )}
//                 </div>
//             </div>
//             {/* Modal for Lab Slot Selection */}
//             {showModal && selectedLab && (
//                 <LabSlotModal
//                     isOpen={showModal}
//                     onClose={closeModal}
//                     lab={selectedLab.lab} // Pass the selected lab object to the LabSlotModal
//                 />
//             )}

//             <BottomBanner />
//             <Footer />
//         </>
//     );
// };

// export default Labs;



import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import style from './Labs.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import LabCards from '../../Components/LabCards/LabCards';
import LabSlotModal from '../../Components/LabSlotModal/LabSlotModal';
import BottomBanner from '../../Components/BottomBanner/BottomBanner';

const Labs = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedLab, setSelectedLab] = useState(null);
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

    const handleBook = (lab) => {
        setSelectedLab(lab);
        setShowModal(true);
    };

    const filteredLabs = labsData.filter(item => {
        const labName = item.lab.name.toLowerCase();
        const location = item.location.toLowerCase();
        const testName = item.lab.test.toLowerCase();
        const query = searchQuery.toLowerCase();

        return labName.includes(query) || location.includes(query) || testName.includes(query);
    });

    const closeModal = () => {
        setShowModal(false);
        setSelectedLab(null);
    };

    return (
        <>
            <Navbar />
            <div className={style.labsContainer}>
                <h2>Find the Best Labs for Your Tests</h2>
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {filteredLabs.length > 0 ? (
                        filteredLabs.map((item, index) => (
                            <LabCards 
                                key={index}
                                lab={item.lab}
                                location={item.location}
                                fee={item.fee}
                                rating={item.rating}
                                onClickBook={() => handleBook(item)}
                            />
                        ))
                    ) : (
                        <p>No labs found matching your search.</p>
                    )}
                </div>
            </div>
            {showModal && selectedLab && (
                <LabSlotModal
                    isOpen={showModal}
                    onClose={closeModal}
                    lab={selectedLab.lab}
                />
            )}
            <BottomBanner />
            <Footer />
        </>
    );
};

export default Labs;
