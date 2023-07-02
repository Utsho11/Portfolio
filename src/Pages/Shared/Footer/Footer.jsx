import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Style/Footer.css'
import { Link } from 'react-router-dom';
import logo from '../NavigationBar/images/logo.png'

const Footer = () => {
    return (
        <footer data-aos="fade-up">
            <footer-children>
                <div className='waves'>
                    <div className="wave" id='wave1'></div>
                    <div className="wave" id='wave2'></div>
                    <div className="wave" id='wave3'></div>
                    <div className="wave" id='wave4'></div>
                </div>
                <p className='font-bold'>Social:</p>
            <ul className='social-icon'>
                <li><Link to="https://www.facebook.com/profile.php?id=100074953756613"><FaFacebook size={'30px'} style={{transition:'0.5s'}} className='hover:-translate-y-2 text-white'></FaFacebook></Link></li>
                <li><Link to="https://www.linkedin.com/in/utsho-roy-27b344281/"><FaLinkedin size={'30px'} style={{transition:'0.5s'}} className='hover:-translate-y-2 text-white'></FaLinkedin></Link></li>
                <li><Link to="https://github.com/Utsho11"><FaGithub size={'30px'} style={{transition:'0.5s'}} className='hover:-translate-y-2 text-white'></FaGithub></Link></li>
            </ul>
            <ul className='social-icon'>
                <li><Link to="/home" className='font-semibold hover:text-white'>Home</Link></li>
                <li><Link to="/about" className='font-semibold hover:text-white'>About</Link></li>
                <li><Link to="/projects" className='font-semibold hover:text-white'>Projects</Link></li>
                <li><Link to="/contact" className='font-semibold hover:text-white'>Contact</Link></li>
            </ul>
            <p>Copyright © 2023 | Utsho Roy - All right reserved</p>            
            </footer-children>
        </footer>
    );
};

export default Footer;