import React, { useEffect, useState } from 'react'
import Header from '../layout/Header'
import { Col, Row } from 'react-bootstrap'
import skywalkerImage from '../assets/skywalker-image.png'
import './home.css'
import { motion, useAnimation } from 'framer-motion';



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
                <div  className=" position-relative">
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



        </>
    )
}

export default Home