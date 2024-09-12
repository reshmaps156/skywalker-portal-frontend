import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import { motion } from 'framer-motion';
import globe from '../assets/glob.mp4';
import { grievanceSubmitApi } from '../services/api';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MenuItem from '@mui/material/MenuItem';


function GrievanceForm() {
  const [formDetails, setFormDetails] = useState({
    username: '',
    email: '',
    mobileNumber: '',
    subject: '',
    priority: '',
    grievanceDetails: '',
    submitTime: ''
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
    return isValidNumber;
  };

  const handleChange = (field, value) => {
    setFormDetails((prevDetails) => ({ ...prevDetails, [field]: value }));

    if (field === 'email') validateEmail(value);
    if (field === 'mobileNumber') validateMobile(value);
  };

  const handleSubmitForm = async () => {
    const { username, email, mobileNumber, subject, grievanceDetails } = formDetails;

    // Check for empty fields
    if (!username || !email || !mobileNumber || !subject || !grievanceDetails) {
      toast.info('Fill out the form to continue');

    } else {
      if (!emailError && !mobileError) {
        setIsValidate(true);
        const submissionTime = new Date().toISOString();

        //adding the time of submission to the request body
        const reqBody = { ...formDetails, submitTime: submissionTime };

        try {
          const response = await grievanceSubmitApi(reqBody)
          console.log(response);
          if (response?.status == 201) {
            toast.success('Request submitted')
          }
        } catch (error) {
          toast.error('Failed to submit grievance. Please try again.');
        }
        setFormDetails({
          username: '',
          email: '',
          mobileNumber: '',
          subject: '',
          grievanceDetails: '',
          submitTime: ''
        })
      } else {
        setIsValidate(false);
        toast.warning('Please correct the errors before submitting');
      }
    }



  };


  return (
    <>
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
            className="text-center mb-1 text-secondary"
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
                  <div className="mb-2 d-flex flex-column px-5">
                    <label className="mb-1 text-secondary" for='name'>Name</label>
                    <TextField
                      id='name'
                      variant="standard"
                      color="warning"
                      focused
                      sx={{ input: { color: 'white' } }}
                      value={formDetails.username}
                      onChange={(e) => handleChange('username', e.target.value)}
                    />
                  </div>
                  <div className="mb-2 d-flex flex-column px-5">
                    <label className="mb-1 text-secondary" for='mail'>Email</label>
                    <TextField
                      id='mail'
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
                  <div className="mb-2 d-flex flex-column px-5">
                    <label className="mb-1 text-secondary" for='mob'>Mobile</label>
                    <TextField
                      id='mob'
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
                  <div className="mb-2 d-flex flex-column px-5">
                    <label className="mb-1 text-secondary " for='sub' >Subject</label>
                    <TextField
                      id='sub'
                      variant="standard"
                      color="warning"
                      // label="subject"
                      focused
                      sx={{ input: { color: 'white' } }}
                      value={formDetails.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                    />
                  </div>
                  <div className="mb-2 d-flex flex-column px-5">
                  <label className="mb-1 text-secondary" for='sub'>Priority</label>
                    <TextField
                      id="standard-select-currency"
                      select
                      focused
                      value={formDetails.priority}
                      variant="standard"
                      color="warning"
                      onChange={(e) => handleChange('priority', e.target.value)}
                      InputProps={{
                        sx: {
                          color: 'white',
                          '& .MuiSvgIcon-root': {
                            color: 'grey',
                          }
                        },
                      }}
                   
                    >
                       <MenuItem value={'High'} >High</MenuItem>
                        <MenuItem value={"Medium"}>Medium</MenuItem>
                        <MenuItem value={'Low'}>Low</MenuItem>
                    </TextField>
                  </div>



                  <div className="mb-2 d-flex flex-column px-5">
                    <label className="mb-1 text-secondary" for='issue'>Describe your issue</label>
                    <TextField
                      id='issue'
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
                  <div className='px-5 pb-3 mt-4'>
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
      <ToastContainer position='top-center' transition={Zoom} theme='dark' autoClose={1000} />
    </>
  );
}

export default GrievanceForm;
