import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignUp, LoginByGoogle } from '../components/user';


const UserRouter = () => (
    <Switch>
        <Route exact path='/user' component={SignUp}/>
        <Route path='/user/google' component={LoginByGoogle}/>
    </Switch>
)
export default UserRouter