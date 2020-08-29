import React from 'react';
// import './App.css';
import { ThemeProvider } from 'styled-components/macro';
import { theme, GlobalStyle } from './styles/global';
import { Router } from './routes';
import { ModalProvider } from 'styled-react-modal';
import ContextManager from './services/contextManager'
function App() {
  return (
    <ContextManager>
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <GlobalStyle />
        <Router />
      </ModalProvider>
    </ThemeProvider>
    </ContextManager>
  );
}

export default App;
