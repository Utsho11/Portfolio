import React from 'react';
import './Technology.css'
import { FaReact, FaNode, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiExpress,SiMongodb,SiTailwindcss, SiBootstrap, SiVite, SiFirebase } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import Marquee from "react-fast-marquee";

const Technology = () => {

    return (
        <div>
            <h1 className='text-5xl text-center font-bold uppercase'>🧑‍💻 technologies:</h1>
            <div className='my-8 marquee-container'>            
            <Marquee direction='right'>
                <FaReact className='text-5xl mx-8 wave-animation h-28'></FaReact>
                <FaNode className='text-5xl mx-8 wave-animation h-28'></FaNode>
                <SiExpress className='text-5xl mx-8 wave-animation h-28'></SiExpress>
                <SiMongodb className='text-5xl mx-8 wave-animation h-28'></SiMongodb>
                <IoLogoJavascript className='text-5xl mx-8 wave-animation h-28'></IoLogoJavascript>
                <SiTailwindcss className='text-5xl mx-8 wave-animation h-28'></SiTailwindcss>
                <SiBootstrap className='text-5xl mx-8 wave-animation h-28'></SiBootstrap>
                <FaHtml5 className='text-5xl mx-8 wave-animation h-28'></FaHtml5>
                <FaCss3Alt className='text-5xl mx-8 wave-animation h-28'></FaCss3Alt>
                <SiVite className='text-5xl mx-8 wave-animation h-28'></SiVite>
                <SiFirebase className='text-5xl mx-8 wave-animation h-28'></SiFirebase>
            </Marquee>
            </div>
        </div>
    );
};

export default Technology;