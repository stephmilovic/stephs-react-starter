import { combineReducers } from 'redux';
import {selectForecastOption} from 'src/reducers/forecast';
import {location} from 'src/reducers/location';


const reducer = combineReducers({
    location,
    forecastOption: selectForecastOption,
});

export default reducer;