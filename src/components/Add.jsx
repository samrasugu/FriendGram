import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useContext, useState } from 'react';
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material';
import { AuthContext } from '../context/AuthContext';
import { arrayUnion, doc, Timestamp, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { v4 as uuid} from "uuid";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
});


const Add = () => {
  const [open, setOpen] = useState(false);

  const {currentUser} = useContext(AuthContext);

  const [text, setText] = useState('');
  const [img, setImg] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    await updateDoc(doc(db,"posts",currentUser.uid),{
        posts: arrayUnion({
            id: uuid(),
            text,
            date: Timestamp.now()
            // img
        })
    });
    setOpen(false);
  }

  return (
    <>
        <Tooltip onClick={e=>setOpen(true)} title="Add" sx={{position: "fixed", bottom: 20, left: {xs:"calc(50% - 25px)", md: 30}}}>
            <Fab color="primary" aria-label='add'>
                <AddIcon/>
            </Fab>
        </Tooltip>
        <StyledModal
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={200} bgcolor={"background.default"} color={"text.primary"} p={6} borderRadius={5}>
                <Typography id="modal-modal-title" variant="h6" color="gray" textAlign="center" component="h2">
                Create a post
                </Typography>
                <UserBox>
                    <Avatar alt="Remy Sharp" src={currentUser.photoURL} />
                    <Typography fontWeight={500} variant="span">
                        {currentUser.displayName}
                    </Typography>
                </UserBox>
                <TextField
                    sx={{width: "100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={1}
                    placeholder="What's on your mind?"
                    variant='standard'
                    onChange={e=>setText(e.target.value)}
                />
                <Stack direction="row" gap={1} mt={2} mb={3}>
                    <EmojiEmotions color='primary'/>
                    <Image color='seconday'/>
                    <VideoCameraBack color='success'/>
                    <PersonAdd color='error'/>
                </Stack>
                <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                    <Button onClick={handleSignup}>Post</Button>
                    <Button sx={{width: "100px"}}><DateRange/></Button>
                </ButtonGroup>
            </Box>
        </StyledModal>
    </>
  )
}

export default Add