import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
