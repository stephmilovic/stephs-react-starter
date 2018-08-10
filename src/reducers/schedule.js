import {
    SCHEDULE_HAS_ERROR,
    SCHEDULE_IS_LOADING,
    SCHEDULE_FETCH_DATA_SUCCESS,
} from 'src/types';
import { combineReducers } from 'redux';

export function scheduleHasError(state = false, action) {
    switch (action.type) {
        case SCHEDULE_HAS_ERROR:
            return action.hasError;
        default:
            return state;
    }
}

export function scheduleIsLoading(state = false, action) {
    switch (action.type) {
        case SCHEDULE_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function scheduleRed(state = {}, action) {
    switch (action.type) {
        case SCHEDULE_FETCH_DATA_SUCCESS:
            return action.schedule;
        default:
            return state;
    }
}

export const schedule = combineReducers({
    schedule: scheduleRed,
    scheduleIsLoading,
    scheduleHasError,
});