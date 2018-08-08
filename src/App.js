import React from 'react';
import Header from 'src/components/header';
import Main from 'src/components/main';
import Input from 'src/components/input/InputView';

const title = 'My Minimal React Webpack Babel Setup';

export default () =>
    <div>
        <Header />
        <Main />
        <p>{title}</p>
        <Input />
    </div>;