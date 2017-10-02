import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import One from './components/One/One';

export default(
    <Switch>
        <Route exact component={Home} path='/' />
        <Route component={One} path='/one' />
    </Switch>
)