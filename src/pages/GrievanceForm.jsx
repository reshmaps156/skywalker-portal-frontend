import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import { motion } from 'framer-motion';
import globe from '../assets/glob.mp4'

function GrievanceForm() {
  return (
    <section style={{ backgroundColor: '#000000', height: '100vh' }} >
      <Container className=" text-white ">
        <motion.h1
          className="text-center display-6 text-warning pt-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Share your concerns
        </motion.h1>
        <motion.p
          style={{ color: 'grey' }}
          className="text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Your voice matters. Let us help you address your issues.
        </motion.p>

        <div className=" p-4 rounded-0 " >
          <Row>
            <Col md={6}>
              <motion.form
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="my-3 d-flex flex-column px-3">
                  <label className="mb-1">What is your name?</label>
                  <TextField
                    variant="standard"
                    color="warning"
                    focused
                    sx={{ input: { color: 'white' } }}
                  />
                </div>
                <div className="my-3 d-flex flex-column px-3">
                  <label className="mb-1">What is your email?</label>
                  <TextField
                    variant="standard"
                    color="warning"
                    focused
                    sx={{ input: { color: 'white' } }}
                  />
                </div>
                <div className="my-3 d-flex flex-column px-3">
                  <label className="mb-1">Subject</label>
                  <TextField
                    variant="standard"
                    color="warning"
                    focused
                    sx={{ input: { color: 'white' } }}
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
                    inputProps={{ style: { color: "white" } }}
                  />
                </div>
                <div className='px-3 pb-3 mt-4'><button className='btn btn-warning w-100'>Submit</button></div>
              </motion.form>
            </Col>
            <Col md={6}>

              <motion.div
                initial={{ opacity: 0, x: 50 ,scale:0.5}}
                whileInView={{ opacity: 1, x: 0 ,scale:1}}
                transition={{ duration: 0.6 }}
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
