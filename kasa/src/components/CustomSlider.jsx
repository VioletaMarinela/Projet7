import React, { useState } from 'react';
import '@/assets/Css/Components/slider.css';
import flechegauche from "@/assets/Img/arrow_left.png";
import flechedroite from "@/assets/Img/arrow_right.png";

const CustomSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1 === images.length ? 0 : prevIndex + 1);
    };

    const previousSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };

    return (
        <div className="slideshow">
            {
                images.length > 1 && (
                    <img className="arrowLeft" src={flechegauche} alt="flèche gauche" onClick={() => previousSlide()} />
                )
            }
            <div className="slideshowSlider" style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}>
                {images.map((picture, index) => (
                    <div className="slide" key={index} style={{ background: `no-repeat center/cover url(${picture})` }}></div>

                ))}
            </div>
            {
                images.length > 1 && (
                    <>
                        <img className="arrowRight" src={flechedroite} alt="flèche droite" onClick={() => nextSlide()} />
                        <span className="paging"> {currentIndex + 1} / {images.length} </span>
                    </>
                )
            }
        </div>
    );
};

export default CustomSlider;