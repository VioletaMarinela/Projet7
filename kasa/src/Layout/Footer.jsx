import React from 'react';
import logo from '../assets/Img/whiteLogo.png';
import '../assets/Css/components/footer.css'


const Footer = () => {
    return (
        <footer>
            <section className='Footer'>
                <img src={logo} className="logo" alt="Le logo blanc" />
                <p>© 2020 Kasa. All rights reserved </p>
            </section>
        </footer>
    );
};

export default Footer;