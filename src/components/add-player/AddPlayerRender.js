import React from 'react';

export default ({onSubmit, handleInputChange, name, position}) => {
    return (
        <form onSubmit={onSubmit} style={{marginTop: '1em'}}>
            <h3>Add a new player</h3>
            <input
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => handleInputChange(e)} />
            <input
                name="position"
                type="text"
                placeholder="Position"
                value={position}
                onChange={e => handleInputChange(e)} />
            <input type="submit" />
        </form>
    );
};