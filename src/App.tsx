import React from 'react';
// import './App.css';
import { ThemeProvider } from 'styled-components/macro';
import { theme, GlobalStyle } from './styles/global';
import { Router } from './routes';
import { ModalProvider } from 'styled-react-modal';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <GlobalStyle />
        <Router />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
