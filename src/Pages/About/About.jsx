import React from 'react';
import { Link } from 'react-router-dom';
import utsho from '../../assets/image/utsho.png'
import { SiGmail } from "react-icons/si";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className='pt-20 lg:px-16'>
            <Helmet>
                <title>UTSHO | About</title>
            </Helmet>
            <h1 className='text-5xl font-semibold lg:px-16'>💁 About me:</h1>
            <hr />
            <div className="lg:hero lg:min-h-screen bg-transparent lg:pl-16">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="avatar w-1/2 lg:ml-32">
                        <div data-aos="fade-up" className="w-80 mt-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={utsho} />
                        </div>
                    </div>
                    <div data-aos="fade-right" className='w-1/2'>
                        <h1 className="text-3xl font-bold">Hi, <br /> I'm Utsho Roy. <br /> <hr /></h1>
                        <p className="lg:py-6 text-slate-600 w-full font-medium">I was born in Dinajpur. It is a district of the Rangpur Divison in Bangladesh. I am currently studying computer science engineering at Daffodil International University ( DIU ) . When I was in class 11, I learn a little about web design and development and I was very interested in it. Then I learn properly day by day and completed a web development course from Programming Hero (PH).</p>
                        <br />
                        <h1 className='text-3xl font-semibold'>Social Link:</h1>
                        <hr /> <br />
                        <div className='flex gap-2 mb-8'>
                            <Link to="/contact"><button className='btn btn-outline text-black'><SiGmail></SiGmail></button></Link>
                            <Link to="https://github.com/Utsho11"><button className='btn btn-outline text-black'><FaGithubSquare></FaGithubSquare></button></Link>
                            <Link to="https://www.linkedin.com/in/utsho-roy-27b344281/"><button className='btn btn-outline text-black'><FaLinkedinIn></FaLinkedinIn></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;