import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import appStyle from '../appStyle.module.css'

function Header() {
    return (
        <>
            <Navbar className={`${appStyle.pageBg} p-4 `}>
                <Container>
                    <Navbar.Brand href="#home" style={{ color: '#D3D3D3' }}>
                    <FontAwesomeIcon icon={faJedi} className={`${appStyle.goldText} me-2`} size='xl'/>   
                    Skywalker Portal
                    </Navbar.Brand>
                </Container>
            </Navbar>

        </>
    )
}

export default Header