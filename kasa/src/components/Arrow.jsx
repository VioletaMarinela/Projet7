import React, { useRef } from 'react';
import flechegauche from "@/assets/Img/arrow_left.png";
import flechedroite from "@/assets/Img/arrow_right.png";
import "@/assets/Css/Components/arrow.css";

const Arrow = ({ sliderRef }) => {
    const handlePrevious = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <div className="arrows">
            <div id="arrowleft" className="arow" onClick={handlePrevious}>
                <img src={flechegauche} alt="flèche gauche" />
            </div>
            <div id="arrowright" className="arow" onClick={handleNext}>
                <img src={flechedroite} alt="flèche droite" />
            </div>
        </div>
    );
};

export default Arrow;