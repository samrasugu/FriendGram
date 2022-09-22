import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
    const [err, setErr] = useState(false);

    const [firstname, setFName] = useState('');
    const [lastname, setLName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            console.log(res.user);

            await updateProfile(res.user,{
                displayName: username,
              });
            await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                firstname,
                lastname,
                displayName: username,
                email,
            });
  
            //   await setDoc(doc(db,"userChats",res.user.uid),{});
  
              navigate("/");
        } catch (error) {
            
        }
    }
  return (
    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", margin: "30px"}}>
            <Typography variant="h1" component="h2" sx={{fontSize: "30px"}}>FriendGram</Typography>
            <TextField label="First Name" value={firstname} onChange={e => setFName(e.target.value)} size='small' variant='outlined' sx={{margin: '10px' }}/>
            <TextField label="Last Name" value={lastname} onChange={e => setLName(e.target.value)} size='small' variant='outlined' sx={{margin: '10px' }}/>
            <TextField label="Username" value={username} onChange={e => setUsername(e.target.value)} size='small' variant='outlined' sx={{margin: '10px' }}/>
            <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} size='small' variant='outlined' sx={{margin: '10px' }}/>
            <TextField label="Password" value={password} onChange={e => setPassword(e.target.value)} size='small' variant='outlined' sx={{margin: '10px' }}/>
            <Button onClick={handleSignup} variant='contained' sx={{margin: "10px"}}>SIGN UP</Button>
            <Typography>Have an account? <Link to="/login">Login</Link></Typography>
        </Box>
    </Box>
  )
}

export default Signup