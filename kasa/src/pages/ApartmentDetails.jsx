import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apartmentService from '../_utils/apartment.service';
import '../assets/Css/Pages/apartmentDetails.css';
import Collapse from '../components/Collapse';
import Gallery from '../components/Gallery';
import Host from '../components/Host';
import Stars from '../components/Stars';
import Tags from '../components/Tags';

const ApartmentDetails = () => {
    const [apartment, setApartment] = useState(null);
    const [host, setHost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const getOneApartmentInfo = async () => {
            try {
                const data = await apartmentService.GetOneApartment(id);
                if (data) {
                    setApartment(data);
                    setHost(data.host);
                } else {
                    navigate("/404");
                }
            } catch (error) {
                console.error(error);
                setError("Une erreur s'est produite lors de la récupération des données.");
            } finally {
                setIsLoading(false);
            }
        };

        getOneApartmentInfo();
    }, [id, navigate]);

    const displayEquipments = (equipments) => {
        if (equipments && equipments.length > 0) {
            return (
                <ul>
                    {equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            );
        }
        return <p>Aucun équipement disponible.</p>;
    };

    if (isLoading) return (<h2>Chargement...</h2>);
    if (error) return <h2>{error}</h2>;

    return (
        <section className="SectionHome">
            <Gallery images={apartment.pictures} />
            <div className="containerTopInfo">
                <div className="containerTitle">
                    <h2>{apartment.title}</h2>
                    <p>{apartment.location}</p>
                    <Tags tags={apartment.tags} />
                </div>
                <div className="hostStars">
                    <Host name={host.name} picture={host.picture} />
                    <Stars rating={apartment.rating} />
                </div>
            </div>
            <div className="containerDropdown">
                <Collapse title={"Description"} description={apartment.description} />
                <Collapse title={"Équipements"} description={displayEquipments(apartment.equipments)} />
            </div>
        </section>
    );
};

export default ApartmentDetails;