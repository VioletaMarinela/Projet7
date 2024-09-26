import React from 'react';
import '@/assets/Css/Components/host.css';

const Host = ({ profile }) => {
    return (
        <div className="host-container">
            <h2 className="profile-name">{profile.name}</h2> {/* Display the host's name */}
            <img
                className="profile-picture"
                src={profile.picture}
                alt={profile.name}
            />
        </div>
    );
};

export default Host;