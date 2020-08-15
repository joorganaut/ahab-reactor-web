import React from 'react';
// import './App.css';
import { ThemeProvider } from 'styled-components/macro';
import { theme, GlobalStyle } from './styles/global';
import { Router } from './routes'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Router />
    </ThemeProvider>
  );
}

export default App;
