import React from 'react';
import utsho from '../../../assets/image/utsho.png'
import resume from '../../../assets/file/Resume.pdf'
import Typical from 'react-typical';
import { FaDownload } from 'react-icons/fa';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-transparent">
                <div className="mt-16 hero-content flex-col lg:flex-row-reverse">
                    <div className='w-1/2'>
                        <h1 className='font-semibold'>🌏Welcome to my <span className='text-white'>Portfolio</span> </h1>
                        <p  className="text-3xl font-bold">Hi👋, I am <span className='text-white'>UTSHO ROY</span>
                        </p>
                        <Typical className='text-5xl'
                            steps={['MernStack Developer', 2000, 'Front-End Developer', 2000]}
                            loop={Infinity}
                            wrapper='b'
                        />
                        <p className="py-6 text-slate-700 font-medium">I'm a junior mern stack developer and a passionate web developer with a curious and constant learning mind. I am constantly exploring, learning and implementing new things about website.</p>
                        <a href={resume} download="resume.pdf" className="btn btn-outline shadow-lg">
                            Download Resume <FaDownload/>
                        </a>
                    </div>
                    <img data-aos="fade-up" src={utsho} className="max-w-sm rounded-full w-1/2" />
                </div>
            </div>
        </div>
    );
};

export default Banner;