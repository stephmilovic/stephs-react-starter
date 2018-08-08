import React from 'react';
import styles from './header.scss';
import { Link } from 'react-router-dom';

export default () => (
    <header className={styles['main-nav']}>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/roster">Roster</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
            </ul>
        </nav>
    </header>
);