
import React from 'react';
import '../assets/Css/Components/stars.css';

const Stars = ({ rating }) => {
    const numStars = Math.round(rating);

    return (
        <div className="stars-list">
            {[...Array(5)].map((_, index) => (
                <span key={index} className={index < numStars ? "star filled" : "star"}>★</span>
            ))}
        </div>
    );
};

export default Stars;