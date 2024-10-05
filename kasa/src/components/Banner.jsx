
import React from 'react';
import '../assets/Css/Components/banner.css';

const Banner = ({ image, title }) => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${image})` }}>
            <h1 className="banner-title">{title}</h1>
        </div>
    );
};

export default Banner;