import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div className=' min-h-screen flex flex-col'>
            <Navbar />
            <main className=' flex-grow container mx-auto px-4'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default MainLayout;