import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import logementservice from '@/_Services/logement.service';

import '@/assets/Css/Pages/logementDetails.css';
import Dropdown from '../../components/Dropdown';
import Arrow from '../../components/Arrow';


const LogementDetails = () => {
    const [logement, setLogement] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const sliderRef = useRef(null);
    const { id } = useParams();
    let navigate = useNavigate();


    useEffect(() => {
        GetOneLogementInfo();
    }, [id]);

    const GetOneLogementInfo = async () => {
        await logementservice.GetOneLogement(id)
            .then((data) => {
                if (data) {
                    setLogement(data);
                    setisLoading(false);
                } else {
                    navigate("/404");
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }


    const displayEquipments = (equipments) => {
        if (equipments) {
            return (
                <ul>
                    {equipments.map((equipement, index) => {
                        return (
                            <li key={index}>
                                {equipement}
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }

    if (isLoading) return (<h2>Chargement...</h2>)

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows: true,
        autoplay: false,
        pauseOnHover: false,
    };


    const currentSlideIndex = sliderRef.current ? sliderRef.current.innerSlider.state.currentSlide + 1 : 0;

    return (
        <section className="logement-details">
            <Arrow sliderRef={sliderRef} />
            <div className="image-carousel">
                <Slider ref={sliderRef} {...settings}>
                    {logement.pictures.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`logement-${index}`} />
                            {/* Displaying the current slide index */}
                            <div className="image-index">{`${currentSlideIndex}/${logement.pictures.length}`}</div>
                        </div>
                    ))}
                </Slider>
            </div>
            <h2 className="logement-title">{logement.title}</h2>
            <p className="location">{logement.location}</p>

            <div className="description-equipements">
                <Dropdown title={"Description"} description={logement.description} />
                <Dropdown title={"Equipement"} description={displayEquipments(logement.equipments)} />
            </div>
        </section>
    );
};

export default LogementDetails;