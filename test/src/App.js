import React, {useCallback, useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Checkbox, Typography, CssBaseline, Button}  from  '@mui/material';
import CardsContainer from './components/CardsContainer/CardsContainer'
import ApplicationProvider from './context/ApplicationContext';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DataGridContainer from './components/DataGridContainer/DataGridContainer'

const App = () => {
  const  [prefersDarkMode, setThemeMode] = useState(true);
  const navigate = useNavigate()
  const [userLogState, setBtnState] = useState({text: 'Check User Logs',userLogs: false})

  const light = {
    palette: {
      mode: "light",
      selected: 'blue'
    },
  };

  const dark = {
    palette: {
      mode: "dark",
      selected: 'red'
    },
  };

  const handleChangeCheck = (event) => {
    setThemeMode(event.target.checked);
  };

  const checkUserLogs = useCallback(() => {
    if(userLogState.userLogs) {
      navigate('/userLogs')
      setBtnState({
        text: 'Back',
        userLogs: !userLogState.userLogs
      })
    } else {
      navigate('/')
      setBtnState({
        text: 'Check User Logs',
        userLogs: !userLogState.userLogs
      })
    }

  },[navigate, userLogState])

  return (
    <>
      <ApplicationProvider>
      <ThemeProvider theme={prefersDarkMode ? createTheme(dark) : createTheme(light)}>
        <CssBaseline />
        <div className="App">
          <Checkbox
            checked={prefersDarkMode}
            onChange={handleChangeCheck}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          /> 
          Theme Change {prefersDarkMode ? 'dark' : 'light'}
          <Button variant="contained" onClick={checkUserLogs}>{userLogState.text}</Button>
          <Typography variant="h4" align='center' component="h2">
            Endpoints Manager
          </Typography>
          <Typography variant="h5" mt={2} ml={5} component="h2">
            Available endpoints
          </Typography>
          <Routes>
            <Route path='/' element={<CardsContainer/>} />
            <Route path='/userLogs' element={<DataGridContainer/>} />
          </Routes>
        </div>
      </ThemeProvider>
      </ApplicationProvider>
    </>

  );
}

export default App;
