import { ThemeProvider } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SWRConfig } from 'swr';
import fetcher from './lib/data/fetcher';
import Home from './pages/Home';
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
        </Routes>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
