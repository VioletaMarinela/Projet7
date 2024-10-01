import React from 'react';
import '../assets/Css/Pages/eror.css';

const Eror = () => {
    return (
        <div className="container">
            <h1>404</h1>
            <div className="bottom-container">
                <p className="text">Oups! La page que vous demandez n'existe pas.</p>
                <a href="/" className="link">Retourner sur la page d’accueil</a>
            </div>
        </div>
    );
};

export default Eror;