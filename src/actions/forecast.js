import {
    SELECT_FORECAST_OPTION,
} from 'src/types';

export function selectForecastOption(forecastOption) {
    return {
        type: SELECT_FORECAST_OPTION,
        forecastOption,
    };
}