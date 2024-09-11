import React from 'react';
import logo from '../../assets/whiteLogo.png';
import './footer.css'


const Footer = () => {
    return (
        <footer>

            <div className='Footer'>
                <img src={logo} className="logo" alt="Le logo blanc" />
                <p>© 2020 Kasa. All rights reserved </p>
            </div>
        </footer>
    );
};

export default Footer;