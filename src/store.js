import { createStore, applyMiddleware } from 'redux';
import reducer from 'src/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    reducer,
    process.env === 'development' ? composeWithDevTools(applyMiddleware(thunk)) :  applyMiddleware(thunk),
);

export default store;