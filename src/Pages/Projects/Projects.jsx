import React from 'react';
import Summer from './SubProjects/Summer';
import Typical from 'react-typical';
import Toyotopia from './SubProjects/Toyotopia';
import Chef from './SubProjects/Chef';
import { Helmet } from 'react-helmet-async';

const Projects = () => {
    return (
        <div className='pt-20'>
            <Helmet>
                <title>UTSHO | Projects</title>
            </Helmet>
            <h1 className='text-5xl font-bold text-center'><span className='text-white'>Welcome</span> 
                <Typical
                    steps={[' to Projects Page', 1000]}
                    loop={Infinity}
                    wrapper='b'
                /></h1>
            <Summer></Summer>
            <Toyotopia></Toyotopia>
            <Chef></Chef>
        </div>
    );
};

export default Projects;