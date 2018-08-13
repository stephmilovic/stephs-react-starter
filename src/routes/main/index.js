import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Weather from 'src/components/weather/WeatherView';
import styles from './main.scss';

const Main = () => (
    <main className={styles['main']}>
        <h1>Weather</h1>
        <Switch>
            <Route exact path="/" component={Weather}/>
        </Switch>
    </main>
);

export default Main;