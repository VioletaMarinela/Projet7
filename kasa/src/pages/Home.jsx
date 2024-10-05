import React from 'react';
import { NavLink } from "react-router-dom"
import '../assets/Css/Pages/home.css';

import Card from '../components/Card';
import Banner from '../components/Banner';
import imagehome from '../assets/Img/banner1.png';
import apartmentService from '../_utils/apartment.service';



const Home = () => {

    return (
        <section className='SectionHome'>
            <Banner image={imagehome} title="Chez vous, partout et ailleurs" />

            <ul className='DataApartment'>
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