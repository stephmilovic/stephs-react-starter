import React from 'react';

export default ({onSubmit, handleInputChange, name, position, number}) => {
    return (
        <form onSubmit={onSubmit}>
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