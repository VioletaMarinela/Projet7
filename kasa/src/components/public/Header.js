import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png';
import './header.css'

const Header = () => {
    return (
        <header>

            <nav>
                <img src={logo} className="logo" alt="Le logo" />
                <ul>
                    <li><Link to="/home">Accueil</Link></li>
                    <li><Link to="/apropos">A propos</Link></li>
                </ul >
            </nav >
        </header >
    );
};

export default Header;