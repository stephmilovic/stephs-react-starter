import axios from 'axios';

import {
    locationIsLoading,
    locationFetchDataSuccess,
    locationHasError,
} from './location';


const getWeatherForLocation = function(location) {
    return new Promise(function(resolve) {
        axios.get(`//www.metaweather.com/api/location/${location}`)
            .then((response) => {
                resolve(response);
            });
    });
};

export function getLocation(queryLocation) {
    return (dispatch, getState) => {
        dispatch(locationIsLoading(true));

        const {location} = getState();
        axios.get(`//www.metaweather.com/api/location/search/?query=${queryLocation}`)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                if (!response.data.length) {
                    dispatch(locationIsLoading(false));
                    return dispatch(locationHasError(true));
                }
                if (Object.keys(location.location).indexOf(response.data[0].woeid.toString()) > -1) {
                    dispatch(locationIsLoading(false));
                    return dispatch(locationFetchDataSuccess(location.location[response.data[0].woeid]));
                }
                getWeatherForLocation(response.data[0].woeid)
                    .then(res => {
                        dispatch(locationIsLoading(false));
                        dispatch(locationFetchDataSuccess(res.data));
                    });
            })
            .catch(() => dispatch(locationHasError(true)));
    };
}

