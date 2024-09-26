import React, { forwardRef, useState } from 'react';
import '@/assets/Css/Components/slider.css';
import flechegauche from "@/assets/Img/arrow_left.png";
import flechedroite from "@/assets/Img/arrow_right.png";


const CustomSlider = forwardRef(({ images }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const previousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-container">
            {images.map((image, index) => {
                const isActive = currentIndex === index;
                const isPrevious = index === (currentIndex - 1 + images.length) % images.length;
                const isNext = index === (currentIndex + 1) % images.length;
                const classNames = `slider-image ${isActive ? 'active' : ''} ${isPrevious ? 'previous' : ''} ${isNext ? 'next' : ''}`;

                return (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`} // Improved alt text for accessibility  
                        className={classNames}
                    />
                );
            })}
            <div className="arrows">
                <div className="arrow" onClick={previousSlide}>
                    <img src={flechegauche} alt="Previous" />
                </div>
                <div className="arrow" onClick={nextSlide}>
                    <img src={flechedroite} alt="Next" />
                </div>
                <div className="image-counter">
                    {currentIndex + 1} / {images.length}  {/* Display the current image index and total count */}
                </div>
            </div>
        </div>
    );
});

export default CustomSlider;