import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Layout/Header';

import '../assets/Css/Template/layout.css';

const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;