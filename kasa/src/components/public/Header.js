import React from 'react';
import { Link } from 'react-router-dom'

import './header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/home">Accueil</Link></li>
                    <li><Link to="/apropos">A propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;