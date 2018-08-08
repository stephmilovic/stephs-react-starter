import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullRoster from 'components/full-roster';
import Player from 'components/player';

export default () => (
    <Switch>
        <Route exact path="/roster" component={FullRoster}/>
        <Route path="/roster/:number" component={Player}/>
    </Switch>
);