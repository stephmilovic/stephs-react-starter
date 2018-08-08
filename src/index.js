import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'components/nav';
import style from './main.scss';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
    <div>
        <Nav />
        {title}
    </div>,
    document.getElementById('app')
);

module.hot.accept();