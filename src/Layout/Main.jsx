import React from 'react';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
    return (
        <div className='bg-gradient-to-r from-rose-400 via-purple-400 to-blue-600'>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;