import React from 'react';
import '../assets/Css/Pages/about.css';

import Banner from '../Components/Banner';
import Collapse from '../Components/Collapse';

import imagehome from '../assets/Img/banner2.png';

import ListeCollapse from "../assets/data/collapse.json"

const About = () => {

    return (
        <section className='SectionHome'>
            <Banner className="apropos-banner" image={imagehome} title="" />

            <ul className='AboutData'>
                {ListeCollapse.map((item) => (
                    <Collapse key={item.id} title={item.title} description={item.description} />
                ))}
            </ul>
        </section>
    );
};

export default About;