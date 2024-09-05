import React from 'react';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faFacebook, faInstagram, faThreads, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <footer className=' text-secondary p-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 p-3'>
                        <div className='d-flex align-items-center mb-3'>
                            <FontAwesomeIcon icon={faJedi} size='2x' className='text-warning me-3' />
                            <h5 className='text-white'>Skywalker Portal</h5>
                        </div>
                        <p style={{ textAlign: 'justify' }}>Your gateway to the Force, where justice and peace are upheld. Discover more about Alden Skywalker and stay updated with the latest news and insights</p>
                    </div>
                    <div className="col-md-1"></div>
                    <div className='col-md-3 p-3'>
                        <h5 className='text-warning mb-3'>Quick Links</h5>
                        <ul className='list-unstyled'>
                            <li className='mb-2'><a href='/' className='text-secondary text-decoration-none '>Home</a></li>
                            <li className='mb-2'><a href='/about' className='text-secondary text-decoration-none'>About</a></li>
                            <li className='mb-2'><a href='/login' className='text-secondary text-decoration-none'>Login</a></li>
                            <li className='mb-2'><a href='/contact' className='text-secondary text-decoration-none'>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className='col-md-4 p-3'>
                        <h5 className='text-warning mb-3'>Follow Us</h5>
                        <a className='text-secondary me-3'>
                            <FontAwesomeIcon icon={faFacebook} size='xl' />
                        </a>
                        <a className='text-secondary me-3'>
                            <FontAwesomeIcon icon={faXTwitter} size='xl' />
                        </a>
                        <a className='text-secondary  me-3'>
                            <FontAwesomeIcon icon={faInstagram} size='xl' />
                        </a>
                        <a className='text-secondary  me-3'>
                            <FontAwesomeIcon icon={faYoutube} size='xl' />
                        </a>
                        <a className='text-secondary  me-3'>
                            <FontAwesomeIcon icon={faThreads} size='xl' />
                        </a>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12 text-center'>
                        <p className='text-secondary mb-0'>Copyright © {new Date().getFullYear()}  Skywalker. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
