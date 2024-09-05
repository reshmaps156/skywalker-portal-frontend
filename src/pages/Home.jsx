import React from 'react'
import Header from '../layout/Header'
import { Col, Row } from 'react-bootstrap'
import skywalkerImage from '../assets/skywalker-image.png'
import { motion } from 'framer-motion'



function Home() {
    return (
        <>
            <Header />
            <section >
                <Row className='m-5  p-5' >
                    <Col md={6} sm={12} className='mt-5 d-flex align-items-center justify-content-center'>
                        <div>
                            <motion.h1 style={{ color: '#D3D3D3' }} initial={{ x: '-20%' }} animate={{ x: 0 }} exit={{ x: '20%' }} transition={{ duration: 1 }}>
                                Skywalker's Light, Your Peaceful Voice
                            </motion.h1>

                            <motion.p className='text-secondary' initial={{ x: '20%' }} animate={{ x: 0 }} exit={{ x: '-20%' }} transition={{ duration: 1 }}>
                                Welcome to Skywalker Portal, where calm and clarity meet. Here, your voice is a powerful tool for creating a harmonious world. Share your thoughts and concerns in a space designed for understanding and support.
                            </motion.p>

                            <motion.button className='btn btn-warning mt-3 rounded-0' initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }} transition={{ duration: 1 }}>
                                Get started
                            </motion.button>
                        </div>
                    </Col>

                    <Col md={6} sm={12} className='mt-5 d-flex align-items-center justify-content-center '>
                        <img src={skywalkerImage} alt="" className='w-100' />
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Home