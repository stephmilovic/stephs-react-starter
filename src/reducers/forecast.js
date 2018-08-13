import {
    SELECT_FORECAST_OPTION,
} from 'src/types';

export function selectForecastOption(state = 'daily', action) {
    switch (action.type) {
        case SELECT_FORECAST_OPTION:
            return action.forecastOption;
        default:
            return state;
    }
}
