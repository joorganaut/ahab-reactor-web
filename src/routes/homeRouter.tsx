import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/user';
import DashBoard from '../components/home';

const HomeRouter = () => (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/dashboard' component={DashBoard}/>
    </Switch>
)
export default HomeRouter