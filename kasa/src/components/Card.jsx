import React from 'react';
import '@/assets/Css/Components/Card.css';

const Card = ({ image, title }) => {
    return (
        <li className='Card'>
            <img src={image} alt={title} />
            <div className='Card-Sombre'></div>
            <h2>{title}</h2>
        </li>
    );
};

export default Card;