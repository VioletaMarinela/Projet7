import React from 'react';
import '../assets/Css/components/tags.css';

const Tags = ({ tags }) => {
    return (
        <div className="tags-list">
            {tags.map((tag, index) => (
                <span key={index} className="tag">
                    {tag}
                </span>
            ))}
        </div>
    );
};

export default Tags;