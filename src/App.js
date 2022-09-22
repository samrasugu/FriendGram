import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette:{
      mode: mode
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home  setMode={setMode} mode={mode}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
