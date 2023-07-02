import React, { useRef } from 'react';
import './Contact.css'
import contact from '../../assets/image/Contact.jpg'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y5xh1r5', 'template_16vcdco', form.current, 'Tks9ry0NQ6L3S9c2A')
            .then((result) => {
                console.log(result);
                if (result.text === "OK") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully message sent',
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      })
                      form.current.reset()
                }
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='mb-16'>
            <Helmet>
                <title>UTSHO | Contact</title>
            </Helmet>
            <h1 className='text-center text-5xl font-bold pt-20 mb-16'>📧 Connect with Me 📧</h1>
            <div className='lg:flex gap-12'>
                <div data-aos="fade-right" className='w-full lg:w-1/2 my-8'>
                    <img className='mx-auto lg:mx-16 mask mask-squircle w-2/3 lg:w-full' src={contact} alt="" />
                </div>
                <form data-aos="fade-left" ref={form} onSubmit={sendEmail} className='w-1/2'>
                    <h2 className='text-3xl font-semibold'>📧 Contact me 📧</h2>
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="user_name" required></input>
                    </div>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="user_email" required></input>
                    </div>
                    <div className="form-group">
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button className="button-contact" type="submit">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default Contact;