import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ContextManager from './services/contextManager';
import { ToastContainer } from 'react-toastify';
import initI18N from './i18n';
const boot = async () => {
  await initI18N();
  ReactDOM.render(
    <React.StrictMode>
      <ContextManager>
        <App />
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ContextManager>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
boot();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
