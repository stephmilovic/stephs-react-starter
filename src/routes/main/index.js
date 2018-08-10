import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Roster from 'src/routes/roster';
import Home from 'src/components/home';
import Schedule from 'src/components/schedule/ScheduleView';
import styles from './main.scss';

const Main = () => (
    <main className={styles['main']}>
        <h1>Chicago White Sox</h1>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/roster" component={Roster}/>
            <Route path="/schedule" component={Schedule}/>
        </Switch>
    </main>
);

export default Main;