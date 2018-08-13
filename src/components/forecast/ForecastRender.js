import React from 'react';

export default ({
    air_pressure,
    applicable_date,
    humidity,
    id,
    max_temp,
    min_temp,
    predictability,
    the_temp,
    visibility,
    weather_state_abbr,
    weather_state_name,
    wind_direction,
    wind_direction_compass,
    wind_speed,
    locationName,
}) =>
    <div>
        <h3>{locationName} Weather for {applicable_date}</h3>
        <ul>
            <li>Air Pressure: {air_pressure}</li>
            <li>Humidity: {humidity}</li>
            <li>High: {max_temp}</li>
            <li>Low: {min_temp}</li>
            <li>Visibility: {visibility}</li>
            <li>Wind Speed: {wind_speed}</li>
            <li>Wind Direction: {wind_direction}</li>
        </ul>
    </div>;