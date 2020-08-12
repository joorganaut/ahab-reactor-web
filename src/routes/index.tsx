import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CustomerRouter from './customerRouter';
export default function Routes (){
    return(
    <BrowserRouter>
    <Switch>
        <Route>
            <CustomerRouter/>
        </Route>
    </Switch>
    </BrowserRouter>
    );
}