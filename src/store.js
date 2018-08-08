import { createStore, combineReducers, applyMiddleware } from 'redux';
import message from 'src/reducers/message';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    message,
});

const store = createStore(
    reducer,
    process.env === 'development' ? composeWithDevTools(applyMiddleware(thunk)) :  applyMiddleware(thunk),
);

export default store;