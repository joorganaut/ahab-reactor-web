import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CustomerRouter from './customerRouter';
import HomeRouter from './homeRouter';
import UserRouter from './userRouter';
export const Router = () => {
    return(
    <BrowserRouter>
    <Switch>
        <Route path="/customer">
            <CustomerRouter/>
        </Route>
        <Route path="/user">
            <UserRouter/>
        </Route>
        <Route path="/">
            <HomeRouter />
        </Route>
    </Switch>
    </BrowserRouter>
    );
}