import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TestPage from './TestPage';
import HomePage from './homePage';
import ResultsPage from './ResultsPage';

const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/TestPage" component={TestPage} />
        <Route path="/ResultsPage" component={ResultsPage} />
    </Switch>
)

export default Main;