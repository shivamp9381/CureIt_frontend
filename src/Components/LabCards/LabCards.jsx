// import React from 'react';
// import styles from './LabCards.module.css';

// const LabCards = ({ lab, location, fee, rating, onClickBook }) => {
//     return (
//         <div className={styles.labCard}>
//             <div className={styles.labInfo}>
//                 <img src={lab.image} alt={lab.name} className={styles.labImage} />
//                 <div>
//                     <h3>{lab.name}</h3> {/* Changed lab to lab.name */}
//                     <p>{lab.test}</p> {/* Changed test to lab.test */}
//                     <p>{location}</p>
//                     <p>₹{fee} Test charge</p>
//                     <div className={styles.labratingStories}>
//                         <span className={styles.labrating}>Likes: {rating}%</span>
//                     </div>
//                 </div>
//             </div>
//             <button className={styles.labbookBtn} onClick={onClickBook}>
//                 Book Clinic Visit
//             </button>
//         </div>
//     );
// };

// export default LabCards;



import React from 'react';
import styles from './LabCards.module.css';

const LabCards = ({ lab, location, fee, rating, onClickBook }) => {
    return (
        <div className={styles.labCard}>
            <div className={styles.labInfo}>
                <img src={lab.image} alt={lab.name} className={styles.labImage} />
                <div>
                    <h3>{lab.name}</h3>
                    <p>Test Available: {lab.test}</p>
                    <p>Location: {location}</p>
                    <p>₹{fee} Test Charge</p>
                    <div className={styles.labratingStories}>
                        <span className={styles.labrating}>Customer Rating: {rating}%</span>
                    </div>
                </div>
            </div>
            <button className={styles.labbookBtn} onClick={onClickBook}>
                Book a Visit
            </button>
        </div>
    );
};

export default LabCards;
