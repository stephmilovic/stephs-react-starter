import React from 'react';
import { Link } from 'react-router-dom';

export default ({player}) => {
    if (!player) {
        return <div>Sorry, but the player was not found</div>;
    }
    return (
        <div>
            <h3>{player.name} (#{player.number})</h3>
            <p>Position: {player.position}</p>
            <Link to="/roster">Back</Link>
        </div>
    );
};