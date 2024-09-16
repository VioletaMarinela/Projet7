import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Apropos, Logements } from '@/pages/Public';
import Erreurs from '@/_utils/Erreurs';

import Layout from "@/Layout/Layout"

const PublicRouter = () => {
    return (

        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="/home" element={<Home />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/logements" element={<Logements />} />

                <Route path="*" element={<Erreurs />} />

            </Route>

        </Routes>

    );
};

export default PublicRouter;