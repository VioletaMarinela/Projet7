import React from 'react';
import '../assets/Css/components/host.css';

const Host = ({ name, picture }) => {
    return (
        <div className="host-container">
            <h2 className="profile-name">{name}</h2> {/* Display the host's name */}
            <img
                className="profile-picture"
                src={picture}
                alt={name}
            />
        </div>
    );
};

export default Host;