import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import appStyle from '../appStyle.module.css'

function Header() {
    return (
        <>
            <Navbar className="p-3">
                <Container>
                    <Navbar.Brand href="#home" style={{color:'#fff'}}>
                    <FontAwesomeIcon icon={faJedi} className={`${appStyle.goldText} me-2`} size='xl'/>   
                    Skywalker Portal
                    </Navbar.Brand>
                </Container>
            </Navbar>

        </>
    )
}

export default Header