import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, About, ApartmentDetails } from '../pages';
import Eror from '../_utils/Eror';

import Header from '../components/Header';
import Footer from '../components/Footer';

const PublicRouter = () => {
    return (
        <React.StrictMode>

            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/apartment/:id" element={<ApartmentDetails />} />
                <Route path="*" element={<Eror />} />
            </Routes>
            <Footer />

        </React.StrictMode>
    );
}

export default PublicRouter;