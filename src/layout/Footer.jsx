import React from 'react';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faFacebook, faInstagram, faThreads, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';



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

                    {/* Links */}
                    <div className="col-md-1"></div>
                    <div className='col-md-3 p-3'>
                        <h5 className='text-warning mb-3'>Quick Links</h5>
                        <ul className='list-unstyled'>
                            <li className='mb-2'><Link to={'/'} className='text-secondary text-decoration-none '>Home</Link></li>
                            <li className='mb-2'><Link to={'/about'} className='text-secondary text-decoration-none '> About</Link></li>
                            <li className='mb-2'><Link to={'/grievance'} className='text-secondary text-decoration-none'>Grievances</Link></li>
                            <li className='mb-2'><Link to={'/contact'} className='text-secondary text-decoration-none'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className='col-md-4 p-3'>
                        <h5 className='text-warning mb-3'>Follow Us</h5>
                        <Link className='text-secondary me-3'>
                            <FontAwesomeIcon icon={faFacebook} size='xl' />
                        </Link>
                        <Link className='text-secondary me-3'>
                            <FontAwesomeIcon icon={faXTwitter} size='xl' />
                        </Link>
                        <Link className='text-secondary  me-3'>
                            <FontAwesomeIcon icon={faInstagram} size='xl' />
                        </Link>
                        <Link className='text-secondary  me-3'>
                            <FontAwesomeIcon icon={faYoutube} size='xl' />
                        </Link>
                        <Link className='text-secondary  me-3'>
                            <FontAwesomeIcon icon={faThreads} size='xl' />
                        </Link>
                    </div>
                </div>

                {/* Copy right section */}
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
