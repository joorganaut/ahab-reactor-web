import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/common/form';
import LoginViewModel from './models/user/login/loginViewModel';
import LoginModel from './models/user/login/loginModel';
function App() {
  return (
    <Form Model={{}} ViewModel={new LoginViewModel(new LoginModel())}></Form>
  );
}

export default App;
