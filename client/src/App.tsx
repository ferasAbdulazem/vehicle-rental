import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SWRConfig } from 'swr';
import fetcher from './lib/data/fetcher';
import Customers from './pages/Customers';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <SWRConfig value={{
        fetcher,
        revalidateOnFocus: false,
      }}
      >
        <Routes>
          <Route index element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
