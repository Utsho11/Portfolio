import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from 'swiper';
import 'swiper/css';

import Toy_1 from '../.../../../../assets/Toy/Toy_ (1).png';
import Toy_2 from '../.../../../../assets/Toy/Toy_ (2).png';
import Toy_3 from '../.../../../../assets/Toy/Toy_ (3).png';
import Toy_4 from '../.../../../../assets/Toy/Toy_ (4).png';
import Toy_5 from '../.../../../../assets/Toy/Toy_ (5).png';
import Toy_6 from '../.../../../../assets/Toy/Toy_ (6).png';
import Typical from 'react-typical';
import { FaBroadcastTower, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Toyotopia = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-8'><span className='text-white'>2. Project:
                <Typical
                    steps={[' Toyotopia', 1000]}
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
                    <img className='w-full h-auto' src={Toy_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-auto' src={Toy_2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-auto' src={Toy_3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-auto' src={Toy_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-auto' src={Toy_5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-auto' src={Toy_6} alt="slide_image" />
                </SwiperSlide>
            </Swiper>
            <div className="bg-slate-300 bg-opacity-10 p-16">
                        <h1 className="text-3xl font-bold">Features:</h1>
                        <ul className='font-semibold mt-4'>
                            <li>1. All toy page</li>
                            <li>2. add toy page</li>
                            <li>3. private route</li>
                            <li>4. Add toy</li>
                            <li>5. Responsive</li>
                        </ul>
                        <div className='my-4'>
                            <Link to="https://github.com/Utsho11/Toytopia.git">
                                <button className="btn my-4 btn-outline text-black mr-8"><FaGithub></FaGithub>GitHub Code</button></Link>
                            <Link to="https://toy-shop-f0cfd.web.app/">
                                <button className="btn my-4 btn-outline text-black"><FaBroadcastTower></FaBroadcastTower>Live Site</button></Link>
                        </div>
                </div>
        </div>
    );
};

export default Toyotopia;