import React from 'react'
import {Link} from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material'

const Signup = () => {
  return (
    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", margin: "30px"}}>
            <Typography variant="h1" component="h2" sx={{fontSize: "30px"}}>FriendGram</Typography>
            <TextField label="First Name" size='small' variant='outlined' sx={{margin: '10px' }}/>
            <TextField label="Last Name" size='small' variant='outlined' sx={{margin: '10px' }}/>
            <TextField label="Email" size='small' variant='outlined' sx={{margin: '10px' }}/>
            <TextField label="Password" size='small' variant='outlined' sx={{margin: '10px' }}/>
            <Button variant='contained' sx={{margin: "10px"}}>SIGN UP</Button>
            <Typography>Have an account? <Link to="/login">Login</Link></Typography>
        </Box>
    </Box>
  )
}

export default Signup