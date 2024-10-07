import React from 'react';
import logo from '../assets/Img/whiteLogo.png';
import '../assets/Css/Components/footer.css'


const Footer = () => {
    return (
        <footer>
            <section className='Footer'>
                <img src={logo} className="logo" alt="Le logo blanc" />
                <h3 className="footer-text">© 2020 Kasa. All rights reserved</h3>
            </section>
        </footer>
    );
};

export default Footer;