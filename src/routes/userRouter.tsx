import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignUp } from '../components/user';

const UserRouter = () => (
    <Switch>
        <Route exact path='/user' component={SignUp}/>
    </Switch>
)
export default UserRouter