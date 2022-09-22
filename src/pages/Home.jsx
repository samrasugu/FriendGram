import { Box, Stack } from '@mui/material'
import React from 'react'
import Add from '../components/Add'
import Feed from '../components/Feed'
import Navbar from '../components/Navbar'
import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'

const Home = ({mode, setMode}) => {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar  setMode={setMode} mode={mode}/>
            <Feed/>
            <Rightbar/>
            <Add/>
        </Stack>
    </Box>
  )
}

export default Home