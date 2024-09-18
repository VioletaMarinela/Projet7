import React from 'react';
import imageeror from '@/assets/Img/Erreur.png';
import '@/assets/Css/Pages/Erreurs.css';

const Erreurs = () => {
    return (
        <div className="container">
            <img src={imageeror} alt="Erreur 404" className="image" />
            <div className="bottom-container">
                <p className="text">Oups! La page que vous demandez n'existe pas.</p>
                <a href="/" className="link">Retourner sur la page d’accueil</a>
            </div>
        </div>
    );
};

export default Erreurs;