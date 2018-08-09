import { combineReducers } from 'redux';
import {roster} from 'src/reducers/players';
import message from 'src/reducers/message';

const reducer = combineReducers({
    message,
    roster,
});

export default reducer;