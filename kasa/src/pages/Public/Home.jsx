import React from 'react';
import { NavLink } from "react-router-dom"
import '@/assets/Css/Pages/home.css';

import Card from '../../components/Card';
import Banner from '../../components/Banner';
import imagehome from '@/assets/Img/banner1.png';
import logementservice from '@/_Services/logement.service';


const Home = () => {

    return (
        <section className='SectionAccueil'>
            <Banner image={imagehome} title="Chez vous, partout et ailleurs" />

            <ul className='listelogement'>
                {
                    logementservice.GetAllLogement().map((logement) =>
                        <NavLink key={logement.id} to={`/logement/${logement.id}/#`}>
                            <Card image={logement.cover} title={logement.title} />
                        </NavLink>
                    )
                }
            </ul>
        </section>

    );
};

export default Home;