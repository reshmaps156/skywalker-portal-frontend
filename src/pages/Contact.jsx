import React from 'react';
import TextField from '@mui/material/TextField';
import fog from '../assets/fog.png';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className='row mt-5 d-flex justify-content-center' >
      <motion.h2 
        className='display-4 text-center text-secondary mb-5'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h2>

      <motion.div
        className="col-md-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ maxWidth: '400px' }} className='p-4'>
          <div className='mb-5'>
            <TextField 
              id="standard-basic" 
              className='w-100' 
              placeholder='Name' 
              variant="standard" 
              color='warning' 
              focused  
              InputProps={{
                sx: {
                  color: 'white',
                  '& .MuiSvgIcon-root': {
                    color: 'grey',
                  }
                },
              }}
            />
          </div>
          <div className='mb-5'>
            <TextField 
              id="standard-basic" 
              className='w-100'  
              variant="standard"  
              color='warning' 
              focused
              placeholder='Email'
              InputProps={{
                sx: {
                  color: 'white',
                  '& .MuiSvgIcon-root': {
                    color: 'grey',
                  }
                },
              }}
            />
          </div>
          <div className='mb-5'>
            <TextField 
              id="standard-basic" 
              className='w-100'  
              variant="standard"  
              color='warning'
              multiline
              placeholder='Message'
              rows={2}
              focused 
              InputProps={{
                sx: {
                  color: 'white',
                  '& .MuiSvgIcon-root': {
                    color: 'grey',
                  }
                },
              }}
            />
          </div>
          <div className='mb-5'>
            <motion.button 
              className='btn btn-warning w-100'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="col-md-5"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={fog} alt="Background fog" className='w-100' />
      </motion.div>
    </div>
  );
}

export default Contact;
