import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import MailIcon from '@mui/icons-material/Mail';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
  });
  
  const Search = styled("div")(({theme})=>({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
  }));
  
  const Icons = styled(Box)(({theme})=>({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
      display: "flex"
    }
  }));
  
  const UserBox = styled(Box)(({theme})=>({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
      display: "none"
    }
  }));

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const {currentUser} = useContext(AuthContext);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display: {xs:"none", sm: "block"}}}>FriendGram</Typography>
        <Pets sx={{display: {xs:"block", sm: "none"}}}/>
        <Search><InputBase placeholder='Search...'/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon/>
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications/>
          </Badge>
          <Avatar sx={{width: 30, height: 30}} src={currentUser.photoURL}
          onClick={e=>setOpen(true)}
          />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar sx={{width: 30, height: 30}} src={currentUser.photoURL}/>
          <Typography variant='span'>SAM</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          top: "55px",
          right: "100px"
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={()=>signOut(auth)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar