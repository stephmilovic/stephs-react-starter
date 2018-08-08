import React from 'react';
import Header from 'components/header';
import Main from 'components/main';

const title = 'My Minimal React Webpack Babel Setup';

export default () =>
    <div>
        <Header />
        <Main />
        <p>{title}</p>
    </div>;