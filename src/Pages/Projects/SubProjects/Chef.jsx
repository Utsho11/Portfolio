import React from 'react';


import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from 'swiper';
import 'swiper/css';

import Chef_1 from '../.../../../../assets/Chef/ChefSlide_ (1).png';
import Chef_4 from '../.../../../../assets/Chef/ChefSlide_ (4).png';
import Chef_5 from '../.../../../../assets/Chef/ChefSlide_ (5).png';
import Chef_6 from '../.../../../../assets/Chef/ChefSlide_ (6).png';
import Typical from 'react-typical';
import { FaBroadcastTower, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Chef = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-8'><span className='text-white'>3. Project:
                <Typical
                    steps={[' Exclusive-Recipe-Hub', 1000]}
                    loop={Infinity}
                    wrapper='b'
                />
            </span>
            </h1>
            <Swiper
                modules={[Scrollbar]}
                spaceBetween={50}
                slidesPerView={2}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="mySwiper mb-16"
            >
                <SwiperSlide>
                    <img className='w-full h-auto' src={Chef_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-auto' src={Chef_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-auto' src={Chef_5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-auto' src={Chef_6} alt="slide_image" />
                </SwiperSlide>
            </Swiper>
            <div className="bg-slate-300 bg-opacity-10 p-16">
                        <h1 className="text-3xl font-bold">Features:</h1>
                        <ul className='font-semibold mt-4'>
                            <li>1. Responsive</li>
                            <li>2. Chef Details</li>
                            <li>3. Private Route</li>
                            <li>4. Recipe Details</li>
                            <li>5. User Registration Page</li>
                        </ul>
                        <div className='my-4'>
                            <Link to="https://github.com/Utsho11/Exclusive-Recipe-Hub.git">
                                <button className="btn btn-outline text-black my-4 mr-8"><FaGithub></FaGithub>GitHub Code</button></Link>
                            <Link to="https://exclusive-recipe-hub-client.web.app/">
                                <button className="btn my-4 btn-outline text-black"><FaBroadcastTower></FaBroadcastTower>Live Site</button></Link>
                        </div>
                </div>
        </div>
    );
};

export default Chef;