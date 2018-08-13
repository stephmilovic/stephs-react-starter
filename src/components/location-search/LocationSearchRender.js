import React from 'react';

export default ({onSubmit, handleInputChange, location}) => {
    return (
        <form onSubmit={onSubmit} style={{marginTop: '1em'}}>
            <h3>Search A Location</h3>
            <input
                name="location"
                type="text"
                placeholder="Location"
                value={location}
                onChange={e => handleInputChange(e)} />
            <input type="submit" />
        </form>
    );
};