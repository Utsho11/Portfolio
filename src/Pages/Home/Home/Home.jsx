import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Technology from '../Technology/Technology';
import Contact from '../../Contact/Contact';
import ProjectSummery from '../ProjectSummery/ProjectSummery';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>UTSHO | Home</title>
            </Helmet>
            <Banner></Banner>
            <Technology></Technology>
            <ProjectSummery></ProjectSummery>
        </div>
    );
};

export default Home;