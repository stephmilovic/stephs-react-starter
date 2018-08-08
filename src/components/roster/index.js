import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullRoster from 'src/components/full-roster';
import Player from 'src/components/player';

export default () => (
    <Switch>
        <Route exact path="/roster" component={FullRoster}/>
        <Route path="/roster/:number" component={Player}/>
    </Switch>
);