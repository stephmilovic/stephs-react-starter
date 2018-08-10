import { combineReducers } from 'redux';
import {roster} from 'src/reducers/players';
import {schedule} from 'src/reducers/schedule';

const reducer = combineReducers({
    roster,
    schedule,
});

export default reducer;