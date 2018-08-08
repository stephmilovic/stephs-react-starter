import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Roster from 'src/components/roster';
import Home from 'src/components/home';
import Schedule from 'src/components/schedule';

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/roster" component={Roster}/>
            <Route path="/schedule" component={Schedule}/>
        </Switch>
    </main>
);

export default Main;