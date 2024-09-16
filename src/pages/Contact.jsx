import React from 'react'
import TextField from '@mui/material/TextField';
function Contact() {
    return (
        <div className='row  mt-5' >
            <div className="col-md-6">

            </div>
            <div className="col-md-6  ">
                <div className='bg-secondary  p-5'>
                    <div className='mb-3 '>
                        <TextField id="standard-basic" label="Your Name" variant="standard" color='warning' focused  InputProps={{
                        sx: {
                          color: 'white',
                          '& .MuiSvgIcon-root': {
                            color: 'grey',
                          }
                        },
                      }}/>
                    </div>
                    <div className='mb-3'>
                        <TextField id="standard-basic" label="Your Email" variant="standard"  color='warning' focused InputProps={{
                        sx: {
                          color: 'white',
                          '& .MuiSvgIcon-root': {
                            color: 'grey',
                          }
                        },
                      }}/>
                    </div>
                    <div className='mb-3'>
                        <TextField id="standard-basic" label="Share your thoughts" variant="standard"  color='warning' focused InputProps={{
                        sx: {
                          color: 'white',
                          '& .MuiSvgIcon-root': {
                            color: 'grey',
                          }
                        },
                      }}/>
                    </div>
                    <div className='mb-3'>
                       <button className='btn btn-warning'>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact