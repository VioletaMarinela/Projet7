import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Apropos, LogementDetails } from '@/pages/Public';
import Erreurs from '@/_utils/Erreurs';

import Layout from "@/Layout/Layout"

const PublicRouter = () => {
    return (

        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="/home" element={<Home />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/logement/:id" element={<LogementDetails />} />

                <Route path="*" element={<Erreurs />} />

            </Route>

        </Routes>

    );
};

export default PublicRouter;