import './App.css';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useContext, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { AuthContext } from './context/AuthContext';

function App() {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette:{
      mode: mode
    },
  });

  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute =({children}) => {
    if (!currentUser) {
      return <Navigate to='/login'/>
    }
    return children
  }

  return (
    <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute><Home setMode={setMode} mode={mode}/></ProtectedRoute>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
