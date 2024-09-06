import React from 'react'
import Header from '../layout/Header'
import { Col, Row } from 'react-bootstrap'
import skywalkerImage from '../assets/skywalker-image.png'
import { motion } from 'framer-motion'
import './home.css'


function Home() {
    const superpowers = [
        { title: 'Telekinesis', description: 'Move objects with the mind, handling multiple tasks with ease.' },
        { title: 'Energy Manipulation', description: 'Control and channel energy to create shields, blasts, or heal injuries.' },
        { title: 'Flight', description: 'Swiftly travel to any location, addressing grievances at lightning speed.' },
        { title: 'Invisibility', description: 'Blend into surroundings for covert investigations and stealth operations.' },
        { title: 'Enhanced Perception', description: 'Heightened senses that detect lies, uncover hidden details, and see through deceit.' },
        { title: 'Super Strength', description: 'Exceptional physical strength, capable of overcoming any obstacle.' },
        
    ];

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

                            <motion.button className='btn btn-warning mt-3 rounded-0' initial={{ y: '100%' }} whileInView={{ y: 0 }} exit={{ y: '-100%' }} transition={{ duration: 1 }}>
                            File a Grievance
                            </motion.button>
                        </div>
                    </Col>

                    <Col md={6} sm={12} className='mt-5 d-flex align-items-center justify-content-center '>
                        <img src={skywalkerImage} alt="" className='w-100' />
                    </Col>
                </Row>
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