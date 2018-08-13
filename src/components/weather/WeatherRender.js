import React from 'react';
import LocationSearch from 'src/components/location-search/LocationSearchView';
import Forecast from 'src/components/forecast/ForecastRender';
import ForecastSelector from 'src/components/forecast-selector/ForecastSelectorView';

export default ({location, hasError, isLoading, forecastOption}) => {
    const renderLocation = () => {
        if (hasError) {
            return <p>The location you entered is not valid.</p>;
        }
        if (isLoading) {
            return <p>Loading ...</p>;
        }
        if (location) {
            return (
                <div>
                    <ForecastSelector />
                    {forecastOption === 'daily' ?
                        <Forecast {...location.consolidated_weather[0]} locationName={location.title} />
                        : location.consolidated_weather.map((day, i) => <Forecast key={i} {...day} locationName={location.title} />)
                    }

                </div>
            );
        }
    };

    return (
        <div>
            <LocationSearch />
            {renderLocation()}
        </div>
    );
};