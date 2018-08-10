import React from 'react';
import { Link } from 'react-router-dom';
import AddPlayer from 'src/components/add-player/AddPlayerView';

export default ({isLoading, players, hasError}) => {
    if (hasError) {
        return <p>Sorry! There was an error loading the players</p>;
    }

    if (isLoading) {
        return <p>Loading ...</p>;
    }
    return (
        <div>
            <ul>
                {Object.keys(players).map(player => {
                    player = players[player];
                    return (
                        <li key={player.number}>
                            #{player.number} - <Link to={`/roster/${player.number}`}>{player.name}</Link>
                        </li>
                    );
                })}
            </ul>
            <AddPlayer />
        </div>
    );
};