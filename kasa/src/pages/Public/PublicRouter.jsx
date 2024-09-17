import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Listelogement from "@/assets/data/logement.json";

import { Home, Apropos, LogementDetail } from '@/pages/Public';
import Erreurs from '@/_utils/Erreurs';

import Layout from "@/Layout/Layout"

const PublicRouter = () => {
    return (

        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="/home" element={<Home />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/logements" exact component={Listelogement} />
                <Route path="/logements/:id" element={<LogementDetail />} />

                <Route path="*" element={<Erreurs />} />

            </Route>

        </Routes>

    );
};

export default PublicRouter;