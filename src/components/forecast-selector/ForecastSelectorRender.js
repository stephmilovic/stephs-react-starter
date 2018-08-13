import React from 'react';

export default ({handleOptionChange, option}) => {
    return  (

        <form>
            <div className="radio">
                <label>
                    <input type="radio" value="daily" checked={option === 'daily'} onChange={handleOptionChange} />
                    Daily
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" value="weekly" checked={option === 'weekly'} onChange={handleOptionChange}/>
                    Weekly
                </label>
            </div>
        </form>
    );
};