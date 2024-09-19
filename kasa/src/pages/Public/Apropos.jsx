import React from 'react';
import '@/assets/Css/Pages/apropos.css';

import Banner from '../../components/Banner';
import Dropdown from '../../components/Dropdown';

import imagehome from '@/assets/Img/banner2.png';

import ListeDropdown from "@/assets/data/dropdown.json"

const Apropos = () => {

    return (
        <section className='SectionAccueil'>
            <Banner className="apropos-banner" image={imagehome} title="" />

            <ul className='listeapropos'>
                {ListeDropdown.map((item) => (
                    <Dropdown key={item.id} title={item.title} description={item.description} />
                ))}
            </ul>
        </section>
    );
};

export default Apropos;