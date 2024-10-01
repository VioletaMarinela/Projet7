import React from 'react';
import { NavLink } from "react-router-dom"
import '../assets/Css/Pages/home.css';

import Card from '../Components/Card';
import Banner from '../Components/Banner';
import imagehome from '../assets/Img/banner1.png';
import apartmentService from '../_utils/apartment.service';



const Home = () => {

    return (
        <section className='SectionAccueil'>
            <Banner image={imagehome} title="Chez vous, partout et ailleurs" />

            <ul className='listelogement'>
                {
                    apartmentService.GetAllApartment().map((apartment) =>
                        <NavLink key={apartment.id} to={`/apartment/${apartment.id}/#`}>
                            <Card image={apartment.cover} title={apartment.title} />
                        </NavLink>
                    )
                }
            </ul>
        </section>

    );
};

export default Home;