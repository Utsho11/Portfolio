import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from 'swiper';
import 'swiper/css';

import Summer_1 from '../.../../../../assets/Summer/Summer_ (1).png';
import Summer_2 from '../.../../../../assets/Summer/Summer_ (2).png';
import Summer_3 from '../.../../../../assets/Summer/Summer_ (3).png';
import Summer_4 from '../.../../../../assets/Summer/Summer_ (4).png';
import Summer_5 from '../.../../../../assets/Summer/Summer_ (5).png';
import Summer_6 from '../.../../../../assets/Summer/Summer_ (6).png';
import Typical from 'react-typical';
import { FaBroadcastTower, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Summer = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-8'><span className='text-white'>1. Project:
                <Typical
                    steps={[' Summer Sportopia', 1000]}
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
                    <img className='w-full h-auto' src={Summer_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-auto' src={Summer_2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-auto' src={Summer_3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-auto' src={Summer_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-auto' src={Summer_5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-auto' src={Summer_6} alt="slide_image" />
                </SwiperSlide>
            </Swiper>
            <div className="bg-slate-300 bg-opacity-10 p-16">
                        <h1 className="text-3xl font-bold">Features:</h1>
                        <ul className='font-semibold mt-4'>
                            <li>1. Responsive</li>
                            <li>2. Add class</li>
                            <li>3. Manage users</li>
                            <li>4. Different dashboards for Different Users</li>
                            <li>5. Eye catching Animation</li>
                        </ul>
                        <div className='my-4'>
                            <Link to="https://github.com/Utsho11/summer-sportopia.git">
                                <button className="btn my-4 btn-outline text-black mr-8"><FaGithub></FaGithub>GitHub Code</button></Link>
                            <Link to="https://summer-camp-school-bf81e.web.app/">
                                <button className="btn my-4 btn-outline text-black"><FaBroadcastTower></FaBroadcastTower>Live Site</button></Link>
                        </div>
                </div>
            </div>
    );
};

export default Summer;