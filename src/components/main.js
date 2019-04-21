import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TestPage from './TestPage';
import HomePage from './homePage';

const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/testPage" component={TestPage} />
    </Switch>
)

export default Main;