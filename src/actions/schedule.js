import {
    SCHEDULE_HAS_ERROR,
    SCHEDULE_IS_LOADING,
    SCHEDULE_FETCH_DATA_SUCCESS,
} from 'src/types';

export function scheduleHasError(bool) {
    return {
        type: SCHEDULE_HAS_ERROR,
        hasError: bool,
    };
}

export function scheduleIsLoading(bool) {
    return {
        type: SCHEDULE_IS_LOADING,
        isLoading: bool,
    };
}

export function scheduleFetchDataSuccess(schedule) {
    return {
        type: SCHEDULE_FETCH_DATA_SUCCESS,
        schedule,
    };
}