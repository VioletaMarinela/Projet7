import React, { useState } from 'react';
import '@/assets/Css/Pages/apropos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import Banner from '../../components/Banner';
import imagehome from '@/assets/Img/banner2.png';

const Apropos = () => {
    const [visibleText, setVisibleText] = useState(Array(4).fill(false));

    const handleClick = (index) => {
        console.log(`Clicked on item ${index}`);
        const newVisibleText = [...visibleText];
        newVisibleText[index] = !newVisibleText[index];
        setVisibleText(newVisibleText);
    };

    const items = ['Fiabilité', 'Respect', 'Service', 'Sécurité'];
    const descriptions = [
        'Les annonces postées sur Kasa garantisent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulierment vérifiées par nos équipes.',
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement déscriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.',
        'La qualité du service est au coeur de notre engagement chez kasa. Nous veillons à ce que chaque interaction, que soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.',
        'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à la hôte que au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
    ];

    return (
        <section className='SectionAccueil'>
            <Banner className="apropos-banner" image={imagehome} title="" />

            <ul className='listeapropos'>
                {items.map((item, index) => (
                    <li key={index} className="item-container">
                        {item}
                        <span className="icon-container" onClick={() => handleClick(index)}>
                            <FontAwesomeIcon icon={faAngleUp} />
                        </span>
                        {visibleText[index] && (
                            <div className="description-container">
                                <p className="description">{descriptions[index]}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Apropos;