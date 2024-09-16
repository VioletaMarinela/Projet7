import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/Img/logo.png';
import '@/assets/Css/Components/header.css'

const Header = () => {
    return (
        <header>
            <img src={logo} className="logo" alt="Le logo" />
            <nav>
                <NavLink to="/home" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}  >Accueil</NavLink>
                <NavLink to="/apropos" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ff6060" } : { borderBottom: "unset" }}  >À propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;