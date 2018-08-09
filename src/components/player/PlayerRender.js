import React from 'react';
import { Link } from 'react-router-dom';

export default ({player}) => {
    if (!player) {
        return <div>Sorry, but the player was not found</div>;
    }
    console.log('player', player);
    return (
        <div>
            <h1>{player.name} (#{player.number})</h1>
            <h2>Position: {player.position}</h2>
            <Link to="/roster">Back</Link>
        </div>
    );
};