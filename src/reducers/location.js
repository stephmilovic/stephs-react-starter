import {
    LOCATION_HAS_ERROR,
    LOCATION_IS_LOADING,
    LOCATION_FETCH_DATA_SUCCESS,
} from 'src/types';
import { combineReducers } from 'redux';

export function locationHasError(state = false, action) {
    switch (action.type) {
        case LOCATION_HAS_ERROR:
            return action.hasError;
        default:
            return state;
    }
}

export function locationIsLoading(state = false, action) {
    switch (action.type) {
        case LOCATION_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function locationSuccess(state = {}, action) {
    switch (action.type) {
        case LOCATION_FETCH_DATA_SUCCESS:
            return {...state, activeLocation: action.location.woeid, [action.location.woeid]: action.location};
        default:
            return state;
    }
}

export const location = combineReducers({
    location: locationSuccess,
    locationIsLoading: locationIsLoading,
    locationHasError: locationHasError,
});