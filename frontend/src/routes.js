import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from  './pages/Login';
import Register from './pages/Register';
import Questionnaire from './pages/Questionnaire';
import Records from './pages/Records';
import NewRecord from './pages/NewRecord';
import PassReset from './pages/PassReset';
import Report from './pages/Report';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/questionnaire" component={Questionnaire} />
                <Route path="/" exact component={Records} />
                <Route path="/records/new" component={NewRecord} />
                <Route path="/pass-reset" component={PassReset} />
                <Route path="/report" component={Report} />
            </Switch>
        </BrowserRouter>
    );
}