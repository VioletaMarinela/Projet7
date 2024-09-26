import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logementservice from '@/_Services/logement.service';

import '@/assets/Css/Pages/logementDetails.css';
import Dropdown from '../../components/Dropdown';
import CustomSlider from '../../components/CustomSlider';
import Host from '../../components/Host';
import Tags from '../../components/Tags';
import Stars from '../../components/Stars';

const LogementDetails = () => {
    const [logement, setLogement] = useState(null);
    const [host, setHost] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const sliderRef = useRef(null);
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const GetOneLogementInfo = async () => {
            await logementservice.GetOneLogement(id)
                .then((data) => {
                    if (data) {
                        setLogement(data);
                        setHost(data.host);
                        setisLoading(false);
                    } else {
                        navigate("/404");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        GetOneLogementInfo();
    }, [id, navigate]);

    const displayEquipments = (equipments) => {
        if (equipments) {
            return (
                <ul>
                    {equipments.map((equipement, index) => (
                        <li key={index}>
                            {equipement}
                        </li>
                    ))}
                </ul>
            );
        }
    };

    if (isLoading) return (<h2>Chargement...</h2>);

    return (
        <section className="logement-details">
            <div className="image-carousel">
                {logement && logement.pictures ? (
                    <CustomSlider ref={sliderRef} images={logement.pictures} />
                ) : (
                    <p>No images available</p>
                )}
            </div>
            <div className="title-location-host">
                <div>
                    <h2 className="logement-title">{logement.title}</h2>
                    <p className="location">{logement.location}</p>
                </div>
                <div className="host-detail">
                    {host && host.picture && host.name ? (
                        <Host profile={{ name: host.name, picture: host.picture }} />
                    ) : (
                        <p>No host information available</p>
                    )}
                </div>
            </div>
            <div className="tags-stars">
                <div className="tags-detail">
                    {logement && logement.tags ? (
                        <Tags tags={logement.tags} />
                    ) : (
                        <p>No tags available</p>
                    )}
                </div>

                <div className="stars-detail">
                    {logement?.rating ? (
                        <Stars rating={logement.rating} />
                    ) : (
                        <p>No rating available</p>
                    )}
                </div>
            </div>
            <div className="description-equipements">
                <div className="dropdown-box">
                    <Dropdown title={"Description"} description={logement.description} />
                </div>
                <div className="dropdown-box">
                    <Dropdown title={"Equipement"} description={displayEquipments(logement.equipments)} />
                </div>
            </div>
        </section>
    );
};

export default LogementDetails;
