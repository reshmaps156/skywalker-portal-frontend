import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import { motion } from 'framer-motion';
import globe from '../assets/glob.mp4';
import { grievanceSubmitApi } from '../services/api';

function GrievanceForm() {
  
  const [formDetails, setFormDetails] = useState({
    username: '',
    email: '',
    mobileNumber: '',
    subject: '',
    grievanceDetails: ''
  });
  
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [isValidate, setIsValidate] = useState(false);
  
  const validateEmail = (email) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setEmailError(!isValidEmail);
    return isValidEmail;
  };

  const validateMobile = (mobile) => {
    const isValidNumber = /^\d{10}$/.test(mobile);
    setMobileError(!isValidNumber);
    return isValidNumber ;
  };

  const handleChange = (field, value) => {
    setFormDetails((prevDetails) => ({ ...prevDetails, [field]: value }));

    if (field === 'email') validateEmail(value);
    if (field === 'mobileNumber') validateMobile(value);
  };

  const handleSubmitForm =async () => {
    const { username, email, mobileNumber, subject, grievanceDetails } = formDetails;

    // Check for empty fields
    if (!username || !email || !mobileNumber || !subject || !grievanceDetails) {
      alert('Fill out the form to continue');
      
    }

   
    if (!emailError && !mobileError) {
      setIsValidate(true);
      const result = await grievanceSubmitApi(formDetails)
      console.log(result);
      
      setFormDetails({
        username: '',
        email: '',
        mobileNumber: '',
        subject: '',
        grievanceDetails: ''
      })
    } else {
      setIsValidate(false);
      alert('Please correct the errors before submitting');
    }
  };

  return (
    <section style={{ backgroundColor: '#000000' }}>
      <Container className="text-white">
        <motion.h1
          className="text-center display-6  pt-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Share your concerns
        </motion.h1>
        <motion.p
          style={{ color: 'grey' }}
          className="text-center mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Your voice matters. Let us help you address your issues.
        </motion.p>

        {/* Form */}
        <div className="p-4 rounded-0">
          <Row>
            <Col md={6}>
              <motion.form
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="my-3 d-flex flex-column px-3">
                  <label className="mb-1">Name</label>
                  <TextField
                    variant="standard"
                    color="warning"
                    focused
                    sx={{ input: { color: 'white' } }}
                    value={formDetails.username}
                    onChange={(e) => handleChange('username', e.target.value)}
                  />
                </div>
                <div className="my-3 d-flex flex-column px-3">
                  <label className="mb-1">Email</label>
                  <TextField
                    required
                    error={emailError}
                    helperText={emailError ? "Please enter a valid email" : ''}
                    variant="standard"
                    color="warning"
                    focused
                    sx={{ input: { color: 'white' } }}
                    value={formDetails.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                </div>
                <div className="my-3 d-flex flex-column px-3">
                  <label className="mb-1">Mobile</label>
                  <TextField
                    required
                    error={mobileError}
                    helperText={mobileError ? "Please enter a valid number" : ''}
                    variant="standard"
                    color="warning"
                    focused
                    sx={{ input: { color: 'white' } }}
                    value={formDetails.mobileNumber}
                    onChange={(e) => handleChange('mobileNumber', e.target.value)}
                  />
                </div>
                <div className="my-3 d-flex flex-column px-3">
                  <label className="mb-1">Subject</label>
                  <TextField
                    variant="standard"
                    color="warning"
                    focused
                    sx={{ input: { color: 'white' } }}
                    value={formDetails.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                  />
                </div>
                <div className="my-3 d-flex flex-column px-3">
                  <label className="mb-1">Describe your issue</label>
                  <TextField
                    variant="standard"
                    color="warning"
                    focused
                    multiline
                    rows={3}
                    value={formDetails.grievanceDetails}
                    inputProps={{ style: { color: 'white' } }}
                    onChange={(e) => handleChange('grievanceDetails', e.target.value)}
                  />
                </div>
                <div className='px-3 pb-3 mt-4'>
                  <button className='btn btn-warning w-100' type='button' onClick={handleSubmitForm}>Submit</button>
                </div>
              </motion.form>
            </Col>
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.5 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1 }}
                className="h-100 d-flex align-items-center justify-content-center"
              >
                <video src={globe} loop muted autoPlay className='w-100'></video>
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default GrievanceForm;
