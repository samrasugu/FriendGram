import { Box, Button, TextField, Typography } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin = async (e) => {
        e.preventDefault();
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
            // ////// IMPLEMENT SWITCH AND SHOW ERROR
        }
    };
    
  return (
    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", margin: "30px"}}>
            <Typography variant="h1" component="h2" sx={{fontSize: "30px"}}>FriendGram</Typography>
            <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} size='small' variant='outlined' sx={{margin: '10px' }}/>
            <TextField label="Password" value={password} onChange={e => setPassword(e.target.value)} size='small' variant='outlined' sx={{margin: '10px' }}/>
            <Button onClick={handleSignin} variant='contained' sx={{margin: "10px"}}>SIGN IN</Button>
            <Typography>New here? <Link to="/signup">Register</Link></Typography>
        </Box>
    </Box>
  )
}

export default Login