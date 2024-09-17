import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logementservice from '@/_Services/logement.service';

const LogementDetail = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        const fetchLogement = () => {
            const data = logementservice.GetOneLogement(id);
            setLogement(data);
        };

        fetchLogement();
    }, [id]);

    if (!logement) {
        return <div>Chargement...</div>;
    }

    return (
        <div>
            <h1>{logement.title}</h1>
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.description}</p>
            <p>Location: {logement.location}</p>
            <p>Note: {logement.rating}</p>
            <div>
                <h3>Equipements:</h3>
                <ul>
                    {logement.equipements.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Tags:</h3>
                <ul>
                    {logement.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Hôte:</h3>
                <p>{logement.host.name}</p>
                <img src={logement.host.picture} alt={logement.host.name} />
            </div>
        </div>
    );
};

export default LogementDetail;