import React from 'react';
import Header from 'src/components/header';
import Main from 'src/routes/main';
import 'src/styles/main.scss';
import styles from './app.scss';

const title = 'My Minimal React Webpack Babel Setup';

export default () =>
    <div className={styles['flexParent']}>
        <div className={styles['flexGrow'] + ' ' + styles['row']}>
            <div style={{width: '100%'}}>
                <Header />
                <Main />
            </div>
        </div>
    </div>;