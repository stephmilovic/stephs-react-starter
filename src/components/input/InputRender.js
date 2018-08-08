import React from 'react';

export default props =>
    <div>
        <input
            type="text"
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
        />
    </div>;