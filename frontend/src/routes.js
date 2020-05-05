import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from  './pages/Login';
import Register from './pages/Register';
import Questionnaire from './pages/Questionnaire';
import Records from './pages/Records';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/questionnaire" component={Questionnaire} />
                <Route path="/" exact component={Records} />
            </Switch>
        </BrowserRouter>
    );
}