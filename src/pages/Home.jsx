import React, { useEffect, useState } from 'react'
import Header from '../layout/Header'
import { Col, Row } from 'react-bootstrap'
import skywalkerImage from '../assets/skywalker-image.png'
import './home.css'
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'



function Home() {
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);
    const superpowers = [
        { title: 'Telekinesis', description: 'Move objects with the mind, handling multiple tasks with ease.' },
        { title: 'Energy Manipulation', description: 'Control and channel energy to create shields, blasts, or heal injuries.' },
        { title: 'Flight', description: 'Swiftly travel to any location, addressing grievances at lightning speed.' },
        { title: 'Invisibility', description: 'Blend into surroundings for covert investigations and stealth operations.' },
        { title: 'Enhanced Perception', description: 'Heightened senses that detect lies, uncover hidden details, and see through deceit.' },
        { title: 'Super Strength', description: 'Exceptional physical strength, capable of overcoming any obstacle.' },

    ];
    const testimonials = [
        {
            id: 1,
            name: 'Sheldon Cooper',
            text: "I've never experienced such an efficient grievance process. Skywalker's approach is both compassionate and effective. I'm truly grateful for the help I received.",
            image: 'https://beatlemedo.wordpress.com/wp-content/uploads/2013/04/jim_parsons_by_ninaavdeenko.jpg',
        },
        {
            id: 2,
            name: ' Bernadette',
            text: "Skywalker helped me resolve my issue faster than I could have imagined. The process was smooth, and I felt heard throughout the entire experience.",
            image: 'https://retroeyeworks.wordpress.com/wp-content/uploads/2014/06/635127684105530000.jpg',
        },
        {
            id: 3,
            name: 'George Cooper',
            text: "From start to finish, the entire process was seamless. I felt supported, and my issue was resolved promptly. Skywalker's team is top-notch!",
            image: 'https://ntvb.tmsimg.com/assets/assets/1046299_v9_bc.jpg',
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                controls.start({
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.75 }
                });
            }, 500);

            return () => clearTimeout(timer);
        } else {
            controls.start({
                opacity: 0,
                y: 50,
                transition: { duration: 0.75 }
            });
        }
    }, [isVisible, controls]);


    return (
        <>
            <Header />

            {/* Hero */}
            <section >
                <Row className='m-5  p-5' >
                    <Col md={6} sm={12} className='mt-5 d-flex align-items-center justify-content-center'>
                        <div>
                            <motion.h1 style={{ color: '#D3D3D3' }} initial={{ x: '-20%' }} whileInView={{ x: 0 }} exit={{ x: '20%' }} transition={{ duration: 1 }}>
                                Skywalker's Light, Your Peaceful Voice
                            </motion.h1>

                            <motion.p className='text-secondary' initial={{ x: '20%' }} whileInView={{ x: 0 }} exit={{ x: '-20%' }} transition={{ duration: 1 }}>
                                Welcome to Skywalker Portal, where calm and clarity meet. Here, your voice is a powerful tool for creating a harmonious world. Share your thoughts and concerns in a space designed for understanding and support.
                            </motion.p>

                            <motion.button className='btn btn-outline-warning mt-3 rounded-0 py-2' initial={{ y: '100%' }} whileInView={{ y: 0 }} exit={{ y: '-100%' }} transition={{ duration: 1 }}>
                                File a Grievance
                            </motion.button>
                        </div>
                    </Col>

                    <Col md={6} sm={12} className='mt-5 d-flex align-items-center justify-content-center '>
                        <img src={skywalkerImage} alt="" className='w-100' />
                    </Col>
                </Row>
            </section>

            {/* Indro Section */}
            <section>
                <div className=" position-relative">
                    <img
                        src="https://pixelz.cc/wp-content/uploads/2018/07/star-wars-battlefront-2-kylo-ren-uhd-4k-wallpaper.jpg"
                        alt="Alden Skywalker Intro"
                        className="intro-image"
                    />
                    <motion.div className="intro-overlay d-flex flex-column justify-content-center align-items-start" animate={controls}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-8 col-lg-6">
                                    <h3 className="intro-title text-warning">Alden Skywalker</h3>
                                    <p className="intro-description">
                                        Alden Skywalker is a legendary Jedi renowned for his extraordinary mastery of the Force and unwavering dedication to justice. Rising from a challenging past, he has become a symbol of hope and courage, using his remarkable skills to protect the galaxy and fight against evil. His journey from a humble beginning to a revered Jedi Knight showcases his resilience and commitment to the greater good.
                                    </p>
                                    <p className="intro-description">
                                        As a mentor and protector, Alden is deeply committed to guiding the next generation of heroes and resolving conflicts with empathy and strength. His legacy is built on acts of bravery and compassion, making him a beacon of light and a true champion for those in need.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* Purpose */}
            <section class=" py-5">
                <div class="container">
                    <div class="row align-items-center">
                        <motion.div class="col-lg-6 mt-5" initial={{ x: '-20%' }} whileInView={{ x: 0 }} exit={{ x: '20%' }} transition={{ duration: 2 }}>

                            <img src="https://clipart-library.com/images_k/star-wars-silhouette-art/star-wars-silhouette-art-24.png" alt="Purpose Image" class="img-fluid" />
                        </motion.div>
                        <motion.div class="col-lg-6 mt-5" initial={{ y: "50%" }} whileInView={{ y: '0' }} exit={{ y: '-50%' }} transition={{ duration: 1 }}>
                            <h2 class="display-4">Purpose of Our Grievance Platform</h2>
                            <p >
                                Our platform is dedicated to providing a voice to those who feel unheard.
                                By bridging the gap between superheroes and the community, we aim to resolve
                                grievances swiftly and fairly. Whether it's a concern, a suggestion, or a
                                complaint, your input helps us build a safer and better environment for everyone.
                            </p>
                            <a class="btn btn-outline-warning rounded-0 py-2 mt-3">File a Grievance</a>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Super powers */}
            <section className="superpowers-section text-white text-center py-5">
                <div className="container">
                    <h3 className="mb-5 display-4">Superpowers</h3>
                    <div className="row g-4">
                        {superpowers.map((power, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <motion.div
                                    className="power-card p-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <h4 className="mt-3">{power.title}</h4>
                                    <p>{power.description}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* testimonial */}
            <section className=' p-5'>
                <h1 className='text-center mb-5 display-4'>What People Say</h1>
                <div className='row justify-content-center'>
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            className='col-md-4 mb-4'
                            whileHover={{ scale: 1.05 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
                        >
                            <div className='card testimonial-card p-4 shadow-sm'>
                                <div className='d-flex align-items-center mb-3'>
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className='rounded-circle me-3 testimonial-image'
                                    />
                                    <h5 className='m-0'>{testimonial.name}</h5>
                                </div>
                                <p className='testimonial-text'>{testimonial.text}</p>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* News Letter */}
            <motion.section className="stay-connected-section py-5" initial={{opacity:'0.5'}} whileInView={{opacity:1}}>
                <div className="container text-center">
                    <motion.h2 className=" mb-3 display-4" initial={{x:'-20%'}} whileInView={{x:'0'}} exit={{x:'20%'}} transition={{duration:2}}>Stay Connected</motion.h2>
                    <motion.p className="section-subtitle mb-4 " initial={{x:'20%'}} whileInView={{x:'0'}} exit={{x:'-20%'}} transition={{duration:2}}>
                        Keep up with the latest updates, events, and community news. Sign up for our newsletter and follow us on social media to stay in the loop.
                    </motion.p>
                    <form className="newsletter-form mb-4">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                        />
                        <button className="btn btn-outline-warning rounded-0 ms-2">
                            Subscribe
                        </button>
                    </form>

                </div>
            </motion.section>

        </>
    )
}

export default Home