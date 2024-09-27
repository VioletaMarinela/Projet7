import React, { useEffect, useState } from 'react';
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
        <section className="SectionLogement">
            <CustomSlider images={logement.pictures} />
            <div className="containerTopInfo">
                <div className="containerTitle">
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                    <Tags tags={logement.tags} />
                </div>
                <div className="hostStars">
                    <Host name={host.name} picture={host.picture} />
                    <Stars rating={logement.rating} />
                </div>
            </div>
            <div className="containerDropdown">
                <Dropdown title={"Description"} description={logement.description} />
                <Dropdown title={"Equipement"} description={displayEquipments(logement.equipments)} />
            </div>
        </section>
    );
};

export default LogementDetails;
