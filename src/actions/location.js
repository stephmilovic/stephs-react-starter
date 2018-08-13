import {
    LOCATION_HAS_ERROR,
    LOCATION_IS_LOADING,
    LOCATION_FETCH_DATA_SUCCESS,
} from 'src/types';

export function locationHasError(bool) {
    return {
        type: LOCATION_HAS_ERROR,
        hasError: bool,
    };
}

export function locationIsLoading(bool) {
    return {
        type: LOCATION_IS_LOADING,
        isLoading: bool,
    };
}

export function locationFetchDataSuccess(location) {
    return {
        type: LOCATION_FETCH_DATA_SUCCESS,
        location,
    };
}