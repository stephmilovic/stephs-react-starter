import React from 'react';
import Header from 'src/components/header';
import Main from 'src/routes/main';
import Input from 'src/components/input/InputView';
import './main.scss';

const title = 'My Minimal React Webpack Babel Setup';

export default () =>
    <div>
        <Header />
        <Main />
        <p>{title}</p>
        <Input />
    </div>;