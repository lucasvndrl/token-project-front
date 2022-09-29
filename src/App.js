import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import AppTopBar from './components/AppBar';
import { createTheme, ThemeProvider } from '@mui/material';
import Routes from './router';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9F00FF',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider  theme={theme}>
        <AppTopBar />
        <Button variant="outlined">Hello MUI!</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
