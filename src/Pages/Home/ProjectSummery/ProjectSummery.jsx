import React, { useState } from 'react';
import summer from './images/summer-camp-school-bf81e.web.app_.png'
import './style/ProjectSummery.css'
import { Link } from 'react-router-dom';

const ProjectSummery = () => {

    return (
        <div>
            <h1 className='text-5xl font-bold text-center'>⛅ Projects at a Glance</h1>
            <div class = "holder">
        <div class = "container">
            <div class = "scroll-list">
                <div class = "scroll-item">
                    <div class = "icons">
                        <button type = "button">
                            <i class = "fa fa-heart"></i>
                        </button>
                        <button type = "button">
                            <i class = "fa fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>

                <div class = "scroll-item">
                    <div class = "icons">
                        <button type = "button">
                            <i class = "fa fa-heart"></i>
                        </button>
                        <button type = "button">
                            <i class = "fa fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>

                <div class = "scroll-item">
                    <div class = "icons">
                        <button type = "button">
                            <i class = "fa fa-heart"></i>
                        </button>
                        <button type = "button">
                            <i class = "fa fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='text-center'>
    <Link to="/projects"><button className='btn btn-outline shadow-2xl my-8'>Explore My Projects</button></Link>
    </div>
        </div>
    );
};

export default ProjectSummery;