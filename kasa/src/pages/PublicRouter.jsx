import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, About, ApartmentDetails } from '../pages';
import Eror from '../_utils/Eror';

import Layout from '../Layout/Layout';

const PublicRouter = () => {
    return (

        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/apartment/:id" element={<ApartmentDetails />} />

                <Route path="*" element={<Eror />} />

            </Route>

        </Routes>

    );
};

export default PublicRouter;