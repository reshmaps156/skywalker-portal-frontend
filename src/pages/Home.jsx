import React from 'react'
import Header from '../layout/Header'
import { Col, Row } from 'react-bootstrap'
import skywalkerImage from '../assets/skywalker-image.jpg'
import { animate, motion } from 'framer-motion'



function Home() {
    return (
        <>
            <Header />
            <Row className='m-5  p-5' >
                <Col md={6} sm={12} className='mt-5'>
                    <motion.h1 style={{ color: '#D3D3D3' }} initial={{x:'-20%'}} animate={{x:0}} exit={{x:'20%'}} transition={{duration:1}}>
                        Skywalker’s Light, Your Peaceful Voice
                    </motion.h1>
                    <motion.p className='text-secondary' initial={{x:'20%'}} animate={{x:0}} exit={{x:'-20%'}} transition={{duration:1}}>Welcome to Skywalker Portal, where calm and clarity meet. As Skywalker guides us with wisdom, your voice helps shape a more peaceful world. Share your thoughts and concerns in a supportive space</motion.p>
                    <motion.button className='btn btn-warning mt-3'initial={{y:'100%'}} animate={{y:0}} exit={{y:'-100%'}} transition={{duration:1}}>Get started</motion.button>
                </Col>
                <Col md={6} sm={12} className='mt-5'>
                    <img src={skywalkerImage} alt="" className='w-100' />
                </Col>
            </Row>
        </>
    )
}

export default Home