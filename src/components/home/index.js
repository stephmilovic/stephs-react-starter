import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div>
        <p>The official website of White Sox Baseball</p>
        <p>Learn about our great <Link to={'/roster'}>players</Link>.</p>
        <img src={require('src/images/sox.png')} alt="White Sox" />
    </div>
);