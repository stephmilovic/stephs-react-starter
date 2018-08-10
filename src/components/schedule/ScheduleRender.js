import React from 'react';

export default ({isLoading, schedule, hasError}) => {
    if (hasError) {
        return <p>Sorry! There was an error loading the schedule</p>;
    }

    if (isLoading) {
        return <p>Loading ...</p>;
    }
    return (
        <div>
            <h3>Schedule</h3>
            <ul>
                {schedule.length ? schedule.map((game, i) => {
                    return (
                        <li key={i}>
                            {game}
                        </li>
                    );
                }): ''}
            </ul>
        </div>
    );
};